import axios from "axios";
import { Dark_blur } from "./style";
export default function ModalUpdate({
    id="",
    name="",
    category="",
    ns="",
    available="",
    acquisition_date="",
    
    // id,
    // name,
    // category,
    // ns,
    // available,
    // acquisition_date,
    setModalInfo="",
    setOpenModal="",
    method="put"
}){
    const URLBASE = "http://localhost:8000/equip/"

    async function submitEquip(e){
        e.preventDefault()

        
        const data = Object.fromEntries(new FormData(e.currentTarget))
        data.available = true
        
        
        console.log("data:")
        console.log(data)

        if(method=="put"){

            const res = await axios.put(
                `${URLBASE}${id}`,
                {
                    id: id,
                    ...data
                }
            ).then(() => {
                alert(`${data.name} atualizado com sucesso.`)
                { setModalInfo(data) }
            })
            setOpenModal(false)
        }else{
            const res = await axios.post(
                URLBASE,
                {...data}
            )

            console.log(res.status)
            // setOpenModal(false)
            window.location.reload()
        }

    }

    return(
        
        <Dark_blur> 
            <div className="content">
                <button 
                    className="close"
                    onClick={(e) => {setOpenModal(false)}}
                >
                    <span className="close">&times;</span>
                </button>

                <form onSubmit={submitEquip}>
                    <div className="field">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name" 
                            name="name"
                            defaultValue={name}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="form_cat">Category:</label>
                        <input
                            type="text"
                            id="form_cat" 
                            name="category" 
                            defaultValue={category}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="ns">SN:</label>
                        <input
                            type="text"
                            id="ns" 
                            name="ns" 
                            defaultValue={ns}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="form_availability">Available:</label>
                        <select
                            name="available"
                            id="form_availability" 
                            defaultValue={available}
                        >
                            <option value="true">Available</option>
                            <option value="false">Unavailable</option>
                        </select>
                    </div>

                    <div className="field">
                        <label htmlFor="acquisition_date">Acquisition date:</label>
                        <input
                            type="text"
                            id="acquisition_date" 
                            name="acquisition_date" 
                            defaultValue={acquisition_date}
                            required
                        />
                    </div>

                    <button onSubmit={(e)=>{updateEquip(e)}}>{method=="put" ? "UPDATE" : "CREATE"}</button>
                </form>
            </div>
        </Dark_blur>
    )
}