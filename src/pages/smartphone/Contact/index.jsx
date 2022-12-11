import './style.css'
import CBGS from '../../../assets/images/smartphone/ContactBG.svg'
import PBGS from '../../../assets/images/smartphone/PokebolaBG.png'
import pokeballContact from '../../../assets/images/smartphone/pokebola-P.svg'

export function ContactSmart() {
  return (
    <>
      <div id="contact-main-smart">
        <img src={CBGS} alt="background" id="background-contact-smart" />
        <img src={PBGS} alt="background" id="background-pokebola-smart" />
        <div id="text-container-smart">
          <div id="text-contact-smart">
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
      </div>
    </>
  )
}
