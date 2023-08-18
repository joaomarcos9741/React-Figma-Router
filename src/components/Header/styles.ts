import styled from "styled-components"
import{ colors } from "../../styles/GlobalStyle"


export const Header = styled.header`
  /* Rodapé */
    background-color: ${colors.primary};
    height: 4rem;
    width: 100%;
    display: flex;
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    header picture {
        margin-bottom: 0.5rem;
        padding: 0.5rem;

    }
    header picture img {
        height: 100%;


    }


`

/*Botão Comprar */

