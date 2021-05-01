import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import pauseAudio from '../../helpers/pauseAudio'
import showMenu from '../../helpers/showMenu'
import closeMenu from '../../helpers/closeMenu'
import { navbarCategories } from '../../data/navbarCategories'

const Navabar = () => {
	const handlePlayer = () => {
		document.querySelector('.carr__display')?.classList.add('d-none')
		document.querySelector('.carr__chevron-icon')?.classList.remove('r-180')
		pauseAudio()
	}

	return (
		<nav className="navbar ">
			<NavLink onClick={handlePlayer} to="/">
				<div className="navbar__container">
					<img className="navbar__logo" src={logo} alt="logo gtring" />
					<h1 className="navbar__title">Gstring</h1>
				</div>
			</NavLink>
			<i onClick={showMenu} className="fas fa-bars navbar__menu"></i>
			<ul className="navbar__listItem navbar--none">
				{navbarCategories.map(({ category }) => (
					<NavLink
						key={category}
						onClick={() => {
							handlePlayer()
							closeMenu()
						}}
						activeClassName="navbar__active"
						to={`/category/${category.toLowerCase()}`}
					>
						<li className="navbar__item">{category}</li>
					</NavLink>
				))}
			</ul>
			<form className="navbar__form navbar--none">
				<input className="navbar__search" placeholder="Buscar" type="text" />
				<i className="fas fa-search  navbar__icon-search"></i>
			</form>
			<CartWidget />
		</nav>
	)
}

export default Navabar
