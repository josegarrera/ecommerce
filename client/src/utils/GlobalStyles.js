import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        font-family: 'Poppins';
        margin: 0; 
        padding: 0; 
        list-style: none;  
        box-sizing: border-box; 
        box-sizing: border-box;
	    outline: none;
    }

    .div_component_open {
            margin-left: 0rem;
            padding-bottom: 2rem;
            font-size: 2rem;
            font-weight: 900;
            color: ${({theme}) => theme.component};
            span {
                color: ${({theme}) => theme.text};
            }
        }

    body {
        min-height: 100vh;
        
    }

    html {
    font-size: 24px;
    scroll-behavior: smooth;
    }

    @media (max-width: 1921px) {
        html {
            font-size: 22px;
        }
    }

    @media (max-width: 1441px) {
        html {
            font-size: 20px;
        }
    }

    @media (max-width: 1127px) {
        html {
            font-size: 18px;

            .div_component_open {
                margin-left: -6rem;
            }
        }
    }

    @media (min-width: 720px) and (max-width: 1126px){
        html {
            font-size: 13.5px;

            .div_component_open {
            margin-left: -10rem;
            }
        }
    }
`;

export default GlobalStyles;
