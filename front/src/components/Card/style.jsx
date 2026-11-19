import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    
    width: 264px;
    padding: 16px;
    flex-wrap: nowrap;

    border: 1px solid white;
    border-radius: 4px;

    
    background-color: #342530;
    
    -webkit-box-shadow: 7px 9px 18px 4px rgba(112,28,101,0.87); 
    box-shadow: 7px 9px 18px 4px rgba(112,28,101,0.87);
    
    transition: 1s;
    &:hover{
        transform: scale(1.0);
        transition: 1s;
        box-shadow: 9px 11px 18px 8px rgba(112,28,101,0.87);


    }

    p{
        margin-bottom: 4px;
    }

    .available{
        color: #13f113 !important;
    }
    .unavailable{
        color: red !important;
    }

    .title{
        display: flex;
        margin-bottom: 16px;
        border-bottom: 1px solid #dac;
        display: flex;
        justify-content: space-between;
    }

    .btnContainer{
        display: flex;
        justify-content: space-around;
        padding: 16px;
        border-top: 1px solid #8254f9;

        button{
            padding: 4px;
            border-radius: 6px;
            cursor: pointer;
            background-color: #1c0843;
            &:hover{
                transform: scale(1.08);
            }
        }

        .updtBtn{
            transition: 1s;
        
            &:hover{
                transition: 1s;
                color: #13f113;
            }
        }
        
        .delBtn{
            transition: 1s;
            &:hover{
                transition: 1s;
                color: #f11313;
            }
        }
    }

`