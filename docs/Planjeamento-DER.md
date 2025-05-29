# Entidades e seus atributos
Lista de entidades que devem estar no DER e quais atributos elas devem ter com base nos requisitos.
## USUÁRIOS ##
- ID (pk)
- CPF
- Nome
- Email
- Data de nascimento
- Senha hash
- Telefone
- Papel ("Admin" | "Atendente" | "Cliente")
- UpdatedAt
- CreatedAt

## Veículos ##
- ID (pk)
- Id da categoria (fk)
- Marca
- Modelo
- Placa
- Quilometragem
- Ano Fabricação
- Cor
- Valor da diária
- Status ("Disponível" | "Alugado" | "Em manutenção")
- UpdatedAt
- CreatedAt

# Relacionamentos #
## Locação ##
- ID (pk)
- Id do cliente (fk)
- Id do veículo (fk)
- ID pagamento (fk)
- Status ("Reservado" | "Alugado" | "Cancelado" | "Finalizado", "Não comparecimento)
- Km de saída
- Km de retorno
- Data do checkin
- Data do checkout
- Dias reservados
- Diária
- Adicionais
- Multa
- Observações
- UpdatedAt
- CreatedAt


## Pagamentos ##
- ID (pk)
- Id da locação (fk)
- Status ("Pago" | "Pendente" | "Estornado" | "Adiantado")
- Tipo de pagamento ("adiantamento" | "final" | "caucao" | "ajuste")
- Valor pago
- Data de pagamento
- Data estorno
- Método de pagamento ("PIX", "Débito", "Crédito")
- Url do comprovate
- UpdatedAt
- CreatedAt

# Outros #
## Categorias veículo ##
- ID (pk)
- Nome categoria
- Descrição da categoria