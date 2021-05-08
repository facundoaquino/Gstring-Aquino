const handleActualColor = (e) => {
	document.querySelectorAll('.active__color').forEach((active) => active.classList.remove('active__color'))
	e.target.classList.add('active__color')
}

export default handleActualColor
