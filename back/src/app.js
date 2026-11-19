import Fastify from 'fastify'
import { defaultRoutes } from "./routes/routes.js"
import cors from '@fastify/cors'

export function buildApp(){
    const app = Fastify({ logger: true })
    app.register(
        cors, 
        {
            origin: "*",
            methods: ['GET', 'POST', 'PUT', 'DELETE']
        },
    
    )

    app.register(
        defaultRoutes,
        {
            prefix: "/"
        }
    )

    return app
}