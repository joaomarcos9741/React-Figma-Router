import * as S from "./styles"
import lupa from "../../assets/lupa.png"
import { NavBar } from "../Nav"



export function Header() {
  return (
    <>
      <S.Header>
        <div>
        <img src={lupa} alt="lupa" />
          
        </div>

        <NavBar></NavBar>

        
          


      </S.Header>
    </>
  )


}