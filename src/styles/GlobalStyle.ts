import { createGlobalStyle } from "styled-components";
export const colors = {
    primary: "#43E8DE",
    secondary: "#000000",
    third: "#F0F0F0",
    fourth: "#B068C9",
    black: "#000000",
    thirdLight: "#d9d9d9",
    white: "#fff",
    while: "#f0f0f0"
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${colors.while};
    }

    ul li a{
        
    }
`

