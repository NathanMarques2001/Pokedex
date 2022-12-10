import './style.css'
import React from 'react'
import BG from '../../../assets/images/desktop/AboutBG.svg'

export function AboutDesk() {
  return (
    <>
      <div id="about-main">
        <div id="line1"> </div>
        <div id="line2"> </div>
        <img id="background" src={BG} alt="background" />
        <div id="text-limit">
          <div id="text-about">
            <strong id="title-about">
              {' '}
              SOBRE O PROJETO <br /><br />
            </strong>{' '}
            O projeto Pokédex foi desenvolvido utilizando o Figma para criar o
            frontend do projeto, a API PokeAPI que faz a busca dos dados dos
            Pokémon e as tecnologias: HTML, CSS e ReactJS. O projeto foi
            realizado com o intuito de aprender mais sobre o consumo de APIs e ReactJS.
          </div>
        </div>
        <div id="line3"> </div>
        <div id="line4"> </div>
      </div>
    </>
  )
}
