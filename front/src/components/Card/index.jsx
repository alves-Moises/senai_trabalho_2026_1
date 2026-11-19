import { Container } from "./style"
import axios from "axios"

export default function Card({
    id,
    name,
    category,
    ns,
    available,
    acquisition_date,
    setOpenModal,
    setModalInfo
}){


    const URLBASE = "http://localhost:8000/equip"


    async function delEquip(e, equip){
        e.preventDefault()

        await axios.delete(`${URLBASE}/${equip}`)
        setModalInfo({})
        console.log(deleted)
    }

    async function openModal(e) {
        e.preventDefault()

        await setModalInfo({
            id: id,
            name: name,
            category: category,
            ns: ns,
            available: available,
            acquisition_date: acquisition_date,
            setModalInfo: setModalInfo
        })
        await setOpenModal(true)
    }


    return(
        <>
            <Container>
                <div className="title">
                    <h2>
                        {name}
                    </h2>
                    <span className={available == true ? 'available' : 'unavailable'}>
                        {available == true ? "Available" : "Unavailable"}
                    </span>

                </div>

                <p>
                <strong>
                    Category:
                </strong>
                    {category}
                </p>
                <p>
                    <strong>
                        SN:
                    </strong>
                    {ns}
                </p>

                <p>
                    <strong>Acquisition date:</strong>
                    {acquisition_date}
                </p>

                <div className="btnContainer">
                    <button 
                        className="updtBtn"
                        onClick={ (event)=>{openModal(event)} }
                    >
                        Update
                    </button>
                    <button 
                        className="delBtn"
                        onClick={ (event)=>{delEquip(event, id)} }
                    >
                        Delete
                    </button>
                </div>
            </Container>
        </>

    
    )
}