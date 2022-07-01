import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:200..900');
    *{
        font-family: 'Raleway', sans-serif;
        user-select: none;
    }
    h1{
        font-size: 24px;
        font-weight: 900;
    }
    h2{
        font-size: 16px;
    }
    h3{
        margin: 0;
    }
    p{
        line-height: 1.5rem;
    }
    ul{
        padding: 0;
        margin: 0;
        li{
            list-style: none;
        }
    }
`;

export default GlobalStyles;