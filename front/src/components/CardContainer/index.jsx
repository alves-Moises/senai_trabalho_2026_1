import { 
    useEffect, 
    useState
} from "react";

import { Container } from "./style";
import axios from "axios"
import Card from "../Card";
import ModalUpdate from "../ModalUpdate";

export default function CardContainer(){
    const [cardList, setCardList] = useState([])
    const [loading, setLoading] = useState(true)
    const [OpenModal, setOpenModal] = useState(false)
    const [modalInfo, setModalInfo] = useState()


    async function fetchApi(){

        const URLBASE = "http://localhost:8000/equip/"
        try{
            const res = await axios.get(URLBASE)
            setCardList(res.data)
            console.log(res.data)
            if(!res){
                console.error(`Error: ${res.status}`)
            }
        }catch(err){
            console.log(`Error try: ${err}`)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [modalInfo, modalInfo])

    if(loading){
        return(
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }

    if(OpenModal) {return(
        <ModalUpdate 
            id={modalInfo.id}
            name={modalInfo.name}
            category={modalInfo.category}
            ns={modalInfo.ns}
            available={modalInfo.available}
            acquisition_date={modalInfo.acquisition_date}
            setModalInfo={setModalInfo}          
            setOpenModal={setOpenModal}          
        />
    )}

    if(cardList.length == 0){
        return(
            <Container>
                <h1>Empty</h1>
            </Container>
        )
    }

    return (
        <>
            <Container>
                {cardList.map(
                    ({
                        id,
                        name,
                        category,
                        ns,
                        available,
                        acquisition_date
                    }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                category={category}
                                ns={ns}
                                available={available}
                                acquisition_date={acquisition_date}
                                setOpenModal={setOpenModal}
                                setModalInfo={setModalInfo}
                            />
                        )
                    }
                )}
            </Container>
        </>
    )
}