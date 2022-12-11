import './style.css'
import ABGD from '../../../assets/images/desktop/AboutBG.svg'

export function AboutDesk() {
  return (
    <>
      <div id="about-main">
        <div id="line1-ad"> </div>
        <div id="line2-ad"> </div>
        <img id="background-about" src={ABGD} alt="background" />
        <div id="text-limit">
          <div id="text-about">
            <strong id="title-about">
              {' '}
              SOBRE O PROJETO <br /><br />
            </strong>{' '}
            O projeto Pokédex foi desenvolvido utilizando o Figma para modelar o
            frontend do projeto, a API PokeAPI para fazer a busca dos dados dos
            Pokémon e as tecnologias: HTML, CSS, ReactJS e GIT. O projeto foi
            realizado com o intuito de aprender mais sobre ReactJS e o consumo de APIs.
          </div>
        </div>
        <div id="line3-ad"> </div>
        <div id="line4-ad"> </div>
      </div>
    </>
  )
}
