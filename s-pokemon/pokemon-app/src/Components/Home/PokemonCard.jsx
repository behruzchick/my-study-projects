import React from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({loading,pokemons,search}) => {
    const navigate = useNavigate();
    return (
        <div className="pokemons">
            {
                loading ? <h1>Loading...</h1> :pokemons
                        .filter((pokemon) => {
                            return search.toUpperCase() === ""
                                ? pokemon
                                :
                                pokemon.data.name.toLowerCase().includes(search)
                        })
                        .map((pokemon) => (
                            <div onClick={() => navigate(`/pokemon/${pokemon.data.name}`)} className='pokemon' key={pokemon.data.id}>
                                <img className='pokemon-image' src={pokemon.data.sprites.front_default} alt="" />
                                <b style={{fontSize:"30px"}}>{pokemon.data.name}</b>
                                <p style={{fontSize:"30px"}}>type: {pokemon.data?.types[0].type.name}</p>
                            </div>
                        ))
            }
        </div>
    )
}

export default PokemonCard