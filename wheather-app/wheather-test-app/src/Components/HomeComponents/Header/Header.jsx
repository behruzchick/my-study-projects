import React, { useEffect } from 'react'
import './Header.css'
import axios from 'axios'
const Header = () => {
    const otherCt = [
        "Toshkent" ,"Andijon" ,"Buxoro", "Guliston", "Jizzax" ,"Zarafshon", "Qarshi" ,"Navoiy", "Namangan", "Nukus" , "Samarqand", "Termiz" , "Urganch" , "Farg'ona" , "Xiva"
    ]



  return (
    <header className='header'>
        <div className="nav-brand">
            <a href="/">Obhavo Uz</a>
        </div>
        <div className="other-ct">
            {
                otherCt.map((province) => (
                    <span>{province}</span>
                ))
            }
        </div>
    </header>
  )
}

export default Header