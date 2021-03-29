const iconMenu = document.querySelector('.icon-menu')
const nav = document.querySelector('.nav')

iconMenu.addEventListener('click', () => {
	toggleMenu()
})

const toggleMenu = () => {
	const icon = iconMenu.querySelector('.icon')
	icon.classList.toggle('close')
	nav.classList.toggle('active')
}

const removeClasses = (e) => {
	if (window.innerWidth >= 800) {
		const icon = iconMenu.querySelector('.icon')
		icon.classList.remove('close')
		nav.classList.remove('active')
	}

	e.stopPropagation()
}

window.onresize = removeClasses
