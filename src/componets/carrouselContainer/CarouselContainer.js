import { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './carrousel.css'
import { carouselData } from './data'
import PlayerItem from './PlayerItem'
import pauseAudio from '../../helpers/pauseAudio'
class DemoCarousel extends Component {
	handleDisplay(e) {
		const element = document.querySelector('.carr__display')
		element.classList.toggle('d-none')
		e.target.classList.toggle('r-180')
		pauseAudio()
	}
	render() {
		return (
			<>
				<Carousel
					className="carr__display d-none"
					showThumbs={false}
					autoPlay={false}
					infiniteLoop={true}
					transitionTime={1000}
					showIndicators={false}
					onChange={() => {
						document.querySelectorAll('audio').forEach((audio) => {
							audio.pause()
							audio.currentTime = 0
						})
					}}
				>
					{carouselData.map((item, i) => (
						<div key={i}>
							<img alt={item.artist} src={item.image} className="carr__image" />

							<PlayerItem {...item} />
						</div>
					))}
				</Carousel>
				<h3 className="carr__chevron">
					Prueba de sonido <i onClick={this.handleDisplay} className="carr__chevron-icon fas fa-chevron-down"></i>
				</h3>
			</>
		)
	}
}

export default DemoCarousel
