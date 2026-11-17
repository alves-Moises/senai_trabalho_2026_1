import { 
    getAllEquipments, 
    getSingleEquip, 
    postEquip, 
    putEquip, 
    removeEquip,
    
} from "../controller/equip-controller.js"


export async function equipRoutes(app){
    app.get("/", getAllEquipments)
    app.get("/:id", getSingleEquip)
    app.post("/", postEquip)
    app.delete("/:id", removeEquip)
    app.put("/:id", putEquip)

    
    // app.put("/:id", (req, res) => {
    //     const id = req.params.id
    //     res.code(205).send({message: `puted: ${id}`})
    // })
}