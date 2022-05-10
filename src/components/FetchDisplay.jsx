import React from 'react'

const FetchDisplay = (props) => {
    const {pokemon} = props
    return (
        <fieldset>
            <legend> FetchDisplay.jsx </legend>
            <div>
                {pokemon.results.map( (pokis, i) => 
                <p key={ i }>{pokis.name}</p>)}
            </div>
        </fieldset>
    );
}

export default FetchDisplay