import Fastify from 'fastify'
import { defaultRoutes } from "./routes/routes.js"

export function buildApp(){
    const app = Fastify({ logger: true })
  
    app.register(
        defaultRoutes,
        {
            prefix: "/"
        }
    )

    return app
}