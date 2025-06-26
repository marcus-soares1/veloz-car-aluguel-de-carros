import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/HttpError";
import { z } from "zod";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof z.ZodError) {
        const errors = err.errors.map(issue => ({
            message: issue.message
        }))

        res.status(400).json({message: 'Erro de validação dos dados.', errors: errors })
    } else if (err instanceof HttpError) {
        res.status(err.status).json({message: err.message})
    } else if (err instanceof Error) {
        res.status(500).json({message: err.message})
    } else {
        res.json(500).json({message: 'Internal server error'})
    }
} 