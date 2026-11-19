import {
    getEquips,
    getEquip,
    insertEquip,
    getEquipByNS,
    deleteEquip,
    updateEquip
} from  "../models/equipments.js"

export async function getAllEquipments(req, res){
    const equip_list = await getEquips()
    res.code(200).send(equip_list)
}

export async function getSingleEquip(req, res){
    const equip = await getEquip(req.params.id)

    if(!equip){
        res.code(404).send({message: "Not found.."})
    }

    res.code(200).send(equip)
}

export async function postEquip(req, res) {
    const NS = req.body.ns
    const hasntNS = (await getEquipByNS(NS))[0].length == 0

    if(hasntNS){
        const new_equip = await insertEquip(req.body)
        res.code(201).send(new_equip)
    }else{
        res.code(409).send({message: `NS ${NS} already exists`})
    }
}


export async function removeEquip(req, res) {
    const id = req.params.id
    const removed_equip = await deleteEquip(id)
    res.code(202).send({message: removed_equip})
}

export async function putEquip(req, res){
    const id = req.params.id 
    const data = req.body

    const NS = req.body.ns
    const hasntNS = (await getEquipByNS(NS))[0].length <= 1

    res.code(200).send({message: updated_equip})
}