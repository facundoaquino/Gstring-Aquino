import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import pauseAudio from '../../helpers/pauseAudio'



const Navabar = () => {
    const handlePlayer=()=>{
        document.querySelector('.carr__display')?.classList.add('d-none')
        document.querySelector('.carr__chevron-icon')?.classList.remove('r-180')
       pauseAudio()
    }
	return (
		<nav className="navbar">
			<NavLink onClick={handlePlayer} to='/'>
				<div className="navbar__container">
					<img className="navbar__logo" src={logo} alt="logo gtring" />
					<h1 className="navbar__title">Gtring</h1>
				</div>
			</NavLink>
			 
			<ul className="navbar__listItem">
				<NavLink onClick={handlePlayer} activeClassName="navbar__active" to={'/category/guitar'}>
					<li className="navbar__item">Guitarras</li>
				</NavLink>
				<NavLink onClick={handlePlayer} activeClassName="navbar__active" to={'/category/amplificadores'}>
					<li className="navbar__item">Amplificadores</li>
				</NavLink>
				<NavLink onClick={handlePlayer} activeClassName="navbar__active" to={'/category/accesorios'}>
					<li className="navbar__item">Accesorios</li>
				</NavLink>
			</ul>
			<form className="navbar__form">
				<input className="navbar__search" placeholder="Buscar" type="text" />
				<i className="fas fa-search  navbar__icon-search"></i>
			</form>
			<CartWidget />
		</nav>
	)
}

export default Navabar
