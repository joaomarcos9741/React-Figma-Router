import * as S from "./styles"
import instagram from "../../assets/instagram.png"
import twter from "../../assets/twter.png"
import tiktok from "../../assets/tik tok.png" 
import logo from "../../assets/logo.png"



export function Footer() {
    return (
      <S.Footer>
        <img src={logo} alt="logo" />
        <a href="https://intagram.com" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
        <img src={tiktok} alt="tiktok" />
        <img src={twter} alt="twter" />
      </S.Footer>
    )
  }