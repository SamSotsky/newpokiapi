import React, { useState } from 'react'
import FetchDisplay from './FetchDisplay';
import axios from "axios"

const FetchComp = () => {

    const [pokemon, setPokemon] = useState();

    


    const fetchPokemonAxios = async() =>{
        const allPoki = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
        setPokemon(allPoki.data)
    }

    return (
        <fieldset>
            <legend> FetchComp.jsx </legend>
            <button onClick={fetchPokemonAxios}>Gettum</button>



            {
                pokemon ?
                    <FetchDisplay pokemon={pokemon} />
                    :
                    <h1> Click To Get POKIMANS</h1>
            }
        </fieldset>
    )
}

export default FetchComp