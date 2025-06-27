
# 🚗 VelozCar: API de Aluguel de Carros

**Status**: Estágios finais de desevolvimento 🚀

Uma API RESTful completa para gerenciamento de um sistema de aluguel de veículos, construída com **TypeScript**, **Node.js**, **Express** e **Prisma ORM**. Este projeto suporta autenticação, CRUD completo, regras de negócio, validações e testes unitários.

---

## 🔍 Prévia: O que você vai encontrar nesse projeto?

- **API** construída no padrão **RESTful**
- **Arquitetura** que segue os princípios **SOLID**
- **Regras de negócio** intermediário - complexas
- Regras de validação de **autorização** por cargo usando **JWT**
- **Validação de dados** com ZOD
- Rotas para **registro e login**
- Documentação com **Postman**
- **Modo de teste** (demo) para quem apenas quer ver a funcionalidade da API sem ter que passar pela autenticação

## Documentação: Postman
A documentação completa dos enpoints, proteção de cada endpoint e modo de teste.

## 📁 Estrutura do Projeto

```
API-ALUGUEL-CARROS/
├── prisma/                      # Configuração do Prisma ORM
│   ├── schema.prisma            # Modelo de dados
│   ├── migrations/              # Migrações do banco de dados
│   └── seed.ts                  # Script de popular dados iniciais
├── src/
│   ├── controllers/             # Controladores das rotas
│   │   └── schema/              # Validações com Zod
│   ├── database/                # Conexão e transações com o banco
│   ├── errors/                  # Manipulação de erros
│   ├── middlewares/            # Middlewares de autenticação e erros
│   ├── repositories/           # Implementações e interfaces dos repositórios
│   │   └── __tests__/          # Testes unitários de repositórios
│   ├── routes/                 # Arquivos de rotas (Express Router)
│   ├── services/               # Regras de negócio (camada de serviço)
│   └── utils/                  # Funções utilitárias
├── .env                        # Variáveis de ambiente
├── package.json                # Dependências e scripts
├── jest.config.ts             # Configuração de testes
└── README.md                   # Documentação do projeto
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **PostgreSQL** (ou outro banco compatível)
- **Zod** (validação de dados)
- **JWT** (autenticação)

---

## 🔐 Funcionalidades

- [x] Cadastro e login de usuários com JWT
- [x] Cadastro e gerenciamento de veículos
- [x] Sistema de aluguel de carros
- [x] Pagamentos (simulados)
- [x] CRUD completo para categorias, usuários, veículos e aluguéis
- [x] Validação de entrada com Zod
- [x] Middleware de autenticação e tratamento de erros

---

## ⚙️ Como executar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/API-ALUGUEL-CARROS.git
cd API-ALUGUEL-CARROS
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o `.env`

Crie um arquivo `.env` baseado no modelo:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta
```

### 4. Rodar as migrações e seeds

```bash
npx prisma migrate dev --name init
npx ts-node prisma/seed.ts
```

### 5. Iniciar a aplicação

```bash
npm run dev
```

---

## 🧪 Rodar os testes

```bash
npm run test
```

---

## 📌 Endpoints principais

| Método | Rota                    | Descrição                       |
|--------|-------------------------|---------------------------------|
| POST   | `api/auth/login`           | Login de usuário                |
| POST   | `api/auth/register`        | Cadastro de usuário             |
| GET    | `api/vehicles`             | Listar veículos disponíveis     |
| POST   | `api/rentals`              | Criar um novo aluguel           |
| POST   | `api/payments`             | Simular pagamento               |
| ...    |                         | Outras rotas no diretório `/routes` |

---

## 🛠️ Scripts disponíveis

```bash
npm run dev        # Inicia o servidor em modo desenvolvimento
npm run build      # Compila o projeto para produção
npm run start      # Inicia o servidor em produção
npm run test       # Executa os testes com Jest
npx prisma db seed # Gera dados para serem usados de exemplo
```

---

## 🧩 Licença

Este projeto está sob a licença MIT.

---