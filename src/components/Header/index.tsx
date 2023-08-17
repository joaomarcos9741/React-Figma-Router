import * as S from "./styles"
import lupa from "../../assets/lupa.png"
import carrinho from "../../assets/carrinho.png"
import { IPage } from "../../App"


export function Header() {
  return (
    <>
      <S.Header>
        <img src={lupa} alt="lupa" />
        <img src={carrinho} alt="carrinho" />
      </S.Header>
    </>
  )


}