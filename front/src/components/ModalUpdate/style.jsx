import styled from "styled-components";

export const Dark_blur = styled.div`

    display:fixed;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    overflow: auto;
    background-color: #8c8c8c69;

    .content{

        background-color: #271208;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 35%;

        display: flex;
        flex-direction: column;

        .close{
            margin-right: 0;
            margin-left: auto;
            color: #850303;
            font-size: 28px;
            cursor: pointer;

            &:hover{
                filter: brightness(1.2);
            }
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: stretch;

            .field{
                display: flex;
                flex-direction: row;

                align-items: baseline;
                justify-content: space-between;
                border-bottom: 1px solid #968888;
                margin-bottom: 16px;

                label{
                    padding-left: 12px;
                }
                input{
                    padding-right: 12px;
                    margin: 4px;

                }
            }
            button{
                width: 120px;

                margin-left: auto;
                margin-right: auto;
                
                padding-top: 4px;
                padding-bottom: 4px;
                
                border-radius: 4px;

                background-color: #d7e83e;
                color: #000000;
                transition: 1s;

                font-weight: 60;


                &:hover{
                    transform: scale(1.02);
                    transition: 1s;
                    filter: brightness(1.2);

                    box-shadow: 2px 4px 22px 5px rgba(80, 83, 0, 0.68);
                }
            }
        }
        input, select, opt{
            background-color: #370202;
            padding: 8px;
            border-radius: 4px;
        }
        select{
            margin: 4px;
        }

        .close{
            background: none;
            border: none;

            
        }
    }

`