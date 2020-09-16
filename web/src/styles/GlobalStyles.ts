import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
:root{
    font-size: 60%;

    --color-background: #e7e7eb;
    --color-background-input:#eff7ef;
    --color-background-li:#fcfcfc;
    --color-label: #838a83;
    --color-menu: #81c784;
    --color-menu-dark: #4e7451;
    --color-text-menu:#f1f3f1;
    --color-border-input:#c9c9c9;
    --color-titulo:#323442;
    --color-link:#297eaf;

    --color-white:#fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}
table{
    border:0;
    margin: 0;
}

html,
body,
#root{
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
}

body{
    background: var( --color-background) ;
}

#root{
    display: flex;
    align-items: center;
    justify-content: center;
}

body,
input,
button{
    font: 500 1.6rem Poppins;
}

.container{
    width: 100vw;
}

ul, li{
    list-style: none;
}

    `;