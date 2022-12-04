import './style.css'
import React, { useState } from 'react'

export function Form() {
  const [pokemonId, setPokemonId] = useState('1')
  const [searchPokemon, setSearchPokemon] = useState('')

  function setPokemon() {
    const getPokemon = {
      id: setPokemonId,
    }
    setSearchPokemon(getPokemon)
  }

  return (
    <>
      <form id="form">
        <input type="search" id="input" placeholder="NOME OU NÚMERO" required />
      </form>
    </>
  )
}
