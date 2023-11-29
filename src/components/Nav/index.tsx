import * as S from "./styles"



export function NavBar(){

    return(
        
        <S.NavBar>

            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/cadastrar">Cadastrar</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/biblioteca">Biblioteca</a></li>
            </ul>

        </S.NavBar> 

        
    )
}