import './style.css'
import pokedex from '../../../assets/images/desktop/pokedex.svg'
import { Navbar } from '../../../assets/components/navbar'
import { Footer } from '../../../assets/components/footer'
import { Form } from '../../../assets/components/form'
import { Buttons } from '../../../assets/components/buttons'
import { List } from '../../../assets/components/list'
import { Data } from '../../../assets/components/data'
import React, { useState, useEffect } from 'react'

export function HomeDesk() {

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
    async function fetchData(idPokemon) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`,
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
    }
    fetchData(3);
  }, [])

  return (
    <>
      <body id="main">
        <Navbar />
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
            <Form />
            <img id="pokemon-image" src={pokemon.photo} />
            <Buttons />
            <img id="pokedex" src={pokedex} alt="pokedex" />
          </div>
          <List name={pokemon.name} number={pokemon.number} />
        </main>
      </body>
      <footer>
        <Footer />
      </footer>
      <script src="../../../app"></script>
    </>
  )
}
