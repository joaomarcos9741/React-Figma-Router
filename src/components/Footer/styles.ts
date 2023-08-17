import styled from "styled-components"
import{ colors } from "../../styles/GlobalStyle"


export const Footer = styled.footer`
  /* Rodapé */
  display: flex;
  background-color: ${colors.primary};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  img {
    height: 100%;
    padding: 0.4rem;
    

  }
`
