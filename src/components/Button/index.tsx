import * as S from "./styles"

export interface IText{
    Text : string
}

export const Button = ({ Text } : IText) => {
    return(
        
        <>
        <S.Button>
            <h3>
                <strong>{Text}</strong>
            </h3>
        </S.Button>
        </>

    )
}