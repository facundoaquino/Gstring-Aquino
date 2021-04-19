import React from 'react'
import './carrousel.css'

const PlayerItem = ({ audio, artist }) => {
	const handlePlay = (e) => {
		const audioPlayer = e.target.parentNode.querySelector('audio')
		audioPlayer.play()
	}

	const handlePause = (e) => {
		const audioPlayer = e.target.parentNode.querySelector('audio')
		audioPlayer.pause()
	}

	return (
		<div className="carr__playerContainer">
			<p className="carr__legend">{artist}</p>

			<i onClick={handlePlay} className="fas fa-play-circle carr__playerPlay"></i>
			<i onClick={handlePause} className="far fa-pause-circle carr__playerPause"></i>
			<p className="carr__subtitle">Prueba de sonido</p>

			<audio className="carr__audio" src={audio}></audio>
		</div>
	)
}

export default PlayerItem
