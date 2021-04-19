import { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './carrousel.css'
import { carouselData } from './data'
import PlayerItem from './PlayerItem'
class DemoCarousel extends Component {
	render() {
		return (
			<Carousel showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true} transitionTime={1000} onChange={()=>{
				document.querySelectorAll('audio').forEach(audio=>{audio.pause() ; audio.currentTime =0})}}>
				{carouselData.map((item, i) => (
					<div key={i}>
						<img alt={item.artist} src={item.image} className='carr__image' />
						
						<PlayerItem   audio={item.audio} artist={item.artist}/>
					</div>
				))}
			</Carousel>
		)
	}
}

export default DemoCarousel
