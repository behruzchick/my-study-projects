import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Pokemon.css';
import axios from 'axios';
const Pokemon = () => {
    const {name} = useParams();
    const [pokemon,setPokemon] = useState({});
    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            console.log(res);
            setPokemon(res?.data);
        }).catch((e) => {
            console.log(e);
        })
    },[])
  return (
    <div className='pokemon-card-wrappe'>
        <div className="pokemom-card">
            <div className="pokemon-card-image-wrappe">
                <img className='pokemon-card-image' src={pokemon?.sprites?.front_default} alt="" />
            </div>
            <div className="pokemon-card-poke-info">
                <div className="pokemon-card-poke-info-name">
                    <b style={{fontSize:"30px"}}>{pokemon?.name}</b>
                </div>
                <div className="pokemon-card-poke-info-stats">
                    {
                        pokemon?.stats?.map((stat) => (
                            <span className='poke-stat'>{stat.stat.name}: {stat.base_stat}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pokemon