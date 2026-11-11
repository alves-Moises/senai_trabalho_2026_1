export async function equipRoutes(app){
    app.get("/", (req, res) => {
        res.code(200).send({message:"bookOK"})
    })

    app.get("/:id", (req, res) =>{
        res.code(200).send({message: "geting id equipment"})
    })

    app.post("/", (req, res) => {
        const data = {...req.body}
        res.code(201).send({message: data})
    })

    app.delete("/:id", (req, res) => {
        const id = req.params.id

        res.code(204).send({message: `${id} deleted?`})
    })


    app.put("/:id", (req, res) => {
        const id = req.params.id
        res.code(205).send({message: `puted: ${id}`})
    })
}