import './style.css'
import pokedex from '../../../assets/images/desktop/pokedex.svg'
import { Navbar } from '../../../assets/components/navbar'
import { Footer } from '../../../assets/components/footer'
import { Form } from '../../../assets/components/form'
import { Buttons } from '../../../assets/components/buttons'
import { List } from '../../../assets/components/list'
import { Data } from '../../../assets/components/data'

export function HomeDesk() {

  return (
    <>
      <body id="main">
        <Navbar />
        <main id="body">
          <div id="div">
            <Data firstType='fire' secondType='flying' number='6' name='charizard' weight='900' height='305'/>
            <Form />
            <img
              id="pokemon-image"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
            />
            <Buttons />
            <img id="pokedex" src={pokedex} alt="pokedex" />
          </div>
            <List name='charizard' number='6'/>
        </main>
      </body>
      <footer>
        <Footer />
      </footer>
      <script src='../../../app'></script>
    </>
  )
}
