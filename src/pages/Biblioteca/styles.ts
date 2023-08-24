
import { styled } from "styled-components"



export const Biblioteca = styled.section`
    display:flex;
    align-items:center;
    align-content:space-evenly;
    flex-wrap:wrap;
    width:80%;
    max-width: 50rem;
    justify-content:space-evenly;
    height:40rem;
    div {
        width: 100%;
    }
    h1 {
        font-family: 'Tilt Prism', cursive;
    }
    @media(max-width:1000px) {
        width:100%;
        min-height:100%;
    }
    @media(max-width:800px) {
    height:auto;
    }
    

`