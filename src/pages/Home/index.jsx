import './style.css';
import React from 'react';
import pokedex_desktop from '../../assets/images/desktop/pokedex.svg';
import pokedex_smartphone from '../../assets/images/smartphone/pokedex.svg';
import { Navbar } from '../../assets/components/navbar';

export function Home() {
  return (
    <> 
      <Navbar />
      <img id='pokedex-smartphone' src={pokedex_smartphone} alt="pokedex" />
      <img id='pokedex-desktop' src={pokedex_desktop} alt="pokedex" />
    </>
  )
}
