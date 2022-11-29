import './style.css';
import React from 'react';
import pokedex_desktop from '../../assets/images/desktop/pokedex.svg';
import pokedex_smartphone from '../../assets/images/smartphone/pokedex.svg';

export function Home() {
  return (
    <> 
      <img id='pokedex-smartphone' src={pokedex_smartphone} alt="pokedex" />
      <img id='pokedex-desktop' src={pokedex_desktop} alt="pokedex" />
    </>
  )
}
