import * as S from "./styles"



export function NavBar(){

    return(
        
        <S.NavBar>

            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/cadastrar">Edições</a></li>
                <li><a href="/login">Contato</a></li>
                <li><a href="/biblioteca">Biblioteca</a></li>
            </ul>

        </S.NavBar> 

        
    )
}