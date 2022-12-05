import './style.css'
import { ListItems } from './items'
import React, { useState, useEffect } from 'react'

export function List() {
  let [pokemonList, setPokemonList] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    async function fetchData(id) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      setPokemonList((prevList) => [...prevList, data])
    }
    setId(id + 1)
    fetchData(id)
  }, [pokemonList])

  return (
    <>
      <div id="container">
        <div id="list-title">Lista de Pokémons</div>
        <ul id="list-content">
          {pokemonList.map((pokemonData) => (
            <li>
              <ListItems name={pokemonData.name} number={pokemonData.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
