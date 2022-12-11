import './style.css'
import CBGD from '../../../assets/images/desktop/ContactBG.svg'
import pokeballContact from '../../../assets/images/desktop/pokebola-G.svg'

export function ContactDesk() {
  return (
    <>
      <div id="contact-main">
        <div id="line1-c"> </div>
        <div id="line2-c"> </div>
        <img src={CBGD} alt="background" id="background-contact" />
        <div id="text-container">
          <div id="text-contact">
            {' '}
            <p id="LinkedIn">
              <span>
                <img src={pokeballContact} alt="" id="pokeballContact" />
              </span>
              <span>LINKEDIN</span>
              <span id="link">
                <a
                  href="https://www.linkedin.com/in/nathan-marques-1a7818244/"
                  target="_blank"
                >
                  LinkedIn Nathan
                </a>
              </span>
            </p>
            <p id="Github">
              <span>
                <img src={pokeballContact} alt="" id="pokeballContact" />
              </span>
              <span>GITHUB</span>
              <span id="link">
                <a href="https://github.com/NathanMarques2001" target="_blank">
                  GitHub Nathan
                </a>
              </span>
            </p>
            <p id="Curriculo">
              <span>
                <img src={pokeballContact} alt="" id="pokeballContact" />
              </span>
              <span>CURRICULO</span>
              <span id="link">EM CONSTRUÇÃO</span>
            </p>
          </div>
        </div>
        <div id="line3-c"> </div>
        <div id="line4-c"> </div>
      </div>
    </>
  )
}
