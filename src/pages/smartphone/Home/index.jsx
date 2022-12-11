import './style.css'
import pokedex from '../../../assets/images/smartphone/pokedex.svg'
import loading from '../../../assets/images/smartphone/pokebola-M.svg'
import { List } from '../../../assets/components/list'
import { Data } from '../../../assets/components/data'
import React, { useState, useEffect } from 'react'

export function HomeSmart() {
  const [searchPokemon, setSearchPokemon] = useState('Bulbasaur')
  const [count, setCount] = useState(1)
  const [pokemon, setPokemon] = useState({
    name: '',
    number: '',
    photo: '',
  })

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon.toLowerCase()}`,
      )
      const data = await response.json()
      setCount(data.id)

      setPokemon({
        name: data.name,
        number: data.id,
        photo:
          data['sprites']['versions']['generation-v']['black-white'][
            'animated'
          ]['front_default'],
      })
      if (searchPokemon > 493 || searchPokemon < 0) {
        setPokemon({
          name: 'Valor inválido',
          number: '0',
          photo: '',
        })
      }
    }
    fetchData()
  }, [searchPokemon])

  useEffect(() => {
    async function fetchData() {
      setPokemon({
        name: '',
        photo: loading,
      })
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      const data = await response.json()

      setPokemon({
        name: data.name,
        number: data.id,
        photo:
          data['sprites']['versions']['generation-v']['black-white'][
            'animated'
          ]['front_default'],
      })
      if (searchPokemon > 493 || searchPokemon < 0) {
        setPokemon({
          name: 'Valor inválido',
          number: '0',
          photo: '',
        })
      }
    }
    fetchData()
  }, [count])

  return (
    <>
      <body id="body-smart">
        <main id="main-container-smart">
          <div id="div-content-smart">
            <Data number={pokemon.number} name={pokemon.name} />
            <form
              id="form-smart"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="text"
                id="input-smart"
                placeholder="NOME OU NÚMERO"
                required
                onChange={(e) => setSearchPokemon(e.target.value)}
              />
            </form>
            <img id="pokemon-image-smart" src={pokemon.photo} />
            <div id="button-smart">
              <button
                id="previous"
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1)
                  }
                }}
              >
                {' '}
                &lt; ANTERIOR
              </button>
              <button
                id="next"
                onClick={() => {
                  if (count < 493) {
                    setCount(count + 1)
                  }
                }}
              >
                PRÓXIMO &gt;
              </button>
            </div>
            <img id="pokedex-smart" src={pokedex} alt="pokedex" />
          </div>
          <List />
        </main>
      </body>
    </>
  )
}
