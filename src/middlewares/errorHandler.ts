import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpError";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const NODE_ENV = process.env.NODE_ENV ?? "production"

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = 500 // Padrão: Erro interno do servidor
    let message = 'Um erro interno inesperado ocorreu.'
    let debugDetails: any | undefined; // Para detalhes extras APENAS em erros do Prisma no desenvolvimento

    if (err instanceof z.ZodError) {
        const errors = err.errors.map(issue => ({
            message: issue.message
        }))

        res.status(400).json({ message: 'Erro de validação dos dados.', errors: errors })
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        statusCode = 400; // Requisição inválida para a maioria dos erros Prisma conhecidos

        // APENAS PARA ERROS DO PRISMA: Coleta detalhes de debug se for desenvolvimento
        if (NODE_ENV === 'development') {
            debugDetails = {
                prismaCode: err.code,
                prismaMeta: err.meta,
                prismaClientVersion: err.clientVersion,
                prismaOriginalMessage: err.message,
                stack: err.stack // Inclui o stack trace para o erro do Prisma
            };
        }

        switch (err.code) {
            case 'P2003': // Violação de chave estrangeira
                const foreignKeyField = (err.meta as any)?.field_name;
                if (foreignKeyField) {
                    if (foreignKeyField.includes('vehicle_id')) {
                        message = 'O veículo selecionado não foi encontrado ou não é válido.';
                    } else if (foreignKeyField.includes('user_id')) {
                        message = 'O usuário selecionado não foi encontrado ou não é válido.';
                    } else {
                        message = 'Não foi possível completar a operação. Um item relacionado não existe ou é inválido.';
                    }
                } else {
                    message = 'Não foi possível completar a operação. Um item relacionado não existe ou é inválido.';
                }
                break;

            case 'P2002': // Violação de unicidade
                const uniqueField = (err.meta as any)?.target;
                message = uniqueField ? `Este valor para "${uniqueField}" já está em uso. Por favor, escolha outro.` : 'O valor fornecido para um campo único já existe.';
                break;

            case 'P2025': // Registro não encontrado
                message = 'O item que você tentou modificar ou excluir não foi encontrado.';
                break;

            case 'P2000': // Valor muito longo para a coluna
                message = 'Um dos valores fornecidos é muito longo. Por favor, verifique os dados.';
                break;

            case 'P2001': // Registro não existe para findUnique/findFirst
                message = 'O registro solicitado não foi encontrado.';
                break;

            default:
                // Para outros erros Prisma conhecidos não tratados especificamente
                console.error(`Erro desconhecido do Prisma (${err.code}):`, err.message); // Sempre loga no console do servidor
                message = 'Ocorreu um erro inesperado no banco de dados. Por favor, tente novamente mais tarde.';
                break;
        }
        const responseBody: any = { message };
        if (NODE_ENV === 'development' && debugDetails) {
            responseBody.debug = debugDetails;
        }
        res.status(statusCode).json(responseBody)
    } else if (err instanceof Prisma.PrismaClientValidationError) {
        // Erros de validação do Prisma (ex: campos obrigatórios faltando, tipos errados na entrada para o Prisma)
        statusCode = 400; // Requisição inválida
        message = 'Os dados fornecidos são inválidos ou incompletos. Por favor, verifique os campos.';
        console.error('Erro de validação do Prisma:', err.message); // Sempre loga no console do servidor

        // APENAS PARA ERROS DO PRISMA: Coleta detalhes de debug se for desenvolvimento
        if (NODE_ENV === 'development') {
            debugDetails = {
                prismaValidationError: err.message,
                prismaClientVersion: err.clientVersion,
                stack: err.stack // Inclui o stack trace para o erro de validação do Prisma
            };
        }
        const responseBody: any = { message };
        if (NODE_ENV === 'development' && debugDetails) {
            responseBody.debug = debugDetails;
        }
        res.status(statusCode).json(responseBody)
    } else if (err instanceof HttpError) {
        res.status(err.status).json({ message: err.message })
    } else if (err instanceof Error) {
        res.status(500).json({ message: err.message })
    } else {
        res.json(500).json({ message: 'Internal server error' })
    }
} 