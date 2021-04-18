

import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import logo from '../../assets/images/guitar.png'

const Navabar = () => {

  


    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <img className='navbar__logo' src={logo} alt="logo gtring"/>  
                <h1>Gtring</h1>
            </div>
            <i className="fas fa-bars navbar__menu"></i>
            <ul className="navbar__listItem">

                <a href='/'><li className="navbar__item">Fender</li></a>
                <a href='/'><li className="navbar__item">Otras</li></a>
                <a href='/'><li className="navbar__item ">Gibson</li></a>
            </ul>
            <form className='navbar__form'>
                
            <input className='navbar__search' placeholder='Buscar' type="text"/>
            <i className="fas fa-search  navbar__icon-search"></i>   
            </form>
                <CartWidget/>
        </nav>
    )
}

export default Navabar
