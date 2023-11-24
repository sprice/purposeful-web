# Purposeful Web App

## Installation

1. Clone locally and run `$ yarn`
2. Set up clerk.com App
3. Set up planetscale.com DB
4. Install `pscale` locally. `$ brew install pscale`
5. `$ pscale auth login`
6. Ensure you are using the correct Planet Scale org. `$ pscale org list`
7. Switch org if needed. `$ pscale org switch ORG_NAME`
8. Create a database dev branch `$ pscale branch create DB_NAME dev`
9. Start local database. `$ pscale connect DB_NAME dev --port 3309`
10. `$ $npx prisma generate`
11. `$ npx prisma db push`

## VS Code Extensions

- Prisma v5.6.0
