export async function userRoutes(app){
    app.get("/", (req, res) => {
        res.code(200).send({message: "userOK"})
    })
}