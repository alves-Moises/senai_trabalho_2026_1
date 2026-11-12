import mysql from 'mysql2/promise'

export const db = await mysql.createConnection({
    host: "localhost",
    port:   process.env.port,
    user: "root",
    password: "123",
    database: "manager",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

console.log("Conectado ao mysql!")