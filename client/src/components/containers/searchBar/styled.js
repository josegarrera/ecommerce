import styled from "styled-components";

const FormSearchBar = styled.div`
    display: flex;

    .searchBar{
        border: 1px solid #e0e0e0;
        border-radius: 30px;
        height: 45px;
        width: 340px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 6px;
    
        &:focus-within{
            border: 1px solid #9e9e9e;
        }

        .input{
            border: none;
            padding:1.5rem;
            background: none;
            border-radius: 30px;
            height: 54px;
            width: 100%;
            font-size: 16px;
            &:focus-within{
                outline: none;
            }
            ::placeholder {
                color: #C0C0C0;
            }
            &:hover {
                cursor: pointer;
            }
        }

        .divLupa{
            width:1rem;
            height:1rem;
            padding:1.2rem;
            background-color: #EE362E;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .lupa{
                color: white;
                font-size: 16px;
            }
            &:hover {
                transform: scale(1.1);
                transition: 0.3s;
                cursor: pointer;
            }
        }
    }
}
`;

export default FormSearchBar;
