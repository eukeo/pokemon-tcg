import React from 'react';
import { checkToken } from '../../utilities/users-service';
import PokemonThumb from '../../components/PokemonThumb.jsx/PokemonThumb';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './PokedexPage.css'

export default function PokedexPage() {

  async function handleCheckToken() {
      console.log('hitting');
    const expDate = await checkToken();
    console.log(expDate);
  }

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=1126')

 const getAllPokemons = async () => {
   const res = await fetch(loadMore)
   const data = await res.json()

   setLoadMore(data.next)

   function createPokemonObject(results)  {
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()
       
       setAllPokemons( currentList => [...currentList, data])
       await allPokemons.sort((a, b) => a.id - b.id)
     })
   }
   createPokemonObject(data.results)
 }

useEffect(() => {
 getAllPokemons()
}, [])


const [searchPokemon, setSearchPokemon] = useState('')


console.log(allPokemons)
  
  return (
    <div id="pokedex-wrap">
      <div className="app-container">
        <div id="search-container">
          <input type="text" id="search-bar" placeholder="Search..." onChange={event => {setSearchPokemon(event.target.value)}}></input>
          <button id="search-btn">Search</button>
        </div>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.filter((val) => {
              if(searchPokemon === "") {
                return val
              } else if (val.name.toLowerCase().includes(searchPokemon.toLowerCase())) {
                return val 
              }
            }).map( (pokemonStats, index) => 
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
                weight={pokemonStats.weight}
                height={pokemonStats.height}
                />)}
          </div>
            {/* <button className="load-more">Load more</button> */}
        </div>
      </div>
  </div>
  );
}