import './style.css'
import pokedex from '../../assets/images/desktop/pokedex.svg'
import { Navbar } from '../../assets/components/navbar'
import { Footer } from '../../assets/components/footer'

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
            <form id="form">
              <input
                type="search"
                id="input"
                placeholder="NOME OU NÚMERO"
                required
              />
            </form>
            <img
              id="pokemon-image"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
            />
            <img id="pokedex" src={pokedex} alt="pokedex" />
          </div>
        </body>
      </main>
      <footer>
          <Footer/>
      </footer>
    </>
  )
}
