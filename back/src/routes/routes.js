import { v4 } from "uuid"
import { equipRoutes } from "./equip-routes.js"

export async function defaultRoutes(app){
    app.register(
        equipRoutes,
        {
            prefix: "/equip"
        }
    )

    // just debug
    app.get("/", 
        async(req, res) => {
            res.code(200).send({message: "/ default ok"})
        }
    )
}