import React from 'react'

const Header = ({setSearch}) => {
    return (
        <div className="head" style={{ display: "flex", alignItems: 'center', justifyContent: "space-evenly" }}>
            <a href="/" style={{ textDecoration: "none", color: "#fff" }}><h1>Pokemon app</h1></a>
            <input onChange={(e) => setSearch(e.target.value)} className='search-input' placeholder='Type a name of pokemon' />
        </div>

    )
}

export default Header