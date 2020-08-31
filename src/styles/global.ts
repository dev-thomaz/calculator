import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    padding:0%;
    margin:0;
    outline:0;
    box-sizing: border-box;
    -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
}

    body{
        background: #EFEFEF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 16px roboto, sans-serif
    }

    #root{
        max-width:600px;
        margin:0 auto;
        padding: 40px 0;
    }
`