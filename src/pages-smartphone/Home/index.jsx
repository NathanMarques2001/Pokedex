import './style.css'
import pokedex from '../../assets/images/smartphone/pokedex.svg'
import { Navbar } from '../../assets/components/navbar'

export function HomeSmart() {
    return (
      <>
        <Navbar />
        <img id="pokedex-desktop" src={pokedex} alt="pokedex" />
      </>
    )
  }