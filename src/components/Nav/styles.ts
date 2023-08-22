import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const NavBar = styled.nav`
    
    display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: ${colors.black};
      }
    }
    li:hover {
      background-color: ${colors.third};
    }
  }
`
