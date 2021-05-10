import styled from 'styled-components';

const FormSearchBar = styled.div`
    display: flex;

    .searchBar{
        border: 2px solid #E7E7E7;
        border-radius: 30px;
        height: 57px;
        width: 340px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        &:focus-within{
            border: 1px solid #58585A;
        }

        .input{
            border: none;
            background: none;
            border-radius: 30px;
            height: 54px;
            width: 250px;
            font-size: 20px;
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
            height: 45px;
            width: 45px;
            background-color: #EE362E;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

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
