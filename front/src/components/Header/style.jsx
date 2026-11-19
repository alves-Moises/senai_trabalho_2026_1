import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-around;
    padding: 16px 8px;
    width: 100vw;
    background-color: #280918;

    border-bottom: 1px solid #ddd;

    button{
        background-color: #01012c;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;

        transition: 1s;
        &:hover{
            filter: brightness(1.2);
            transition: 1s;
        }
    }
`