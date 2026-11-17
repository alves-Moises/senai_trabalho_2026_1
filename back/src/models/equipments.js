import { db } from "../db/connection.js"
import { v4 } from "uuid"


export async function getEquips(){
    const [ equips ] = await db.query("SELECT * FROM equipment")
    return equips
}

export async function getEquip(id){
    const equip = await db.query("SELECT * FROM equipment WHERE id = ?", [id])
    return equip
}

export async function getEquipByNS(NS){
    const equip = await db.query("SELECT * FROM equipment WHERE ns = ?", [NS])
    return equip    
}

export async function insertEquip(equip) {
    const {
        id,
        name,
        category,
        ns,
        acquisition_date
    } = {id: v4(), ...equip}  

    const query = `
        INSERT INTO equipment VALUES (?, ?, ?, ?, ?)
    `

    const result = await db.query(
        query, 
        [
            id,
            name,
            category,
            ns,
            acquisition_date
        ]
    )
    return result
}

export async function deleteEquip(id) {
    const equip = await db.query("DELETE FROM equipment WHERE id = ?", [id])
    return equip
}

export async function updateEquip(id, data){
    delete data.id
    const query = "UPDATE equipment SET name = ?, category = ?, ns = ?, acquisition_date = ? where id = ?"
    const equip = await db.query(query, [...Object.values(data), id])
    return equip
}