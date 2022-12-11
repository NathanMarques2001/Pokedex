import './style.css'
import pokedex from '../../../assets/images/desktop/pokedex.svg'
import loading from '../../../assets/images/desktop/pokebola-M.svg'
import { List } from '../../../assets/components/list'
import { Data } from '../../../assets/components/data'
import React, { useState, useEffect } from 'react'

export function HomeDesk() {
  const [searchPokemon, setSearchPokemon] = useState('Bulbasaur')
  const [count, setCount] = useState(1)
  const [pokemon, setPokemon] = useState({
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
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon.toLowerCase()}`,
      )
      const data = await response.json()
      setCount(data.id)

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

  useEffect(() => {
    async function fetchData() {
      setPokemon({
        name: '',
        photo: loading,
        firstType: '',
        secondType: '',
      })
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
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
  }, [count])

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
            <form
              id="form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="text"
                id="input"
                placeholder="NOME OU NÚMERO"
                required
                onChange={(e) => setSearchPokemon(e.target.value)}
              />
            </form>
            <img id="pokemon-image" src={pokemon.photo} />
            <div id="button">
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
            <img id="pokedex" src={pokedex} alt="pokedex" />
          </div>
          <List />
        </main>
      </body>
    </>
  )
}
