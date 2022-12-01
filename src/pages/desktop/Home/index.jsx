import './style.css'
import pokedex from '../../../assets/images/desktop/pokedex.svg'
import { Navbar } from '../../../assets/components/navbar'
import { Footer } from '../../../assets/components/footer'
import { Form } from '../../../assets/components/form'
import { Buttons } from '../../../assets/components/buttons'
import { List } from '../../../assets/components/list'
export function HomeDesk() {
  return (
    <>
      <main id="main">
        <Navbar />
        <body id="body">
          <div id="div">
            <p id="pokemon-type">
              <span id="first-type">fire</span>
              <span> / </span>
              <span id="second-type">flying</span>
            </p>
            <div id="pokemon-data">
              <p id="number">
                <span id="write">Número: </span>
                <span id="pokemon-number">#6</span>
              </p>
              <p id="name">
                <span id="write">Nome: </span>
                <span id="pokemon-name">charizard</span>
              </p>
              <p id="weigth">
                <span id="write">Peso: </span>
                <span id="pokemon-weight">905 lbs</span>
              </p>
              <p id="height">
                <span id="write">Altura: </span>
                <span id="pokemon-height">17 m</span>
              </p>
            </div>
            <Form />
            <img
              id="pokemon-image"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
            />
            <Buttons />
            <img id="pokedex" src={pokedex} alt="pokedex" />
          </div>
            <List />
        </body>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
