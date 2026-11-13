import { buildApp } from "./app.js"
import { configDotenv } from "dotenv"
import chalk from "chalk"

configDotenv()

const app = buildApp()

app.listen(
    { port: process.env.PORT },
    (err, address) => {
        if(err) {
            app.log.error(err)
            process.exit(1)
        }
        
        console.log(`${chalk.green(`Servidor rodando em `)} ${chalk.yellow(address)}`)
})