import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [offset, setOffset] = useState(0)
    const [pokemons, setPokemons] = useState([]);
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
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

    const next = () => {
        setOffset((offset) => offset + 20)
    }
    const prev = () => {
        setOffset((offset) => offset - 20)
    }
    return (
        <div className='home-wrappe'>
            <div className="head">
                <input onChange={(e) => setSearch(e.target.value)} className='search-input' placeholder='Search by name...'/>
            </div>
            <div className="pokemons">
                {
                    loading? <h1>Loading...</h1>
                    :
                    pokemons
                    
                    .filter((pokemon) => {
                        return search.toUpperCase() === ""
                        ? pokemon
                        : 
                         pokemon.data.name.toLowerCase().includes(search)
                    })
                    .map((pokemon) => (
                        <div onClick={() => navigate(`/pokemon/${pokemon.data.name}`)} className='pokemon' key={pokemon.data.id}>
                            <img className='pokemon-image' src={pokemon.data.sprites.front_shiny} alt="" />
                            <b>{pokemon.data.name}</b>
                        </div>
                    ))
                }
            </div>
                <div className="offset_btns" style={{display:"flex",padding:'10px',gap:"10px"}}>
                    <div onClick={prev} className="offset-btn">Prev</div>
                    <div onClick={next} className="offset-btn">Next</div>
                </div>
        </div>
    )
}

export default Home