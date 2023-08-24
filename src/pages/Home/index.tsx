import * as S from './styles'
import Falen from "../../assets/Falen.png"


export function Home() {
    return(
        <S.Section>
            <p>
            Fallen é uma série de livros de romance e mistério sobre anjos
             escrita pela norte-americana Lauren Kate. A saga conta a história de Lucinda Price,
              uma garota que é mandada para um reformatório, tida como piromaníaca.
            </p>
            <picture>
                <img src={Falen} alt="../../assets/Falen.png" />
            </picture>
        </S.Section>
    )
}