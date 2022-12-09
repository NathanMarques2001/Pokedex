import './style.css'
import pokedex from '../../../assets/images/desktop/pokedex.svg'
import { Buttons } from '../../../assets/components/buttons'
import { List } from '../../../assets/components/list'
import { Data } from '../../../assets/components/data'
import React, { useState, useEffect } from 'react'

export function HomeDesk() {
  let [searchPokemon, setSearchPokemon] = useState(1)

  let [pokemon, setPokemon] = useState({
    name: '',
    number: '',
    weight: '',
    height: '',
    photo: '',
    firstType: '',
    secondType: '',
  })

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`,
      )
      const data = await response.json()
      if (data.types.length == 1) {
        setPokemon({
          name: data.name,
          number: data.id,
          weight: data.weight,
          height: data.height,
          photo:
            data['sprites']['versions']['generation-v']['black-white'][
              'animated'
            ]['front_default'],
          firstType: data.types[0]['type']['name'],
          secondType: '',
        })
      } else {
        setPokemon({
          name: data.name,
          number: data.id,
          weight: data.weight,
          height: data.height,
          photo:
            data['sprites']['versions']['generation-v']['black-white'][
              'animated'
            ]['front_default'],
          firstType: data.types[0]['type']['name'],
          secondType: data.types[1]['type']['name'],
        })
      }
      if (searchPokemon > 493 || searchPokemon < 0) {
        setPokemon({
          name: 'Valor inválido',
          number: '0',
          weight: '?????',
          height: '?????',
          photo: '',
          firstType: '?',
          secondType: '?',
        })
      }
    }
    fetchData()
  }, [searchPokemon])

  return (
    <>
      <body id="main">
        <main id="body">
          <div id="div">
            <Data
              firstType={pokemon.firstType}
              secondType={pokemon.secondType}
              number={pokemon.number}
              name={pokemon.name}
              weight={pokemon.weight}
              height={pokemon.height}
            />
            <form id="form">
              <input
                type="text"
                id="input"
                placeholder="NOME OU NÚMERO"
                required
                value={searchPokemon}
                onChange={(e) => setSearchPokemon(e.target.value)}
              />
            </form>
            <img id="pokemon-image" src={pokemon.photo} />
            <Buttons />
            <img id="pokedex" src={pokedex} alt="pokedex" />
          </div>
          <List />
        </main>
      </body>
    </>
  )
}
