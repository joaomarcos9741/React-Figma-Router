import * as S from "./styles"
import lupa from "../../assets/lupa.png"
import carrinho from "../../assets/carrinho.png"
import { Button } from "../Button"



export function Header() {
  return (
    <>
      <S.Header>
        <div>
        <img src={lupa} alt="lupa" />
        <img src={carrinho} alt="carrinho" />
        </div>
        <Button Text="Comprar" />
        
          


      </S.Header>
    </>
  )


}