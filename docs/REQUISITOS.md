# 📄 Demanda para Desenvolvimento de API – Locadora de Automóveis

**Solicitante:** Locadora VelozCar
---

## 🎯 Objetivo da API

Desenvolver uma API RESTful para integração e automação dos principais processos da locadora de automóveis VelozCar, com foco em:

- Gestão de frota (cadastro, disponibilidade e status dos veículos);
- Controle de reservas e locações;
- Consulta de clientes e histórico de aluguéis;
- Processamento de devoluções e cálculo automático de valores;
- Integração com sistemas de pagamento e antifraude.

---

## 🧩 Escopo da API

A API deverá contemplar os seguintes **módulos e funcionalidades**:

### 1. Autenticação e Segurança

- Login via token JWT (admin, atendente, cliente);
- Controle de acesso por nível de permissão.

### 2. Clientes

- Cadastro e atualização de clientes;
- Consulta por CPF, e-mail ou ID;
- Histórico de locações.

### 3. Veículos

- Cadastro e atualização de veículos (marca, modelo, placa, categoria, quilometragem, status);
- Consulta de disponibilidade;
- Marcação de manutenção preventiva.

### 4. Reservas e Locações

- Criar e cancelar reservas;
- Realizar check-in e check-out de veículos;
- Cálculo de valor da locação (diárias, adicionais, multas);
- Aplicação de regras de tarifas dinâmicas (ex.: feriados, alta temporada).

### 5. Pagamentos

- Registro de pagamentos e devoluções;
- Integração com gateway (ex.: PagSeguro, Stripe);
- Validação antifraude (se possível via parceiro externo).

## 🛠️ Requisitos Técnicos

- API RESTful desenvolvida preferencialmente em Node.js (ou outra linguagem a ser validada);
- Banco de dados relacional (MySQL ou PostgreSQL);
- Documentação Swagger/OpenAPI;
- Versionamento (ex: `/api/v1/`);
- Código versionado em repositório Git (GitHub)