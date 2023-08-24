
import * as S from "./styles"
import { article_json } from "../../services/articles"
import { ComponentArticle } from "../../components"

export function Biblioteca() {
  return (
    <>
      <S.Biblioteca>
        <h1>Livros</h1>

        {article_json.map(card => (

          <ComponentArticle title={card.title} subtitle={card.subtitle} image_adress={card.image_adress} />
        )

)}
      </S.Biblioteca>
    </>


  )
}

