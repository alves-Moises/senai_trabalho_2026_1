import { HeaderContainer } from "./style";


    if(OpenModal){ 
        return(
            <ModalUpdate 
                setOpenModal={setOpenModal}
                method={"post"}
            />
        )
    }
    return(
        <Container>
            <h1>Equipments</h1>

            <button onClick={(e)=>{setOpenModal(true)}}>New equipment</button>
        </Container>
    )
}