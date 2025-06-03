
# 🚗 API de Aluguel de Carros

Esta é uma API RESTful para gerenciamento de aluguel de carros. O projeto foi desenvolvido com Node.js, TypeScript e Prisma ORM.

## ✨ Funcionalidades

- Cadastro de veículos com marca, modelo, categoria e status
- Gerenciamento de aluguéis (status, datas, etc.)
- Gerenciamento de pagamentos (status, tipo, método)
- Categorias de veículos
- Cálculo de valores com precisão usando `decimal.js`

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Jest](https://jestjs.io/) para testes
- [decimal.js](https://mikemcl.github.io/decimal.js/) para manipulação de valores monetários

## 📜 Scripts

```bash
# Iniciar o servidor de desenvolvimento
npm run dev

# Rodar testes
npm run test

# Compilar o TypeScript
npm run build
```

## 🗂️ Organização

- `src/interfaces/`: Interfaces e Enums utilizados no sistema
- `src/modules/`: Módulos separados por responsabilidade
- `src/database/`: Configuração do banco de dados via Prisma

## 📦 DTO

O projeto utiliza DTOs (Data Transfer Objects) para transportar dados entre camadas, garantindo a validação e tipagem correta das informações.

## 💸 Decimal.js

Para lidar com valores monetários com precisão, a biblioteca `decimal.js` é utilizada:

```ts
import { Decimal } from 'decimal.js'

const price = new Decimal(49.99)
const total = price.mul(3)
```
s
## 🧪 Testes

Os testes estão localizados na pasta `__tests__`. Eles utilizam o ambiente `node` com Jest.

## 📋 Requisitos

- Node.js 18+
- PostgreSQL
- npm ou yarn

## 🚀 Instalação

```bash
git clone https://github.com/seuusuario/api-aluguel-carros.git
cd api-aluguel-carros
npm install
npx prisma generate
npx prisma migrate dev
```

## 📁 Estrutura do Projeto

```
src/
├── enums/               # Status e categorias (VehicleStatus, PaymentStatus, etc)
├── interfaces/          # Interfaces de entidades e DTOs
├── repositories/        # Interfaces de acesso a dados
├── services/            # Lógica de negócio
├── utils/               # Helpers e funções utilitárias (ex: parseDecimal)
└── index.ts             # Ponto de entrada
```


## 💰 Trabalhando com valores monetários

Este projeto utiliza decimal.js para representar valores financeiros, evitando problemas de arredondamento comuns com number.

Exemplo:
```
import { Decimal } from 'decimal.js';

const diaria = new Decimal(129.90);
const dias = new Decimal(3);
const total = diaria.mul(dias); // 389.70
```

## 🔀 DTOs (Data Transfer Objects)

Os DTOs são usados para separar os dados recebidos pela API da estrutura interna da aplicação. Isso aumenta a segurança, evita acoplamento e melhora a validação de dados.

Exemplo:
```
export interface ICreateVehiclesDTO {
  brand: Brand;
  model: Model;
  category_id?: number;
  manufacture_year: Date;
  color: string;
  diary_value: Decimal;
  status: VehicleStatus;
  kilometers: Decimal;
}
```

## 🚪 Testes

Caso esteja utilizando testes (recomendado), mantenha-os na pasta __tests__/ com cobertura para:

- Serviços de criação de veículos

- Cálculos financeiros com decimal.js

- Regras de negócio (ex: não alugar veículo indisponível)

## 🚀 Como Executar

Clone o repositório:
``` bash
git clone https://github.com/seu-usuario/vehicle-rental-api.git
```

Instale as dependências:
``` bash
npm install
```

Rode o projeto (modo dev):
``` bash
npm run dev
```

(Opcional) Configure seu banco de dados no .env e rode o Prisma:

``` bash
npx prisma migrate dev
```

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.