import mysql from 'mysql2/promise'
import chalk from 'chalk'


export const db = await mysql.createConnection({
    host: "localhost",
    port:       process.env.DB_PORT,
    user:       process.env.DB_USER,
    password:   `${process.env.DB_PASS}`,
    database: "manager",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

console.log(chalk.greenBright("Conectado ao mysql!"))