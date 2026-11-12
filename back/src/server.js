import { buildApp } from "./app.js"
import { configDotenv } from "dotenv"
import { db } from "./db/connection.js"

configDotenv()
const app = buildApp()

app.listen(
    { port: process.env.PORT },
    (err, address) => {
        if(err) {
            app.log.error(err)
            process.exit(1)
        }

    console.log(`Servidor rodando em ${address}`)
})