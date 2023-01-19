# BARBERPRO API

[![GitHub](https://img.shields.io/badge/sistema-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/douglasmonteirodev/barberpro-web)
[![Figma](https://img.shields.io/badge/figma-ir-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/tevkFhTTdShQdKUeaouoDB/Barber-PRO?node-id=0%3A1&t=EWRMsr17yEQbtmPu-0)

## Descrição:

### Sobre as tecnologias utilizadas.

- `Foi utilizado Node JS, PostgresSQL, Token JWT e Prisma`

### SOBRE ROTAS:

### <i>Rotas de user</i>

- `/users = tipo POST "Criar novo usuário"`
- `/session = tipo POST "Logar usuário"`
- `/me = tipo GET "Detalhes do usuário"`
- `/users = tipo PUT "Atualizar detalhes do usuário"`

### <i>Rotas de haircut</i>

- `/haircut = tipo POST "Criar novo corte"`
- `/haircut = tipo GET "Listar todos cortes"`
- `/haircut/check = tipo GET "Checar status do corte"`
- `/haircut/count = tipo GET "Checar quantidade de cortes"`
- `/haircut/detail = tipo GET "Checar detalhes de um corte"`
- `/haircut = tipo PUT "Atualizar detalhes de um corte"`

### <i>Rotas de schedule</i>

- `/schedule = tipo POST = "Cria um novo agendamento"`
- `/schedule = tipo GET = "Lista os agendamentos"`
- `/schedule = tipo DELETE = "Deleta um agendamentos"`

### <i>Outras rotas</i>

- `/subscribe = tipo POST = "Cria um usuário premium"`
- `/webhooks = tipo POST = "Rota de webhook para o stripe"`
- `/create-portal = tipo POST = "Cria o portal de pagamento"`

## <i>Douglas Monteiro</i> 😁🔥🚀
