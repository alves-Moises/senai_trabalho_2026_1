import mysql from 'mysql2/promise'
import chalk from 'chalk'


export const db = await mysql.createConnection({
    // host: "172.23.144.1",
    // port:       3306,
    // user:       "wsl_senai",
    // password:   "123",
    // database: "senai_manager",
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0


    host: "localhost",
    port:       3306,
    user:       "root",
    password:   "123",
    database: "senai_manager",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

console.log(chalk.greenBright("Conectado ao mysql!"))