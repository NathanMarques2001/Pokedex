import './style.css'
import { ListItems } from './items'
import React, { useState, useEffect } from 'react'
import { Loading } from '../loading'

export function List() {
  let [pokemonList, setPokemonList] = useState([])
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData(id) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      setPokemonList((prevList) => [...prevList, data])
    }
    if (id < 494) {
      setId(id + 1)
      fetchData(id)
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [pokemonList])

  return (
    <>
      <div id="container">
        <div id="list-title">Lista de Pokémons</div>
        <ul id="list-content">
          {loading && (
            <div id="loading-list">
              <Loading />
            </div>
          )}
          {pokemonList.map((pokemonData) => (
            <li>
              {!loading && (
                <ListItems name={pokemonData.name} number={pokemonData.id} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
