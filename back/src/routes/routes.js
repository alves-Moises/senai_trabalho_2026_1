import { v4 } from "uuid"
import { equipRoutes } from "./equip-routes.js"
import { userRoutes } from "./user-routes.js"

export async function defaultRoutes(app){
    app.register(
        equipRoutes,
        {
            prefix: "/equip"
        }
    )

    app.register(
        userRoutes,
        {
            prefix: "/users"
        }
        
    )

    app.get("/", 
        async(req, res) => {
            res.code(200).send({message: "/ default ok"})
        }
    )

    // var users = [
    //     {"id": 1, "name": "pedro", "email": "pedro@xx.yy", "pass": "123", "createdAt": "10-10-10"},
    //     {"id": 2, "name": "pedra", "email": "bo@xx.yy", "pass": "123", "createdAt": "10-10-10"},
    //     {"id": 3, "name": "pedr1", "email": "c@xx.yy", "pass": "123", "createdAt": "10-10-10"},
    //     {"id": 4, "name": "pedr4", "email": "d@xx.yy", "pass": "123", "createdAt": "10-10-12"}
    // ]

    // app.get("", async(req, res) => {
    //     res.code(200).send(users)
    // })

    // app.get("/:id", async(req, res) => {
    //     let user = users.find(user => String(user.id) == req.params.id)

    //     if(!users){
    //         res.code(404).send({message: "not found"})
    //     }
    //     res.code(201).send(user)
    // })


    // app.post("", async(req, res) => {
    //     const newUser = {
    //         id: v4(),
    //         createdAt: new Date(),
    //         ...req.body
    //     }

    //     res.code(201).send({message: "UserCreated"})
    // })


    // app.delete("/:id", async(req, res) => {
    //     users = users.filter(user => user.id != req.params.id)
    //     res.code(202).send({message: "User deleted"})
    // })

    // app.put("/:id", async(req, res) => {
    //     const index = users.findIndex(user => user.id === req.params.id)

    //     if(index === -1){
    //         res.code(404).send({message: "User not found!"})
    //     }

    //     users[index] = req.body
    //     res.code(200).send({message: "User Updated"})
    // })

    // app.patch("/:id", async(req, res) => {
    //     const index = users.findIndex(user => user.id === req.params.id)

    //     users[index] = {
    //         ...users[index], 
    //         ...req.body
    //     }

    //     res.code(200).send({message: "User Updated!!"})

    // })

}