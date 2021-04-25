const closeMenu = () => {
	if (window.innerWidth <= 768) {
		setTimeout(() => {
			document.querySelector('.navbar__listItem').classList.add('navbar--none')
			document.querySelector('.navbar__form').classList.add('navbar--none')
		}, 1000)
	}
}

export default closeMenu
