import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Btns from './Btns';
import PokemonCard from './PokemonCard';
import Header from './Header';
const Home = () => {
    const [offset, setOffset] = useState(0)
    const [pokemons, setPokemons] = useState([]);
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
            .then((res) => {
                const pokemonsUrls = res.data.results.map((pokemon) => axios.get(pokemon.url));
                axios
                    .all(pokemonsUrls)
                    .then((res) => {
                        console.log("res", res);
                        setPokemons(res);
                        setLoading(false);
                    }).catch((e) => {
                        console.log(e);
                    })
            })
    }, [offset])

    return (
        <div className='home-wrappe'>
            <Header setSearch={setSearch}/>
            <Btns offset={offset} setOffset={setOffset}/>
            <PokemonCard loading={loading} pokemons={pokemons} search={search}/>
        </div>
    )
}

export default Home