import './style.css'
import ABGS from '../../../assets/images/smartphone/AboutBG.svg'

export function AboutSmart() {
  return (
    <>
      <div id="about-main-smart">
        <img id="background-about-smart" src={ABGS} alt="background" />
        <div id="text-limit-smart">
          <div id="text-about-smart">
            <strong id="title-about-smart">
              {' '}
              SOBRE O PROJETO <br />
            </strong>{' '}
            O projeto Pokédex foi desenvolvido utilizando o Figma para modelar o
            frontend do projeto, a API PokeAPI para fazer a busca dos dados dos
            Pokémon e as tecnologias: HTML, CSS, ReactJS e GIT. O projeto foi
            realizado com o intuito de aprender mais sobre ReactJS e o consumo
            de APIs.
          </div>
        </div>
      </div>
    </>
  )
}
