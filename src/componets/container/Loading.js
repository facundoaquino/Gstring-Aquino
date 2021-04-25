import React, { useEffect, useState } from 'react'

function Loading({ product }) {
	const [color, setColor] = useState(1500)

	useEffect(() => {
		const colorInterval = setInterval(() => {
			const colorRandom = Math.floor(Math.random() * (9999 - 1000) + 1000)
			setColor(colorRandom)
		}, 300)
		return () => {
			clearInterval(colorInterval)
		}
	}, [])
	 
	return (
		<div className="loading__svg">
			<svg
				className="loading__svg--svg "
				xmlns="http://www.w3.org/2000/svg"
				version="1"
				width="100"
				height="300"
				viewBox="0 0 154.89 480.54"
			>
				<g transform="translate(-368.27 -180.66)">
					<g>
						<path
							fill="#ac7000"
							d="M434.36 181c-1.09-.09-1.6 1.04-1.76 1.94-1.04 5.06-1.23 10.26-1.82 15.39-1.47 15.28-3.07 30.54-4.41 45.83-.05 1.88-.49 3.85 0 5.69.39.88 1.36 1.77 2.36 1.62.33-.06.18-.68.54-.29 1.16.64 2.46 1.21 3.15 2.43.91 1.47 1.18 3.26 2.05 4.72.51.54 1.13-.19.97-.75-.03-5.17-.29-10.34-.52-15.5-.21-.75-1.17-.32-1.67-.77-1.97-1.02-2.73-4.24-.85-5.7 1.34-1.01 3-.04 4.46.01.8-.34.3-1.36.37-2.02-.19-2.14-.24-4.32-.63-6.43-.49-.64-1.47-.33-2.12-.73-2.16-.85-2.69-4.38-.56-5.57 1.04-.55 2.51-.61 3.36.34.49.33 1.27 1 1.8.42.95 11.53 1.74 23.08 3.13 34.57.19.62-.06 1.69.75 1.85.6-.21.6-1.09 1.28-1.26 1.08-.54 2.29-.11 3.34.3.89-.1.57-1.28.77-1.91 1.39-11.46 2.43-22.96 3.6-34.45.79.19 1.28-.77 2.05-.85 1.68-.56 3.4.8 3.8 2.4.46 1.33-.03 3.14-1.54 3.51-.73.4-2.02-.02-2.29 1-.4 3.05-.77 6.1-1.09 9.17.12.89 1.19.46 1.69.12 1.38-.79 3.09.17 3.76 1.47.83 1.32.77 3.5-.8 4.21-.59.35-1.3.29-1.92.48-.4 1.05-.17 2.25-.35 3.36-.46 6.71-1.43 13.42-1.1 20.17-.08.65.63 1.23 1.21.78 1.19-.73.82-2.34.75-3.5-.14-2.29-.34-4.81 1.05-6.8 1.5-2.45 4.25-4.17 4.96-7.09.44-2.3-.05-4.66-.12-6.98-1.3-16.64-3.03-33.24-4.26-49.89-.2-2.47-.09-4.98-.41-7.44-.33-1.07-.96-2.19-1.98-2.71-1 .23-2.03.83-2.67 1.56-.47-.44-1.36-.41-1.78.04-.16-.43-.7-.53-.99-.43-.15-.6-.78-1.57-1.47-1.14-.32.28-.24.77-.31 1.15.03-.61-.26-2.03-1.04-1.25-.25 1.42-.03-.38-.96 0-.42.21-.71.59-.93.99-.18-.6-.56-1.79-1.4-1.31-.25.67-.69-.07-1.11.44-.36.38-.74.77-.93 1.27-.25-.89-1.19-.35-1.25.35-.1.2-.4-.41-.7-.38-.35-.18-.69.23-.94.19-1.18-.41-2.18-1.21-3.35-1.65.59-.94-.49-1.08-1.17-.97zm4.66 6.43c-.07.02.01-.14 0 0zm-.05-.02c-.04 0-.1-.11 0 0zm-2.43 16.43c1.27-.13 2.4.78 2.7 1.98.46 1.45.37 3.31-.95 4.32-.21.53-1.1 0-1.66.08-1.57-.12-3.02-1.36-2.99-2.99-.13-1.73 1.07-3.42 2.9-3.39zm17.25.26c1.49-.06 2.91 1.17 2.92 2.7.2 1.44-.44 3.27-2 3.63-.57.19-1.19.03-1.77.2-.32-.63-1.19-.86-1.47-1.57-1.03-1.5-.63-3.92 1.11-4.71.38-.17.8-.25 1.21-.25z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M417.2 452.1c-4.16.02-8.33.85-11.96 2.96-6.66 3.29-11.37 9.91-12.59 17.21-1.63 10.11.39 20.5 4.46 29.82 2.41 6.11 5.9 12.12 5.75 18.87.15 6.81-2.99 13.33-7.76 18.05-5.79 6.19-12.7 11.51-16.99 18.97-6.33 10.26-9.89 22.4-9.14 34.51.3 15.46 6.55 30.94 18 41.49 3.59 3.64 7.82 6.61 12.09 9.32-.29 1.62 1.88 1.98 2.9 2.7 2.05.85 4.17 2.24 6.46 1.86 1.04-.67 2.76.63 4.07.75 10.7 3.14 21.74 5.47 32.94 5.4 15.19.04 30.74-2.43 44.36-9.4 15.33-8.03 26.55-23.1 30.35-39.92 4.18-17.22.36-36.13-10.1-50.43-5.32-7.56-11.98-14.06-18-21.01-5.22-7.68-5.38-18.13-1.55-26.49 3.61-8.73 8.06-17.59 8.17-27.25-.04-4.33-1.37-8.91-4.44-12.04-1.7-.83-1.78 1.75-2.25 2.81-2.25 6.47-8.63 11.15-15.35 11.9-3.26.17-6.61.14-9.59-1.37-2.21-.91-3.92-2.84-6.06-3.68-1.71-.12-1.29 2.09-1.41 3.18.04 3.15-.3 6.41.42 9.49.98 1.25 2.98.37 4.4.69.9.19 2.72.06 2.44 1.45-.14 6.44 1.16 12.87.57 19.28.01 1.12-.8 2.08-1.96 2.07-2.69.34-5.43-.16-8.11.23-1.39.87-.73 2.91-.99 4.28-.12 6.69-.04 13.43.31 20.08.77 1.4 2.83.52 4.17.82 2 .17 4.18-.15 6.05.48.95 1.82.42 4.08.61 6.08.2 1.78-.34 3.9.54 5.49 1.37 1.11 2.32-.84 2.83-1.84 2.32-4.03 9.06-3.41 10.76.87 1.61 3.07.87 7.86-2.76 9.06-2.49.7-5.44.33-7.2-1.78-1.18-.85-1.41-2.57-2.68-3.23-1.86-.11-1.34 2.29-1.44 3.46-.25 1.75.5 4.03-.88 5.41-1.88 1.06-4.25.38-6.32.38-1.43-.08-4-.34-4.07 1.71-.23 1.22.06 2.96 1.69 2.65.91.17 2.27-.11 2.96.34.16 1.46.08 3.91 2.1 3.97 1.96.07 2.03-2.36 2.11-3.77.34-.62 2.44-.21 2.1.91.49 2.53.95 5.33-.05 7.79-.98 1.83-3.95 2.44-3.6 4.92.03 1.15.26 2.27.54 3.37-.87.09-1.67 0-1.06-1.03.14-1.41.72-3.25-.23-4.37-2.28-.51-4.77-.07-7.12-.19-10.2.24-20.42.16-30.6.8-.97 1.17-1.45-.93-2.75-1.2-2.44-1.28-2.59-4.39-2.69-6.79.05-1.38.13-3.28 1.49-4.01.56-.21 1.3-.11.93.73-.37 1.47.43 3.65 2.26 3.33 1.9-.33 1.53-2.75 1.67-4.17 1.96-.2 4.05.24 5.92-.39.46-1.18.66-3.02-.35-4-2.4-1.22-5.37.18-7.75-1.03-1.23-1.18-.64-3.19-.85-4.72.12-6.05-.02-12.14.5-18.15.03-1.24 1.78-.77 2.53-1.03 2.02-.25 4.14.24 6.08-.34.92-2.78.48-5.87.71-8.79.06-5.11.31-10.27.19-15.36-.79-1.39-2.9-.86-4.29-.95-1.81-.04-4.11.77-5.61-.53-.65-5.47-.6-11.12-.67-16.67.22-1.64-.31-3.83 1-5.08 2.34-1.07 5.18.15 7.49-.97 1.21-1.37.5-3.48.77-5.15.19-9.33.24-18.66.35-27.99-.62-1.53-2.63-1.82-3.96-2.64-3.42-1.6-7.07-2.46-10.86-2.18zm-14.44 48.23c-1.33.43-.28 1.24.09 2.02 3.55 6.8 8.43 13.57 8.19 21.56-.04 1.55-.07 3.11-.49 4.61.63.39 2.24.71 1.87-.52.37-4.68-.08-9.47-2.1-13.75-2.01-4.77-4.63-9.29-6.59-14.09-.32.06-.65.11-.97.17zm74.68 8.23c-.04 0-.08-.1 0 0zm-.23 17.75c.36.65-.1 2.54-.29 1.17-.22-.3.05-1.42.29-1.17zm15.28 37.78c1.71-.03 3.77.31 4.58 2.07 1.5 1.96 2.47 4.65 1.3 7-1.8 4.69-9.26 5.16-11.74.85-1.63-2.96-.93-7.14 2.18-8.84 1.09-.68 2.39-1.04 3.68-1.08zm-68.3 18.34c.09 1.05.59 2.01.89 2.97-.82.04-1.94.23-1.29-.92.14-.65.32-1.58.4-2.05zm57.78 2.64c3.33-.18 6.26 2.91 6.04 6.23.68 3.41-2.66 6.68-6.05 6.18-2.56.3-4.92-1.27-5.91-3.58-1.42-3.1-.04-7.57 3.44-8.52.81-.25 1.64-.3 2.48-.31zm3.38 18.53c2.68-.27 5.58 1.31 6.06 4.14.76 3.19-.33 7.63-3.86 8.75-3.54 1.14-7.99-1.37-8.14-5.31-.44-3.38 1.83-7.29 5.49-7.53.15-.03.31-.04.45-.05z"
							color="#000"
						></path>
						<path
							fill="#783c00"
							d="M434.65 267.03l21.62-.13 3.9 223.1-29.18-.04c.61-45.67 1.05-91.29 2.11-137.07-.33-1.6-.03-3.21.08-4.82-.08-4.19.11-8.39.1-12.58 0-13.01.39-26.02.68-39.02-.23-7.15.04-13.04.31-18.84-.02-3.17-.17-6.88.38-10.6z"
							color="#000"
						></path>
						<path
							fill="#fff"
							d="M445.72 475.84c-1.25-.01-2.21 1.69-1.2 2.6 1.09 1.05 3.24-.32 2.58-1.75-.22-.53-.8-.9-1.38-.85z"
							color="#000"
						></path>
						<path
							fillRule="evenodd"
							d="M487.8 487.17c1.04 1.63-.89 4.35-.96 6.48 1.38-1.03.78-4.02 2.16-5.04-.99 4.76-2.83 8.69-4.8 12.48-1.05-.54.75-1.61.72-2.64-.58-.18-1.19 1.68-1.68 2.4 1.08-4.05 4.22-8.11 4.56-13.68zm-2.4 10.56c.17-.57 1.09-1.62.48-2.16-.05.68-1.11 1.59-.48 2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.08 181.65c1.78 7.48 2.18 16.67 2.88 25.92.92 12.11 2.31 22.36 3.36 34.32.45 5.06 1.88 10.23-3.12 11.28.09-1.31 1.71-1.86 2.16-3.36.87-2.87-.59-12.17-.96-16.32-1.19-13.34-2.53-28.11-3.6-41.52-.39-4.96.37-8.78-2.88-10.32.6-.57 1.42-.01 2.16 0z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M433.08 186.69c.28-.04.43.05.48.24-.93 8.73-1.41 17.24-2.64 25.92.04-8.44 1.72-17.33 2.16-26.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M444.84 193.65c.24 1.62.72 7.58-.24 9.6-.03-3.61-.02-6.85.24-9.6z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M443.16 195.33c.28-.04.43.05.48.24-.14 2.46.05 4.49-.24 7.44-.06.72-.11 2.93-.24.48v-8.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M463.8 202.05c5.9-.69 6.15 8.58.96 8.88-.57-2.71-.58-5.98-.96-8.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M444.6 203.97c1.03 3.21.12 6.24.24 9.6-.55-2.72-.08-6.48-.24-9.6z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M456.12 205.41c1.88 5.33-5.31 5.78-5.28 1.68.02-2.55 3.33-3.86 5.28-1.68zm-3.84.96c.9 6.16 5.13-3.01 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M463.56 205.89c-.8.19-2.22.79-2.64 0 .25-.62 2.78-1.19 2.64 0z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M447.72 205.41c1.03.09.23 2.01.48 2.88-1.02-.1-.23-2.01-.48-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M452.28 206.37c5.13-3.01.9 6.16 0 0zm.48.48v.48c.43.21.61.67 1.44.48.22-.71.22-.74 0-1.44-.83-.19-1.01.26-1.44.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.2 206.37c.22.7.22.73 0 1.44-.83.19-1.01-.27-1.44-.48v-.48c.43-.22.61-.67 1.44-.48z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M446.28 210.45c1.11.12.17 1.76.24 2.4-.54-.34-.09-1.67-.24-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M446.28 213.09c.81.97.24 2.01.24 3.12-.55-.57-.08-2.16-.24-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M465.72 217.65c5.06-.07 5.83 8.63.48 8.88.12-3.09-.94-6.24-.48-8.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M465 219.81c.03.92-2.69 1.49-2.64.24.91-.19 1.95-.51 2.64-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M453.96 220.29c5-1.78 4.77 5.04 1.44 5.28-2.05.14-5.23-3.93-1.44-5.28zm.24 1.68c-.46.58-.29 2.07.24 2.4.83.1 1.35-.1 1.92-.24.24-.95.34-1.75-.24-2.4-.69.03-1.57-.13-1.92.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M456.12 221.73c.58.65.48 1.45.24 2.4-.57.14-1.09.34-1.92.24-.53-.33-.7-1.82-.24-2.4.35-.37 1.23-.21 1.92-.24zm-1.68 1.68c.29.27.85.27 1.44.24v-1.2c-.72-.34-1.67-.28-1.44.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.88 222.45v1.2c-.59.03-1.15.03-1.44-.24-.23-1.24.72-1.3 1.44-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M467.16 232.53c5.58-.46 5.72 8.34.96 8.88-.69-2.59-.82-5.74-.96-8.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M466.68 234.93c-.78.27-2.58.48-3.12.24.06-.95 3.1-1.51 3.12-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M466.92 236.37c-.23 1.14-2.43.99-3.36.72-.44-1.65 2.9-1.53 3.36-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M454.92 236.37c4.81-1.76 4.71 4.88 1.68 5.28-2.41.31-5.26-3.98-1.68-5.28zm1.2 4.32c.22-.42.85-.44 1.2-.72.37-4.8-5.01-.41-1.2.72z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M457.32 239.97c-.35.28-.98.3-1.2.72-3.81-1.13 1.57-5.52 1.2-.72zm-1.92-.24c.19.05.48 0 .48.24.61-.03.93-.35.96-.96-.22-.42-.44-.84-1.2-.72-.27.28-.27.85-.24 1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.64 238.29c.76-.12.98.3 1.2.72-.03.61-.35.93-.96.96 0-.24-.29-.19-.48-.24-.03-.59-.03-1.16.24-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.04 256.77c1.06 2.16.86 6.8.48 9.6-.61.38-2.5.38-3.12 0 .64-3.45-1.47-9.63 2.64-9.6z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.76 259.65c.36 1.55 1.26 5.9-.24 6.96-.04-2.64.02-5.23.24-6.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M449.4 267.81c-.25.25-1.71.49-1.92 0-.02-.79 2.1-1.16 1.92 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M453.48 267.81c-.66.23-3.41.77-3.36-.48 1.26.35 3.11-1.08 3.36.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.64 267.81c-.45-.11-1.44.32-1.2-.48.35-.37 1.25-.24 1.2.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.32 268.05c-1.02.2-1.74.02-3.12.24-.12-.2-.25-.39-.24-.72.67-.24 3.42-.78 3.36.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 267.57c-.05.91-2.41 1.08-2.4 0 .37-.3 2.07-.47 2.4 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.52 267.57c-.19.94-2.77.46-3.36.24.25-.81 2.77-.59 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M435.24 285.33c-.35.38-1.36.35-1.2-.48.36-.38 1.37-.35 1.2.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.32 285.33c-.71.48-2.26.13-3.36.24v-.72c.67-.24 3.42-.78 3.36.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M440.04 284.61c.73.15 2.07-.31 2.4.24.22 1.11-2.92 1.14-2.4-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 284.85c-1.04.87-2.94.77-3.84.24.34-.94 3.11-.47 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.12 285.33c-.8-.15-2.22.31-2.64-.24.01-.82 2.94-.81 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M453.96 284.61c.09 1.22-2.74.76-3.36.48.24-1.05 2.35-.22 3.36-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.68 284.61c.35.13 1.24-.28 1.2.24.18.91-1.55.52-1.2-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 299.73c.06.87-2.32.54-2.64.24.34-1 1.85-.57 2.64-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 299.73c-.37.83-3.1.57-3.84.24.76-.92 3.39-.95 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.12 299.73c0 .81-2.93.8-2.64-.24.48-.31 2.52-.56 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.2 299.49c.13 1.12-3.48 1.12-3.36 0 .68-.38 2.69-.38 3.36 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.12 299.25c.46 1.2-1.65 1.34-1.44.24.29-.28.85-.27 1.44-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.04 299.49h.96c.11.5-.16.63-.24.96-.63.07-.78-.34-.72-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.08 299.73c-.7.86-2.93.74-3.36.24.15-.9 2.83-.53 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M445.8 306.69v1.44c-.39.36-1.77.36-2.16 0-.32-1.72 1.28-2.29 2.16-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.08 314.85c-.45.79-3.34.71-3.6.24 1.24-.8 2.94-.91 3.6-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 314.85c-.03 1.01-1.84.24-2.64.48v-.72c.48-.31 2.52-.56 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 314.61c-.05 1.29-3.05.69-3.84.48.05-1.3 3.06-.7 3.84-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.36 314.61c.24 1.09-2.87 1.09-2.64 0 .49-.37 2.15-.37 2.64 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.2 314.61c-.09 1.04-1.94.74-2.88.48-.4.09-.45-.19-.48-.48.64-.34 2.75-.45 3.36 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 314.61c.06.91-1.49.91-1.44 0 .17-.19 1.34-.54 1.44 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.76 314.61v.72c-.42-.06-1.2.24-.96-.48.22-.19.55-.26.96-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 326.85c-.05 1.29-3.05.69-3.84.48v-.72c.97.01 2.97-.64 3.84.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.36 326.85c.11 1.22-1.69.54-2.64.72v-.96c.48-.31 2.52-.56 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.44 326.85c0 1.25-3.21.85-3.6.24-.05-1.19 3.3-.94 3.6-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.16 326.37h1.44a.802.802 0 01-1.44 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.76 326.85c.11.75-.51.76-1.2.72v-.72c.32-.31.89-.31 1.2 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.08 326.85c-.05 1.29-3.05.69-3.84.48.05-1.3 3.06-.7 3.84-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.56 326.61c.89.15 2.39-.31 2.88.24.27 1.2-3.43 1.13-2.88-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.04 334.05c-.06.39.23.41.24.72.02.97-.88 1.03-1.92.96-.99-1.19.49-2.68 1.68-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 341.25c-.02 1.26-3.09.73-3.84.48 1.17-.99 2.29-.57 3.84-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.36 341.25c.24 1.09-2.87 1.09-2.64 0 .49-.37 2.15-.37 2.64 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.44 341.25c.13 1.12-3.48 1.12-3.36 0 .97-.25 2.2-.4 3.36 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.84 341.73c-.42.39-1.76.35-1.68-.48.38-.36 1.91-.5 1.68.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.28 341.25v.72c-.42-.06-1.2.24-.96-.48.22-.19.55-.26.96-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.84 341.97H435c-.02-1.14 3.87-1.14 3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 341.25c.19 1.15-2.38.8-2.88.48.1-1.03 2.02-.23 2.88-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 353.49c.03 1.13-3.86 1.13-3.84 0 2.07.12 2.38-.38 3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.36 353.97c-.96-.03-2.45.78-2.64-.48 1.01-.02 2.34-.67 2.64.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.68 353.49c-.49 1.34-2.27.34-3.6.48.92-1.22 2.67-.42 3.6-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.84 353.49c.35.75-1.78.75-1.44 0 .42.06 1.2-.68 1.44 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.6 353.73c-.22.9-2.99.52-3.6.24.23-.91 3-.52 3.6-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 353.73c-.22.83-2.52.53-3.12.24.23-.83 2.53-.54 3.12-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.52 361.41c-.49 1.05-1.6 1.02-2.4.24-.42-2.19 2.49-2.01 2.4-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 367.17c-1.21.11-3.08.45-3.84-.48 1.46.33 3.38-1.03 3.84.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.36 367.17c-1.34-.06-1.75.36-2.64-.24.91-.42 2.31-.83 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.92 367.17c-1.38-.09-2.82.57-3.6-.48.73-.23 3.61-.8 3.6.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.08 367.17c-.49-.15-1.66.38-1.44-.48.37-.37 1.65-.43 1.44.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.36 366.69c-.28 1.35-2.53.48-3.6.48.4-.96 2.45-.28 3.6-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.32 366.69h2.88c.03 1.27-2.62.64-2.88 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M433.08 377.49c.64-.07.79.33.72.96h-.96c-.1-.5.17-.64.24-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.36 377.97c-.05 1.29-3.05.69-3.84.48v-.72c.79-.29 3.44-.63 3.84.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 378.45c-.71.48-2.26.13-3.36.24-.33-1.65 3.31-1.52 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 378.21c-.4.94-3.27.47-4.08.24.26-1.27 3.43-1.11 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.72 377.73c.89.15 2.39-.31 2.88.24.18 1.11-3.37 1.2-2.88-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 377.73c1.17.27 3.46-.58 3.84.48-.38 1.06-2.67.2-3.84.48v-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 377.73c.49 1.25-1.9 1.34-1.68.24.31-.33 1.05-.24 1.68-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.6 389.01c1.9-1.02.61 2.06 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.52 388.77c1.24.28 3.72-.68 3.84.72-.86.5-2.59.12-3.84.24-.4-.48.03-.31 0-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 389.49c-.71.48-2.26.13-3.36.24-.67-1.19 2.91-1.46 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 389.49c-1.3.49-2.85.39-4.32 0 .21-1.12 4.11-1.12 4.32 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.84 389.25c-.32 1.41-1.82.18-3.12.48v-.72c.6-.3 2.9-.6 3.12.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.4 389.25c-.69 1.29-2.93.48-4.08.48v-.72c1.46-.38 3.05-.32 4.08.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.56 389.25c.19 1.08-1.5.79-1.68.24-.28-.99 1.67-.97 1.68-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.84 398.85c.35.21.93.19.72.96h-.96c-.1-.5.17-.64.24-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.36 399.33c-.35 1.03-2.89.46-4.08.24 1.19-1.02 3.1-.8 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 399.09c-.29 1.58-2.94 1.09-3.6 0 1.37-.47 1.75.1 3.6 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 399.33c-.66 1.25-3.75.76-4.32.24.54-.88 3.4-.52 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.84 399.33c-.4 1.09-2.88.93-3.12 0 .62-.38 2.51-.38 3.12 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.4 399.33c-.42 1.17-3.06.77-4.08.24.45-.84 3.27-.56 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.12 399.09c.77.03 1.84-.24 1.68.72-.48.41-2.05.45-1.68-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.6 408.93c.64-.07.79.33.72.96-.62.06-1.03-.09-.96-.72.21.04.23-.1.24-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.12 409.41c-.38 1.06-2.67.2-3.84.48-.28-.32-.09-.38 0-.72.79-.29 3.44-.63 3.84.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 409.17c-.01 1.34-2.25.47-3.36.72-.12-.2-.25-.39-.24-.72 1.67-.34 2.12-.15 3.6 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 409.41c-.3 1.05-2.51.21-3.6.48-.12-.2-.25-.39-.24-.72.73-.23 2.89-.08 3.84.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.84 409.17c.19 1.15-2.38.8-2.88.48.31-1.02 1.81-.62 2.88-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.64 409.41c-.37.91-3.32.51-4.08.24.83-.86 3.18-.73 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 409.17c.43.13 1.41-.29 1.44.24.04.98-1.71.91-1.44-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 414.21c1.36-.22 1.15 1.85 0 1.68v-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.84 414.45c1.03-.28 1.03 1.96 0 1.68.08-.75-.55-1.15 0-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 414.69h.72c.03.59.04 1.15-.24 1.44-.61-.03-.47-.81-.48-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.36 419.73c.5-.11.64.16.96.24-.12.19-.25.39-.24.72-.63.07-.78-.34-.72-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.12 420.21c-.53.98-2.78.25-4.08.48-.51-1.55 3.58-.95 4.08-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 420.21c-.33.94-3.11.47-3.84.24.83-.91 2.7-.67 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 420.69c-1.76-.09-2.8.43-4.08-.24.59-.96 3.94-1.05 4.08.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M450.84 420.21c-.21 1.07-2.01.48-2.88.24.01-.88 2.5-.54 2.88-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.88 420.21c-.92 1.34-2.98.55-4.32.24.52-.85 3.44-.56 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 419.97h1.44c.4 1.35-1.75 1.19-1.44 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.12 427.65h.96c.11.5-.16.63-.24.96-.63.07-.78-.34-.72-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.12 428.13c-.53.98-2.78.25-4.08.48-.12-.2-.25-.39-.24-.72.95-.31 3.74-.6 4.32.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.6 427.65c1.23.21 3.38-.5 3.84.48-.38 1.06-2.67.2-3.84.48v-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 427.89c-.28 1.83-2.43.31-4.08.72v-.72c.86-.36 3.24-.43 4.08 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.08 428.13c-.28 1.37-2 .35-3.12.48v-.72c.6-.3 2.9-.59 3.12.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.8 427.65c1.37.23 3.72-.52 4.32.48-.48 1.22-3.28.21-4.32.48-.4-.48.03-.31 0-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.84 427.65c.64 0 1.42-.14 1.44.48.01 1.42-2.35.48-1.44-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.12 435.33c.76-.11 1.08.21.96.96h-.96v-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.88 436.05c-.86.5-2.59.12-3.84.24-.12-.2-.25-.39-.24-.72.85-.21 3.98-.84 4.08.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 436.29c-1.2-.16-3.03.31-3.84-.24.62-.71 3.47-1.34 3.84.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 435.81c-.37.91-3.32.51-4.08.24.47-1.28 3.74-.74 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.08 435.81c-.11.79-3.33.86-3.12-.24.84-.09 2.2-.19 3.12.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.12 435.81c-1.27.84-3.36.76-4.32.24.72-.83 3.78-.68 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M458.28 435.57c.39 1.26-1.5 1.19-1.44.24.29-.28.85-.27 1.44-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.04 438.93c.28.67.28 1.25 0 1.92-2.34.58-2.53-2.59 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.88 443.49c-.37.91-3.32.51-4.08.24.67-.82 3.58-.69 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.12 443.25c.51-.11.64.16.96.24-.05.42-.41.54-.96.48v-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.6 443.25c1.24.28 3.72-.68 3.84.72-1.52-.1-3.55.91-3.84-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 443.49c-.95 1.11-3.88.96-4.32 0 .96-.39 3.37-.39 4.32 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.08 443.49c.2 1.27-3.24.94-3.12 0 .57-.33 2.58-.45 3.12 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 443.49c-.23 1.44-2.95.4-4.32.72.04-.28-.05-.43-.24-.48.59-.86 3.61-.55 4.56-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M458.52 444.21c-.73.01-1.58.14-1.44-.72.43-.4 1.92-.51 1.44.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M415.08 446.61c-.83 1.04-3.65 1.25-5.04.96 1.11-.74 3.63-1.33 5.04-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M414.36 448.29c-.17.73.42.7.24 1.44-.68.44-2.47.76-3.36.24-.17-1.78 1.67-1.54 3.12-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.88 449.73c-.94 1.35-3.02.47-4.32.24.39-1.23 3.08-.35 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M431.88 449.49h.96c.28.83-1.34 1.11-.96 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.6 449.49c1.32.12 3.15-.27 4.08.24-.54 1.5-2.62.11-3.84.72-.18-.22-.25-.55-.24-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 449.73c-.34 1.25-2.67.53-4.08.72-.12-.2-.25-.39-.24-.72.96-.39 3.37-.39 4.32 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 449.73c.01 1.27-2.97.8-3.36.24.29-.85 2.71-.53 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 450.21c-.93.5-2.76.12-4.08.24-.12-.2-.25-.39-.24-.72.92-.2 4.16-.85 4.32.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 449.73c.35.13 1.24-.28 1.2.24.18.91-1.55.52-1.2-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M415.8 451.17c-1.87.04-3.14.7-5.04.72.93-1.18 4.22-1.81 5.04-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M416.04 452.13c.65-.56 2.32-.09 3.36-.24-.39.73-2.63.6-3.36.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M412.92 452.61c1.11-.71 4.02-.63 1.68-.24-.58.09-.58.32-1.68.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M421.8 452.61c3.33-.21 6.67 1.65 9.12 3.12-2.59-.53-5.51-2.81-9.12-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.76 453.33v1.2c-.55.48-1.84.24-2.16-.24-.42-1.6 1.57-1.78 2.16-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.88 457.41c-.2 1.24-3.4.75-4.32.48.52-1.49 2.99-.65 4.32-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.84 457.17c.41 1.14-1.38 1.32-1.2.24.28-.2.65-.32 1.2-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.68 457.89c-.93.5-2.76.12-4.08.24-.12-.2-.25-.39-.24-.72.92-.2 4.16-.85 4.32.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 457.65c-.53.98-2.78.25-4.08.48-.12-.2-.25-.39-.24-.72.95-.31 3.74-.6 4.32.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.2 457.17c1.02.18 2.85-.44 3.12.48-.54 1.29-2.01.4-3.12.48v-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 457.41c-.16 2.02-3.11.4-4.56.72v-.72c1.01-.36 3.57-.43 4.56 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M459 457.41c.13.99-1.3 1.22-1.92.72v-.72c.35-.36 1.57-.36 1.92 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.64 463.17c-.44.84-3.27.56-4.08.24.15-1.13 3-.37 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.6 462.93c1.21.15 3.04-.32 3.84.24-.29.76-3.89.91-3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 463.17c-.4.94-3.27.47-4.08.24.45-.85 3.27-.56 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 463.65c-.94-.26-2.95.55-3.12-.48.61-.25 3.22-.75 3.12.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 463.17c-1.14 1.31-3.04.45-4.56.24.59-.86 3.61-.55 4.56-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M458.76 463.65c-.39.39-1.5.29-1.44-.48.57-.17 1.53-.55 1.44.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.28 467.01c-.42.63-1.73.63-2.16 0-.32-2.19 2.41-1.93 2.16 0z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M403.56 466.53c.69.89-.95 3.27-1.68 4.32.37-1.63 1.23-2.77 1.68-4.32z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.6 469.17c.41 1.14-1.38 1.32-1.2.24.28-.2.65-.32 1.2-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.64 469.89c-1.01.51-2.92.11-4.32.24.04-.28-.05-.43-.24-.48.54-.69 4.39-1 4.56.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.36 469.17c1.37.31 4.09-.73 4.32.72-1.01.51-2.92.11-4.32.24v-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 469.65c-.54.88-3.4.51-4.32.24.27-1.22 3.69-.88 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 470.13h-3.12c-.72-1.21 3.47-1.49 3.12 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.84 469.65c-.7 1.46-3.9.37-4.8.48.35-1.24 4.39-.86 4.8-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M459 469.65c.14.83-1.61 1.02-1.68.24-.29-.8 1.63-.59 1.68-.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M401.64 471.09c.96 1.01-.59 3.53-.48 5.28-.65-1.62.45-3.56.48-5.28z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 474.69c-.37.91-3.32.51-4.08.24.6-1.22 2.94-.52 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.68 474.69c-.51.85-3.43.55-4.32.24.48-.95 3.45-.47 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 474.69c-.44.84-3.27.56-4.08.24.41-.95 3.28-.47 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 474.69c-.18.7-3.19.84-3.36 0 .68-.38 2.69-.38 3.36 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 475.17c-.93.11-3.31.6-4.56-.24.54-.69 4.39-1 4.56.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M459 474.69c.22 1.09-1.81.88-1.68 0 .84-.08.92-.37 1.68 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.36 480.93h-.96a.514.514 0 01.96 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 480.45c-.21 1.37-3.34.61-4.32.48.59-1.4 3.48-.48 4.32-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.68 480.45c-.08 1.14-4.24 1.14-4.32 0 1.88-.08 2.39-.04 4.32 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 480.45c.06 1.25-2.69.71-3.36.48.35-1.43 2.12-.27 3.36-.48z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M492.12 480.21c1.01.13.35 2.31.24 2.88-.55-.49-.08-2-.24-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 480.45h3.84c.03 1.13-3.86 1.13-3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.28 480.45c1.4.12 3.31-.27 4.32.24-.47.69-4.21.98-4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 480.45c.69.03 1.57-.13 1.92.24-.02.72-2.2.78-1.92-.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M400.92 482.13c.39-.07.42.22.72.24.5 8.3 3.1 14.5 5.76 20.64-3.99-5.12-5.31-12.93-6.48-20.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M491.88 484.29c.22.1.43.21.48.48-1.1 7.45-2.95 14.16-6.96 18.72 3.18-5.38 5.86-11.27 6.48-19.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 485.73c-1.67.28-2.34.08-4.08.24-.12-.2-.25-.39-.24-.72.92-.2 4.16-.85 4.32.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 485.73c-1.76.17-2.37.35-4.08-.24.38-.64 3.61-.95 4.08.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 485.01c-.33 1.61-2.82.96-3.84.24.96-.41 2.54-.19 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 485.73c-1.25.16-2.88.68-3.36-.48.74-.3 3.31-.66 3.36.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 485.25c-.16 1.33-3.4.67-4.32.48.88-1.51 2.96-.29 4.32-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M459 485.97c-.73.01-1.58.14-1.44-.72.65-.27 1.66-.47 1.44.72z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M400.68 486.21c1.68 7.76 4.8 15.36 7.68 21.12-3.79-5.65-6.58-13.58-7.68-21.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M487.08 486.45c-.1 3.25-1.34 7.45-3.36 9.6 1.49-2.84 2.53-6.12 3.36-9.6z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 489.09c-.3 1.05-2.51.21-3.6.48.45-.94 3.03-.41 3.6-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M433.08 489.33c.89-.56 2.8-.09 4.08-.24-.4.94-3.27.47-4.08.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 489.57h-4.08c.32-.79 3.77-.79 4.08 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 489.09c-.09 1.02-2.01.23-2.88.48.1-1.03 2.02-.23 2.88-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 489.09v.48h-3.84c.38-1.06 2.68-.21 3.84-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.16 490.29c.38.49.38 2.15 0 2.64h-4.08c-1.53-2.86 1.69-2.93 4.08-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 490.29c.45.51.17 1.76.24 2.64h-4.56c-.98-3.31 1.97-2.67 4.32-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 490.29h3.84c.45.51.17 1.76.24 2.64h-4.08v-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 490.29v2.64c-1.28.25-2.16.19-3.36-.24-.68-2.61 1.24-2.6 3.36-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 490.29c-.08.95.22 2.3-.24 2.88h-3.84c-1.53-2.93 1.5-3.28 4.08-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.56 490.29H465c-1.41.64-2.05 3.11-.24 3.84 1.18.44 1.71-1 2.16-.48.26 6.29.79 12.07.24 18.24.08-2.23-2.94-3.39-3.6-.96-.26 1.3.82 1.26.72 2.4-2.3-.08-5.76.19-6.96-.24-.34-.83.01-1.85 0-2.64 1.87.18 3.05-.32 4.8-.24v-7.2c2.16.43 3.07-1.24 2.4-2.88-.32-.88-1.85-.55-2.64-.96-.12-1.92.18-4.57 0-5.76-.96-.56-2.95-.09-4.32-.24-.52-.71.28-1.68 0-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M423.96 494.61c-3.82-2.73 2.54-5.3 2.4-1.68-.04 1.1-.73 1.74-2.4 1.68zm1.44-.72c.08-.57.38-.9.24-1.68-1.86-2.13-3.49 2.46-.24 1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M466.44 493.17c-.84.61-2.22.09-2.4-.72.1-1.77 3.01-1.47 2.4.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M425.64 492.21c.14.78-.16 1.11-.24 1.68-3.25.78-1.62-3.81.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429 493.65c1.1.1 2.71-.31 3.12.48-.96.96-2.24 1.59-3.36 2.4.09-.95-.22-2.3.24-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 494.13c-.84 1.28-3.18.54-4.56.24.88-1.4 3.54-.56 4.56-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 494.13c-.82 1.21-2.81.51-4.32.24.77-.96 3.88-.73 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 494.13c-.86.93-2.78.58-4.08.24.55-1.17 2.83-.41 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 493.89c1.03.09 2.48-.23 3.12.24-.52.55-3.32 1.29-3.12-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 494.13c-.37.75-2.57.94-3.36.48-.27.04-.42-.06-.48-.24.3-.91 3.16-.52 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M460.92 494.37c-.32 4.05.28 10.33 0 14.88-1.09-.11-2.64.24-3.36-.24 2.57-.62 3.83-5.62.96-6.96 2.77-2.42 2.02-6.13-.96-7.92.92-.55 2.45.02 3.36.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M405.48 495.09c.96 1.36 1.36 3.28 1.92 5.04.5.52.78-.21 1.2.24-.73 1.02.06 3.26.96 3.12.66.22-.33.75 0 1.44-1.83-2.81-3.34-5.94-4.08-9.84z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 495.57c-2.43 1.91.23 3.12.48 5.52-1.03.39-3.52.39-4.56 0-.36-1.89.93-2.11 1.2-3.36-.08-.96-.99-1.09-.96-2.16 1.02-.03 2.93-.15 3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M441.96 495.57c.61.62-.96 1.13-.96 2.16.01 1.44 1.91 1.61 1.68 3.36-1.1.39-3.69.39-4.8 0 .31-1.95 3.33-4.04.24-5.28.66-1.11 2.36.17 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 495.57h3.84c-2.24 1.74-.35 3.45.24 5.52-.95.39-3.36.39-4.32 0 .85-2.16 2.61-3.75.24-5.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 495.57h2.88c-2.13 2.02.3 3.2.48 5.52-.92.35-3.57.6-3.84-.48-.01-1.22 1.35-1.05 1.68-1.92.45-1.89-.91-1.96-1.2-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.76 495.81c.73-.56 2.48-.09 3.6-.24-.73 1.06-1.93 3.57.24 4.8.04 1.49-4.02 1.3-4.32.24.94-1.42 3.28-3.63.48-4.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 500.85c-.28-1.48 1.02-1.39 1.2-2.4-.11-1.16-1-1.55-1.2-2.64 2.62-.92 3.62 5.45 0 5.04z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M431.4 496.53c1.12-.16.61 1.31.72 2.16-.28-.04-.42.05-.48.24-1.05-.48-1.03-1.74-.24-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 496.53c.75.05.41 1.19.48 1.92-1.41.33-1.03-1.6-.48-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.52 496.53c.36.12.61.35.96.48.04.75.01 1.44-.48 1.68-1.17.13-.65-1.59-.48-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.12 496.77h.72c.25.97.24 1.44-.48 1.92-.55-.2-.65-1.48-.24-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M441.96 497.01c.98-.23.84 1.3.48 1.68-.97.22-.83-1.3-.48-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 497.01c1.01.03.75 1.33.24 1.68-.49-.46-.48-1.05-.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 497.01c.56.18.84 1.86-.24 1.68-.15-.93-.19-.99.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 497.01c.67.22.97 1.33.24 1.68-.89.19-.44-1.48-.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.08 497.01c.9.05.68.85.48 1.44-.61-.03-.47-.81-.48-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429.72 497.49c.5 1.42 2.23 1.61 2.4 3.36-1.97.17-2.86-1.88-2.4-3.36z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.88 497.49c.74-.37.74 1.56 0 1.2v-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M401.88 497.97c.56.24.78.82.72 1.68-.55-.25-.77-.83-.72-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M402.6 499.89c4.01 8.49 12.1 17.58 8.64 29.76 2.41-13.13-5.15-20.07-8.64-29.76z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M427.8 499.89c.35.6.58.94.24 1.68h-1.2c-.63-.67-.49-1.9.96-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429 499.89c.79.41 1.14 1.26 1.92 1.68-.84.44-.95 1.61-2.16 1.68-.01-1.22.42-1.99.24-3.36z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M464.28 500.85c-.08.71-.41 1.18-.96 1.44-3.16-.15-.03-4.06.96-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M400.44 500.37c1.83 3.21 3.15 6.93 5.04 10.08-2.4-2.64-3.87-6.21-5.04-10.08z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 502.29c.63 1.61-1.51 1.77-1.68 2.88-.22 1.47.61 1.57 1.44 2.88-1.59.56-2.86-.02-4.32 0-.1-1.14.82-1.26.72-2.4-2.47-2.72.54-4.66 3.84-3.36z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.68 502.29c.26 1.53-1.27 1.29-1.68 2.16-.61 2.29 1.23 2.13 1.44 3.6-1.62.42-2.83.19-4.32 0 2.53-1.86.37-3.41-.24-5.76 1.11-.39 3.7-.39 4.8 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 502.29c.24 1.61-1.54 1.42-1.68 2.64-.17 1.52 1.16 1.5 1.68 3.12-1.8.4-2.76.15-4.08 0 1.77-1.97.89-3.78-.24-5.76.96-.39 3.37-.39 4.32 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.2 502.05c1.17.11 2.82-.25 3.6.24.01 1.13-1.17 1.06-1.44 1.92-.58 2.34 1.72 1.8 1.44 3.84-1.23.26-2.42.15-3.6 0-.03-1.32 1.27-1.3 1.44-2.4.25-1.93-1.8-1.56-1.44-3.6z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 502.77c-.62.74-1.31 1.4-2.16 1.92.06-1.42-1.54-1.18-1.68-2.4.69-.02 3.45-.94 3.84.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 502.29c2.88.17 3.17 5.56 0 5.52.76-2.32.55-3.15 0-5.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.12 502.77v.48c-.55 1.04-2.31.88-2.4 2.4-.84-1.54 1.01-3.58 2.4-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.76 503.73c.43.21.75.53.96.96-.04.75-.17 1.43-.96 1.44-.36-.44-.36-1.97 0-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 503.97c.73.02.79 2.2-.24 1.92-.37-.76-.15-1.34.24-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M441.96 504.21c1.04.01.72 1.52.48 2.16-1.27.03-1.03-1.58-.48-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.88 504.21c.69.03.44 1 .48 1.68-1.35.3-1.02-1.34-.48-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 504.45c.73.28.82 1.18.24 1.68-.89.19-.44-1.48-.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M446.76 504.45c.96-.16.69.91.72 1.68-1.17.37-1.13-1.2-.72-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.2 504.45c1.1-.22.89 1.81 0 1.68v-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M431.4 504.69c.2.12.39.25.72.24 0 .63.09 1.37-.24 1.68-.76.2-.74-.38-1.2-.48-.13-.85.39-1.05.72-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.16 504.69c.36.35.36 1.57 0 1.92-1.19 0-1.19-1.92 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M438.12 504.69c.81.06 1.04 1.64.24 1.92-.84-.13-.38-1.39-.24-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.2 505.17c.68.84 1.45 1.59 2.4 2.16-.55 1.26-3.08 1.19-4.32.48.35-1.18 2.1-.94 1.92-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M490.44 506.37c-1.18 4.9-3.4 8.98-2.64 15.84 1.06 9.55 8.15 15.2 13.44 21.36 2.73 3.17 5.67 5.94 8.16 9.12 12.25 15.61 18 44.49 5.76 65.52 3.19-8.23 6.23-17.46 6.24-28.08.04-24.32-13.75-39.13-26.4-52.56-6.87-7.31-11.19-20.73-4.56-31.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M409.8 507.09c6.79 7.6 7.12 25.35.96 33.84 1.13-3.61 3.25-7.44 3.84-12 1.06-8.12-1.8-16.31-4.8-21.84z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M480.12 507.33c.41-.09.46.18.48.48-1.67 2.8-2.84 6.11-3.12 10.32 1.11-3.06 1.27-7.06 3.36-9.12-2.58 5.74-3.91 13.7-2.16 20.64-1.25-.83-.61-3.55-1.44-4.8.06 7.14 3.1 13.38 6.48 18-1.7-.74-2.6-3.08-3.6-5.04-2.1-4.16-3.99-9.66-3.6-16.56.3-5.29 1.73-9.84 3.6-13.92zM477 520.77c.81-.16.93-1.86.24-2.16-.18 1.14-.1 1.06-.24 2.16zm0 1.44c-.43 3.03 1.04.81 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429 507.57c1.04.16 1.29 1.11 2.4 1.2-.33.71-1.73.5-2.4.24v-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M476.52 507.81c.43-.07.5.22.24.24-3.87 8.09-3.85 23.18.72 30.48-1.34-.78-2.3-3.77-2.88-6-2.02-7.83-1.21-18.13 1.92-24.72z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M477.24 508.29c.3.1.5.3.48.72-4.88 8.63-2.9 24.35 1.68 31.68-5.79-6.89-6.47-23.32-2.16-32.4z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M478.2 508.77c.28-.04.43.05.48.24-5.4 11.39-1.9 27.86 4.56 35.52-7.4-6.62-10.06-24.47-5.04-35.76z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M425.4 512.61c-1.81.25-2.58-.7-2.64-1.68-.23-3.67 5.93-1.17 2.64 1.68zm-1.44-.72c1.45.24 1.87-.53 1.68-1.92-1.54-1.28-3.17.73-1.68 1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M425.64 509.97c.19 1.39-.23 2.16-1.68 1.92-1.49-1.19.14-3.2 1.68-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M412.44 509.97c.04-.28.44-.21.72-.24 5.53 10.69 3.53 29.06-4.32 35.76 6.96-8.11 9.85-24.92 3.6-35.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M465.96 512.37c-.91.11-1.53-.07-1.92-.48-.45-3.17 3.77-1.43 1.92.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 510.21c.62.37.68 2.21.24 2.88-1.12.36-2.27.15-4.08.24-1.43-3.22 1.5-3.37 3.84-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 510.45c.27 1.07.06 1.51 0 2.64-1.3.43-3.57.25-4.32 0-1.1-3.4 2.08-2.94 4.32-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 510.45v2.64c-1.08.36-3.24.36-4.32 0v-2.4c1.2-.23 3.13-.8 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 510.21c.38.61.38 2.5 0 3.12-.98-.26-1.69.12-3.12 0-1.2-2.86.81-3.35 3.12-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 510.45c-.08.95.22 2.3-.24 2.88h-3.6c-1.45-3.76 2.26-3.28 3.84-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M414.36 511.17c2.57 3.78 3.48 10.41 2.88 16.56-.29-5.31-.84-12.23-2.88-16.56z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M411.24 512.61c5.43 8.01 2.39 24.66-3.36 30.72 1.8-3.79 4.69-8.42 5.52-14.16.83-5.69-.17-11.54-2.16-16.56z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M473.16 512.61c.7 1.26-.43 2.76-.48 4.08-.64-1.21.36-2.85.48-4.08z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M480.12 513.57c.28-.04.43.05.48.24-.36 2.18-1.03 4.31-1.2 6.48-.58 7.61 2.2 14.53 4.8 19.44-4.77-5.38-6.67-17.03-4.08-26.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.4 514.77c-.56 7.09.08 16.68-.48 23.04-1.47-.13-3.47.27-4.56-.24.22-7.32.23-16.23.48-23.28 1.64.04 3.58-.22 4.56.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 514.53c.41 7.63-.17 13.63 0 23.28-1.55-.13-3.63.27-4.8-.24.04-7.85.39-14.65.24-23.04 1.04-.39 3.53-.39 4.56 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 514.53c-.04 7.57.07 17.25 0 23.28-1.39-.13-3.31.27-4.32-.24v-22.56c.17-1.33 3.41-.68 4.32-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.8 514.53c.05 8.2.27 13.09.24 23.04-.81.38-3.02.38-3.84 0v-22.56c0-1.28 2.88-.71 3.6-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 514.53v23.04c-.78.49-2.43.13-3.6.24-1.06-6.54-.2-16.28-.48-22.8.11-1.32 3.24-.69 4.08-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M402.36 515.73c2.75 9.73-2.08 19.43-7.68 24.48 4.13-5.59 9.36-12.86 7.68-24.48z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M482.52 515.97c.28-.04.43.05.48.24-1.8 6.88-.15 15.15 2.4 19.92-3.49-4.23-4.35-13.13-2.88-20.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M407.4 516.45c2.94 5.16 1.92 15.64-1.44 19.92 2.56-4.9 3.62-13.73 1.44-19.92z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M418.2 516.93c1.11 2.28 1.51 8.17.48 10.32.38-3.3-.25-7.33-.48-10.32z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M472.2 516.93c.29 4.38-.36 11.86 1.44 16.08-1.37-.71-1.18-3.08-1.44-5.04-.44-3.36-.62-7.16 0-11.04z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M468.36 518.37c.67 2.63-.18 6.83.48 10.08-1.27-1.76-.71-7.01-.48-10.08z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M421.32 519.09c.99 1.73.26 5.19.48 7.68-1.03-1.55-.27-6.1-.48-7.68z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M418.68 527.73c.73 2.53-.85 6.79-1.68 9.36-.07-2.8 1.54-5.98 1.68-9.36z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M411.24 529.89c.07 4.55-2.54 8.49-4.56 11.76 1.16-3.33 3.81-7.23 4.56-11.76z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M480.36 535.41c.51.22.74.71.72 1.44-.51-.24-1.16-.97-.72-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 538.29c.42 1 .22 2.66 0 3.12-1.17.15-2.36.26-3.6 0 .11-1.38-.25-1.91 0-2.88 1.32.03 2.59.02 3.6-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M465 538.53c-.86.74-1.52 3-.24 3.84 1.35.42 1.92-.79 2.64-.24.01 5.23.02 12.66 0 18a1.923 1.923 0 00-2.64 2.64c-2.73.55-5.88.06-7.68 0v-2.4c1.71-.14 3.97.28 5.28-.24.7-2.3-.13-6.17.24-8.16 3.3 1.32 4.01-4.49-.24-3.36-.14-2.18.3-4.94-.24-6.72-1.76-.61-3.89.11-5.04-.72-.74-4.78 4.23-2.11 7.92-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M425.4 538.53h6c.46.58.15 1.93.24 2.88-.78.27-2.61.45-3.36 0-.52 2.09-.19 5.72 0 7.2-3.64-.39-3.56 4.44 0 4.08-.11 2.38.06 4.58 0 7.44.58.46 1.93.15 2.88.24.38.49.38 2.14 0 2.64-2.67.14-3.34-.3-5.76-.24 2.49-1.77-.32-5.53-2.64-3.12v-18c1.01-.05.75 1.18 1.92.96 2.08-.33 1.83-2.9.72-4.08z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.6 538.53h4.32c.26 1.46.38 2.23-.24 3.12-1.49-.34-2.82.31-4.32-.24.09-.95-.22-2.3.24-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 538.53c-.17 1.09.27 2.43 0 2.88-1.14.43-3.63.33-4.8 0-1.1-3.66 2.23-2.89 4.8-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.16 538.53c1.44 0 2.95-.26 4.39-.26-.05.83.42 2.14-.07 3.14-1.11.18-2.47.04-4.08.24-.47-.65-.14-2.1-.24-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.04 538.53v2.88c-1.88.11-2.39.43-3.84-.24.05-1.27.16-1.23 0-2.4.87-.5 2.6-.13 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M413.4 539.49c.91 1.66-1.76 3.81-2.4 5.52-.62-1.42 2.09-3.46 2.4-5.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M425.64 539.97c.15 1.03-.21 1.54-.72 1.92-2.6.06-.93-3.7.72-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M466.68 539.73c.36.73.07 1.25-.24 1.92-2.94.73-1.98-3.47.24-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 542.61c-.24.8-2.76.58-3.36.24.63-.88 2.7-.65 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429 542.37c.84.13 2.28-.36 2.4.48-.57 1.03-1.67 1.52-2.64 2.16.08-.88-.2-2.13.24-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 542.61c-.22 1.34-3.58.66-4.56.48.32-1.26 3.53-.72 4.56-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.88 542.37c1.44.32 4.27-.74 4.56.72-1.26-.29-4.1 1.3-4.56-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.72 542.61c-1.04.96-3.18.63-4.56.24.61-.89 3.57-.52 4.56-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.04 542.61c-.63.73-3.29.94-3.6 0 .71-.35 2.91-.44 3.6 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M461.16 542.61c.17 4.93.29 9.57.24 16.32-1.04.26-3.64.6-4.32-.24 1.52-2.11 4.19-2.52 3.36-5.76-.32-1.26-1.31-1.49-1.92-2.88 3-1.59 1.83-6.71-1.44-7.2.48-.87 3.23-.52 4.08-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.04 544.29c-.35 1.39-1.63 1.14-1.68 2.4-.05 1.44 1.55 1.44 1.92 2.88-.23 0-.18.29-.24.48-.93.32-2.33-.19-3.84 0 1.18-2.18 2.44-4.03 0-5.76.96-.51 2.98-.62 3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 544.05c.13 1.49-1.63 1.09-1.68 2.4-.18 1.78 1.77 1.43 1.68 3.12-.52 1.17-2.62.58-3.6.24-.18-1.55 1.25-1.48 1.44-2.64.21-1.73-1.56-1.48-1.44-3.12.71-.35 2.91-.44 3.6 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.6 544.05h4.08c.25 1.2-1.07.84-1.2 1.68-.55 2.47 1.99 1.85 1.44 4.32-1.72.21-3.89.64-4.8-.72.4-1.41 1.63-1.21 1.68-2.64.05-1.33-1.35-1.51-1.2-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.88 544.05h4.56c-.17 1.49-1.29.99-1.44 2.16-.2 1.61 1.6 1.87 1.44 3.84-1.16.33-3.65.43-4.8 0-.47-2.08 1.27-1.94 1.44-3.36.09-1.3-1.61-1.8-1.2-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 544.05c.27 1.62-1.54 1.17-1.44 2.64.05 1.56 1.85 1.35 1.68 3.12-1.24.6-3.21.25-4.56.24.36-2.3 2.85-3.68 0-5.76 1.01-.51 2.93-.12 4.32-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.08 544.05c3.9-.33 2.89 6.33 0 5.52-.23-1.52 1.23-1.34 1.2-2.64.19-1.55-1.43-1.29-1.2-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M430.68 544.53c-.63 1.43-.26 3.23.72 4.8-2.21.6-2.9-4.04-.72-4.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 545.49v1.92c-1.16.02-1.29-2.02 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.36 545.73c1.15.02 1.15 1.66 0 1.68v-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.64 545.73c1.1-.22.89 1.81 0 1.68v-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M441.72 545.73h.72v1.92c-1.01-.04-1.06-1.18-.72-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.64 545.73h.72v1.92c-1.26.39-1.1-1.42-.72-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.16 545.97c.66-.18.49.47.96.48.04.59-.37.74-.48 1.2-.68-.04-.43-1-.48-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 545.97c.39-.07.42.22.72.24.01.56-.41.7-.24 1.44-.79.05-.94-1.19-.48-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 545.97c.98-.23.84 1.3.48 1.68-.97.22-.83-1.3-.48-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.04 545.97v1.68c-1.09.21-1.47-2.02 0-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M474.6 546.21c5.56-.97 9.75 4.08 7.2 9.36-2.94 6.1-13.61 3.97-12.48-4.32.31-2.24 1.85-4.44 5.28-5.04zm5.76 9.84c3.28-4.45-1.72-9.9-6.24-8.16-8.61 2.53 1.17 15.04 6.24 8.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.76 546.21h.72c.04.59.04 1.15-.24 1.44-.61-.03-.47-.81-.48-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M406.44 546.45c.03.9-.47 1.29-1.2 1.44.25-.64.4-1.37 1.2-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M474.12 547.89c4.52-1.74 9.52 3.71 6.24 8.16-5.07 6.88-14.85-5.63-6.24-8.16zm3.12 8.88c1.99-.51 3.62-3.38 2.64-6-.57-1.54-2.46-2.62-4.56-2.4-6.56.68-4.07 9.92 1.92 8.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M475.32 548.37c2.1-.22 3.99.86 4.56 2.4.98 2.62-.64 5.49-2.64 6-5.99 1.52-8.48-7.72-1.92-8.4z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M399.72 548.61c.66.39.46.34.24.72-.95 1.65-3.35 3.54-5.04 5.52-1.64 1.93-3.44 3.74-4.8 5.52-.16-1.27 1.17-2.2 1.92-3.12 2.31-2.82 5.06-5.97 7.68-8.64z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M509.4 576.21c-3.79-11.41-9.76-20.64-18.48-27.12 1.27-.41 2.32 1.19 3.12 1.92 6.76 6.1 12.9 14.67 15.36 25.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M499.56 548.85c4.23 3.53 7.48 8.04 10.08 13.2-3.16-4.6-6.3-9.22-10.08-13.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429 549.09c.67.29 1.15.77 1.44 1.44-.18.77-.66 1.25-1.44 1.44-.17-1.05-.06-1.6 0-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M464.76 549.57c.62 1.79-1.81 2.22-2.16.96-.07-1.38 1.41-1.7 2.16-.96z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M489.72 549.33c.06-.31.48-.25.48 0 13.03 9.48 23.91 27.98 18.96 51.84-.53-.03-.1-1.02-.24-1.44-.35.2-.51.6-.48 1.2 3.71-21.99-6.15-41.35-19.44-50.4 1.05-.25 2.66 1.37 3.84 2.4 9.75 8.47 17.9 24.28 16.8 41.04 1.82-20.68-7.96-35.4-19.92-44.64zm19.44 49.2c-.08-.98 1.02-2.02.24-2.88-.15.73-.7 2.32-.24 2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M395.16 550.05c.08.63-.33.78-.96.72.02-.65.55-1.16.96-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M428.04 550.05v1.2c-2.23 1.22-2.27-2.48 0-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M403.8 550.05c-.14.5-.5.77-.72 1.2-.64-.35.1-1.32.72-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M404.52 550.53c.12.75-.64.63-.72 1.2-.64-.35.1-1.32.72-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M496.44 550.77c1.39.61 2.11 1.89 2.88 3.12-1.02-.98-2.25-1.75-2.88-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 551.49c.1 1.45-1.7 1.02-1.92 2.16-.37 2.21 1.83 1.85 1.92 3.6-1.37.23-2.91.37-4.8 0 1.51-1.76 2.39-3.34 0-5.28.02-1.53 4.1-1.19 4.8-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.64 551.01c1.55.13 3.64-.28 4.8.24.28 1.55-1.22 1.33-1.44 2.4-.29 1.97 1.78 1.58 1.44 3.6-1.68.22-3.68.57-5.04-.24.14-1.15 1.19-1.37 1.44-2.4-.02-1.67-1.88-1.93-1.2-3.6z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 551.25c.65 1.01-1.18 1.28-1.44 2.16-.52 2.12 1.29 1.91 1.68 3.12-.29 1.46-3.12.39-4.56.72.09-1.76 1.54-1.85 1.44-3.36-.07-1.28-1.44-1.05-1.44-2.64.93-.36 3.41-.43 4.32 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.04 551.25c.16 1.59-1.5 1.32-1.44 2.88.06 1.49 1.94 1.19 1.68 3.12-1.32-.2-3.5.46-4.08-.48.27-1.48 1.45-1.35 1.44-2.64 0-1.28-1.47-1.32-1.44-2.88.78-.35 3.08-.44 3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 551.73c-.43.92-1.99.72-1.92 2.16-.55-.89-1.67-1.21-1.68-2.64.73-.23 3.61-.8 3.6.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 551.01c3.37 0 3.51 6.06-.24 5.76-.32-1.53.95-1.46.96-2.64.15-1.35-1.66-1.74-.72-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M488.28 551.01c12.76 8.15 22.28 25.68 19.92 45.36-.16-5.02.15-10.27-.72-14.88-2.53-13.44-10.24-23.27-19.2-30.48z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M402.6 551.49c-.01.86-.63 1.12-1.2 1.44.25-.64.4-1.37 1.2-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M430.68 551.73c.28-.04.43.05.48.24-.68 1.43-1.68 3.69.24 4.56-2.07.78-2.61-4.18-.72-4.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M435.96 553.17h.72c.36.39.36 1.77 0 2.16-1.15.06-1.07-1.38-.72-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M441.96 553.17c.73.02.57 1.57.24 1.92-.96-.23-.73-1.35-.24-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 553.17c.78.12.96 1.34.24 1.68-.89.19-.44-1.48-.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.24 553.17c.5.2.26 1.67 0 1.92-1.03-.24-.74-1.59 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.56 553.17c.84-.14 1.03 1.61.24 1.68-.93.04-.85-1.44-.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 553.17c-.02.69.14 1.57-.24 1.92-.87-.01-1.05-.71-.96-1.68.28-.2.65-.32 1.2-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 553.41c.66 0 .57 1.13.24 1.44-.46-.21-.65-1.06-.24-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M453 553.41c.66 0 .57 1.13.24 1.44-.34-.32-.63-1.07-.24-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M432.12 553.65c1.35-.47 1.35 2.15 0 1.68v-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M400.2 553.89c.26 1.14-1.36 2.47-2.4 3.12.33-1.52 1.67-2.02 2.4-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M390.84 554.13c-1.14 1.66-2.28 3.32-3.84 4.56 1.01-1.8 2.16-3.45 3.84-4.56z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M398.52 554.13c.62-.01.3.18.24.48-7.46 7.47-14.53 17.91-15.36 32.4-.43 7.6 1.36 15.53 4.32 21.6-1.31-.74-1.86-2.74-2.4-4.32-1.61-4.75-2.81-11.82-2.4-18 .96-14.29 8.27-24.67 15.6-32.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M490.2 554.37c4.16 2.96 7.21 7.03 9.84 11.52-3.14-3.98-6.24-8-9.84-11.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M454.2 554.61c.64.72 1.68 1.05 2.16 1.92.01 1.27-2.87.7-3.6.48-.01-1.29 1.21-1.35 1.44-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M401.4 554.85c.06.7-.45.83-.72 1.2-.64-.35.1-1.32.72-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M501.24 556.05c.77.19.89 1.03 1.2 1.68-.59-.37-1.09-.83-1.2-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429 556.29c.99.61 2.09 1.11 2.4 2.4-.39.4-1.41.19-2.16.24-.23-.7-.55-2.15-.24-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M489.72 557.01c1.65-.36 2.37 2.27 3.84 2.88-1.21.79-2.36-2.36-3.84-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M399.72 557.01c-.03.61-.35.93-.96.96.03-.61.35-.93.96-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 558.45c-.66.87-4.52 1.02-4.8-.24 2.03.08 3.17-.34 4.8.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 558.45c-.99 1.19-3.77.61-4.8.24.47-1.01 4.05-1.07 4.8-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.72 558.21c-.75 1.73-3.15.71-4.56.48.32-1.26 3.53-.72 4.56-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 557.97c1.23.22 3.38-.5 3.84.48-.05 1.29-3.05.69-3.84.48-.4-.48.03-.31 0-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 558.45c-.07 1.38-2.5.52-3.36.48v-.72c.66-.29 3.08-.61 3.36.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M396.6 558.45c.12.75-.64.63-.72 1.2-.64-.35.1-1.32.72-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M397.56 559.41c.05.84-.81.79-.96 1.44-.65-.52.32-1.43.96-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M425.4 559.65c.86.9.44 2.64-1.44 2.16-.86-.91-.43-2.65 1.44-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M466.44 560.13c.78 1.59-1.25 2.39-2.16 1.2-.33-1.54 1.2-1.66 2.16-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 560.37v2.4c-1.15.44-3.03.16-4.56.24-1.46-3.45 1.78-2.69 4.56-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 560.37c-.19 1 .33 2 0 2.4-1.2.34-4.19.56-5.04-.24.06-1.14.1-1.58.24-2.16 1.64-.2 3.23-.24 4.8 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 560.37c.38.49.38 2.14 0 2.64-1.53-.29-2.84.33-4.32-.24-1.02-2.87 1.58-2.62 4.32-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.28 560.37v2.4c-1.01.36-3.06.36-4.08 0-.71-3.22 1.84-2.54 4.08-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.12 560.13c.63.41.49 1.59.48 2.64-1.13.58-2.25-.09-3.6 0 .07-.82-.18-1.95.24-2.4 1.26-.28 1.57-.03 2.88-.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M394.2 560.61c.28-.04.43.05.48.24-4.96 5.91-7.9 13.85-10.08 22.56 1.19-9.62 5.04-16.56 9.6-22.8z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M391.08 561.33c-.13.58-.2 1.23-.96 1.2.14-.59.21-1.24.96-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M387.96 561.81c.94-.16.38 1.41-.24 1.2-.19-.68.34-.62.24-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M495 561.81c.48.16.64.64.72 1.2-.74.04-1.08-.85-.72-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M496.92 564.21c1.11 2.29 2.77 3.13 2.88 6 .39 9.27-12.41 10.17-14.64 2.88-2.1-6.91 4.97-12.39 11.76-8.88zM495 577.17c6.79-2.23 4.38-13.21-2.16-13.2-10.61.01-7.41 16.33 2.16 13.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M492.84 563.97c6.54-.01 8.95 10.98 2.16 13.2-9.57 3.13-12.77-13.19-2.16-13.2zm1.2 10.56c4.04-1.09 2.48-8.68-2.64-7.44-5.45 1.32-1.96 8.68 2.64 7.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M395.64 563.97c.41-.09.46.18.48.48-4.55 5.36-7.71 14.15-8.4 21.84-.07-9.2 3.9-16.43 7.92-22.32z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.68 564.21c.38.55.38 2.33 0 2.88h-4.56c-.46-.58-.15-1.93-.24-2.88 1.9-.36 3.47-.2 4.8 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 564.21c-.04.92 0 1.77.24 2.4-.91.81-4 .57-5.28.24.3-1.02.09-1.3 0-2.4 1.49-.62 3.61-.19 5.04-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.28 564.21c-.07.88.21 2.12-.24 2.64h-3.6c.19-1.23-.41-1.83 0-2.64 1.72-.03 2.52-.26 3.84 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.36 563.97c.45.51.17 1.76.24 2.64-.97.42-2.58.24-3.6 0-.14-1.25-.21-1.43 0-2.4 1.71.02 1.72-.2 3.36-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.16 564.21h4.32c.38.49.38 2.15 0 2.64-1.68-.12-3.22.2-4.32 0v-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M491.4 567.09c5.12-1.24 6.68 6.35 2.64 7.44-4.6 1.24-8.09-6.12-2.64-7.44zm2.16.48c-4.61-1.36-6.02 5.77-1.68 5.76-2.25-1-1.28-4.76.48-4.8 2.27-.05 1.52 3.01 1.92 4.56 2.15-1.38 1.03-5.01-.72-5.52zm-2.4 4.8c.64.55 1.53.55 2.16 0-.09-1.19-.31-2.25-.72-3.12h-.96c-.31.88-.21 2.18-.48 3.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M500.76 567.09c3.12 5.52 5.54 11.74 6 19.92-1.13-7.36-3.7-14.54-6-19.92z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M507.72 567.33c.18-.43.44-.04.72 0 1.97 4.91 4.33 10.7 4.32 16.8-1.15-6.13-2.42-12.14-5.04-16.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 567.57c-.38.89-1.1 1.45-1.2 2.64h-1.2c.24-1.36-.17-2.06-1.2-2.16.83-.92 2.37-.44 3.6-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M460.44 567.33c.44 1.09 1.04 4-.72 4.8-.65-1.51-.78-3.54-2.4-4.08.44-1.38 2-.23 3.12-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.44 567.81c-.29.9-1.69.7-1.2 2.4h-2.16c.55-1.83-1.05-1.51-1.44-2.4 1.76-.01 2.94-.35 4.8 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 567.81c-.28.83-.5 1.73-.96 2.4h-2.16c-.03-1.09-.59-1.65-.96-2.4.89-.39 3.2-.39 4.08 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.28 567.81c-.69.5-1.02 1.37-1.2 2.4h-1.44c-.42-.7.06-2.3-1.2-2.16.41-.87 3.06-.53 3.84-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M464.76 567.57c.88-.08 1.57.03 2.16.24 1.06 2.53.61 4.75.48 7.68-.62-3.21-3.79-4.19-2.64-7.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M494.28 573.09c-.4-1.55.35-4.61-1.92-4.56-1.76.04-2.73 3.8-.48 4.8-4.34.01-2.93-7.12 1.68-5.76 1.75.51 2.87 4.14.72 5.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M431.16 568.05c-.77.34-1.03 1.21-1.2 2.16-.92.04-1.77.01-2.4-.24-.54.25-.09 1.51-.24 2.16-.62.59-.89-.52-1.68-.48-.11-1.47-.02-2.13-.24-3.6 1.41-.4 4.36-.4 5.76 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.68 567.81c-.32 1.12-.8 1.32-.72 2.4h-2.4c-.32-.8-.19-2.05-1.44-1.92.67-1.01 3.12-.24 4.56-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M422.04 568.05c.16 1.04-.31 2.71.24 3.36-2.92 1.52-1.72 6.62 0 7.68-3.6-.86-2.79-7.5-2.4-10.32 0-.97 1.26-.67 2.16-.72z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M386.04 569.01c.28-.04.43.05.48.24-6.54 12.15-5.04 33.43 1.92 44.16-7.84-9.71-8.67-32.28-2.4-44.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.64 569.25h.72c.11.5-.16.63-.24.96-.42-.06-.54-.42-.48-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M491.64 569.25h.96c.41.87.63 1.93.72 3.12-.63.55-1.52.55-2.16 0 .27-.94.17-2.24.48-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M428.04 570.93h2.88c.41.4.19 1.41.24 2.16-.64.47-2.09.14-3.12.24.26-1.06-.47-1.86 0-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.92 571.17v1.92c-1.23.52-3.41.1-5.04.24-1.16-3.48 3.29-2.38 5.04-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M442.2 570.93c.43.45.18 1.58.24 2.4-1.62-.14-3.8.28-5.04-.24-.8-3.13 2.69-1.95 4.8-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447.48 570.93c.21.6.32 1.28.24 2.16-1.01.51-2.92.11-4.32.24-1.52-2.77 1.88-2.58 4.08-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M452.28 570.93c-.06.81.19 1.94-.24 2.4h-3.6c-1.33-2.58 1.6-2.63 3.84-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M456.6 570.93c-.06.81.19 1.94-.24 2.4h-3.12c-1.34-2.36 1.2-2.77 3.36-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.32 570.93h1.2c.37.44.37 1.96 0 2.4h-.96c-.36-.87-.41-1.52-.24-2.4z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M462.12 571.41c2.77-.26 4.56 1.65 3.84 4.08-1.84-.8-2.95-2.33-3.84-4.08z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M500.76 571.65c2.52 3.65 3.86 9.73 4.08 14.88-1.01-5.13-2.03-10.27-4.08-14.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M427.08 576.45c-1.34-1.38-3.06-2.38-3.84-4.32 2.94-.9 5.15 2.42 3.84 4.32z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M460.68 572.13c2 1.12 3.76 2.48 4.56 4.8-2.16-.82-3.96-3.21-4.56-4.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M421.8 572.85c2.18.94 3.65 2.59 4.56 4.8-2.01-1.11-3.43-2.81-4.56-4.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M459.96 573.33c1.75 1.05 2.89 2.71 4.08 4.32-2.86 1.12-5.52-1.9-4.08-4.32z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M391.8 574.05c1.09-.01.08 1.11 0 1.44-.67-.25.07-1.02 0-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M428.76 574.05h.72c.33.35.49 1.9-.24 1.92-1.03.23-.81-1.52-.48-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M433.32 574.29c0 .63.09 1.37-.24 1.68h-1.2c-.74-1.07.24-2.63 1.44-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.04 574.05h1.2c.19.53.51.93.48 1.68-.31.33-1.04.23-1.68.24-.35-.35-.35-1.57 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.08 574.05v1.92h-1.44c-.66-.97-.16-2.47 1.44-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M439.8 574.05h.96c.37.35.21 1.23.24 1.92h-1.2v-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M441.72 574.05h.48c.34.4.56 2.15-.48 1.92-.35-.35-.35-1.57 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M444.6 574.05c.16.55.48 1.44 0 1.92h-1.2c-.56-.8-.33-2.46 1.2-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M445.32 574.05h.72c.29.69.51 1.27.24 1.92-1.25.29-.93-.99-.96-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 574.05c1.05-.29 1.05 2.2 0 1.92-.15-.55-.47-1.45 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M449.88 574.05c.63.18.99 1.34.48 1.92-.98-.02-.71-1.3-.48-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M451.32 574.05h.72c.38.35.22 1.23.24 1.92-1.42.49-1.42-1.28-.96-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M453 574.05h.96c.29.67.28 1.46-.24 1.92-1.04.16-.64-1.12-.72-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M455.88 574.05c.97-.01 1.2 1.59.48 1.92-1.03.23-.81-1.52-.48-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M457.56 574.05h.48c.34.4.56 2.15-.48 1.92-.35-.35-.35-1.57 0-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M421.08 574.29c1.91.73 2.95 2.33 3.84 4.08-2.91.41-4.47-1.74-3.84-4.08z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M430.2 574.29h.72c.37.36.43 1.64-.48 1.44.01-.57-.41-.71-.24-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M436.2 574.29c.81.05.92 1.49 0 1.44v-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M447 574.29c1.03-.28 1.03 1.96 0 1.68-.25-.68-.25-1 0-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M428.76 576.69h15.12c5.12 0 11.22-1.04 15.12 0 1.61.42 2.62 2.8 4.56 2.16-10.48.84-24.83.46-37.44.72.96-.89 1.7-1.99 2.64-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M381.24 577.65c.93-.14.35 1.58-.24 1.44 0-.57.42-.71.24-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M381 579.33c-1.97 13.02.75 26.81 6.48 36-6.12-8.65-9.42-22.94-6.48-36z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M463.08 580.53c1.03.09.23 2.01.48 2.88-1.04-.33-.45-2.11-.48-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M423.96 581.01c.42.38.52 1.08.48 1.92-1.03-.28-.4-.98-.48-1.92z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M389.4 582.69c.97.42-.13 2.67 0 3.84-.89-.5.09-2.63 0-3.84z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M480.6 584.13c4.91-.73 9.27 3.1 8.4 8.88-1.14 7.59-13.61 7.56-14.4-.96-.39-4.29 1.84-7.31 6-7.92zm-.48 13.68c10.39 2.3 10.62-14.99.24-12.96-6.77 1.32-6.63 11.54-.24 12.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M464.04 584.61c.17.9-1.81.58-1.44-.24.6-.17.99-.24 1.44.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M424.92 585.09c-.49-.15-1.66.38-1.44-.48.39-.4 1.51-.29 1.44.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M480.36 584.85c10.38-2.03 10.15 15.26-.24 12.96-6.39-1.42-6.53-11.64.24-12.96zm2.64 11.76c5.62-.7 4.97-12.13-2.64-10.08-6.16 1.65-3.24 10.8 2.64 10.08z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M480.36 586.53c7.61-2.05 8.26 9.38 2.64 10.08-5.88.72-8.8-8.43-2.64-10.08zm3.84 8.64c4.13-2.26 1.19-9.06-3.36-8.16-6.64 1.31-2.35 11.28 3.36 8.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M384.12 587.01c.76-.31.76 1.99 0 1.68v-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M384.36 593.97c.39-.07.42.22.72.24.69 9.95 5.14 18.22 10.32 24.48-2.83-2.02-5.13-6.2-6.96-10.08-1.99-4.24-3.53-9.11-4.08-14.64z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M510.84 594.21c.49.27.28 1.85 0 2.16-.48-.27-.27-1.86 0-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M373.08 595.89c.87.33.48 1.92.72 2.88-.75-.45-.7-1.7-.72-2.88z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M483.96 602.85c13.07-2.63 10.43 19.22-1.44 14.16-6.26-2.68-5.08-12.85 1.44-14.16zm-1.44 13.44c9.92 5.24 14.23-13.67 3.12-12.72 0 0-.14-.01-.24 0-7.11.78-8.34 9.83-2.88 12.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M485.4 603.57c.1-.01.24 0 .24 0 11.11-.95 6.8 17.96-3.12 12.72-5.46-2.89-4.23-11.94 2.88-12.72zm3.36 8.64c1.77-3.69-2.73-7.95-6.24-4.56v4.32c1.28.4 1.93 1.43 3.12 1.92 1-.61 2.52-.69 3.12-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M485.64 613.89c-1.19-.49-1.84-1.52-3.12-1.92v-4.32c3.51-3.39 8.01.87 6.24 4.56-.6.99-2.12 1.07-3.12 1.68zm-2.64-5.76v3.36c.66.54 1.6.8 2.16 1.44.98-.52 3.46-.63 2.64-2.16-1.07.52-1.12 1.55-2.4 1.44-4.43-.4.24-7.69 2.64-2.64.14-3.3-3.43-2.73-5.04-1.44zm.96 1.92c.11 1.91 3.75 2.34 3.12-.96-1.24-1.43-3.19-.38-3.12.96z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M488.04 609.57c-2.4-5.05-7.07 2.24-2.64 2.64 1.28.11 1.33-.91 2.4-1.44.82 1.53-1.66 1.64-2.64 2.16-.56-.64-1.5-.9-2.16-1.44v-3.36c1.61-1.29 5.18-1.86 5.04 1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M392.04 608.37c.75.85 1.48 1.72 1.68 3.12-.96-.64-1.26-1.94-1.68-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M390.84 609.81c1.48 1.48 2.15 3.77 3.6 5.28-1.64-.36-2.74-3.34-3.6-5.28z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M391.08 615.33c.41.31.95.49.96 1.2-.75.03-.82-.62-.96-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M513.48 620.61c.69.32-.18 1.06-.24 1.44-.68-.32.19-1.07.24-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M427.32 621.09c.28-.04.43.05.48.24-.4 7.75.88 16.02-.96 22.56.57-7.02.53-15.91.48-22.8z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M425.4 636.69c.71 1.1.29 1.96.24 3.12-.55-.57-.08-2.16-.24-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M429 639.33c.76 1.35.26 3.71.24 5.52-.76-.76.06-3.68-.24-5.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M443.4 655.41c1.55.25 4.1-.13 4.8.48-1.47-.29-4.12.6-4.8-.48z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.44 657.09v1.68h-4.56c-.68-2.77 2.83-1.33 4.56-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M448.92 659.73c-.87.88-4.26.53-5.52.24.85-.95 4.27-.48 5.52-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M411.48 452.85c-.6.68-1.96.59-2.88.96-.01-.35 1.8-.92 2.88-.96z"
							clipRule="evenodd"
						></path>
						<path
							fill={`#${color}`}
							d="M399 643.17c1.64-.03 3.52 1.76 5.52 2.16-18.61-9.59-33.97-26.05-34.8-53.76-.47-15.94 5.85-29.67 12.96-38.64 8.37-10.56 23.27-16.93 20.88-35.52-.81-6.35-4.68-12.53-7.2-19.44-4.46-12.28-5.4-27.48 1.92-36.24 4.04-4.83 10.58-8.99 19.92-8.88 5.5.06 9.17 1.8 12.96 4.08-.08 11.32-.52 21.33-.48 32.4-2.42 1.01-6.94-.65-8.4 1.44-1.76 2.52-.43 12.14-.48 16.56-.02 2.41-.35 5.49.96 6.48 2.32 1.73 6.52-.53 9.36.72-.11 8.04-.17 16.76-.48 23.28-3.22.22-7.6-.73-9.12 1.2-.6 3.19-.33 6.5-.24 10.8.08 3.72-.97 8.98 0 12.24 1.07 3.56 5.57.92 8.88 2.39.56.68.08 1.86 0 2.65-2.48.04-3.52.04-6 0-.85.98.73 4.4-1.2 4.31-1.95-.15-.43-3.24-1.2-4.08-4.68-1.47-4.58 5.97-3.36 9.61.88 2.61 3.02 2.93 4.08 3.84-.14 1.47-.43 3.54-.96 5.28.73.55 2.48.08 3.6.23.36-1.52-1.59-2.69-.96-5.27 13.26-.69 23.34-.55 37.2-.73.12 2.04.01 3.85-.72 5.04.92 1.08 2.47.53 3.6.48-.19-.77-1.2-3.78-.72-5.28.88-1.45 2.54-1.54 3.36-3.12 1.64-3.14.6-7.78-.24-10.31-.91-.21-1.92-.32-3.12-.24-1 .51-.03 3-.72 3.84-2.94.94-1.43-2.57-2.16-3.84-1.43-.42-2.57-.11-4.56-.24v-2.4c2.48-.92 6.37.67 9.12-.24 3.72-1.23 1.51-6 2.4-9.84 1.79 4.09 4.74 6.44 8.88 6 8.68-.93 7.23-14.05-.72-14.88-4.47-.47-6.64 2.25-7.92 5.52-1.45-3.03.61-9.58-1.2-12.24-2.3-1.38-6.91-.45-10.32-.72.09-8.17-.29-16.92 0-23.52 4.02-.56 9.24 1.33 10.56-1.44 1.99-4.17-1.01-16.18 0-21.6-.79-2.17-4.28-1.64-7.2-1.68-.35-2.78-.2-7.46-.24-11.76 2.3.97 3.56 2.66 5.52 3.6 12.04 5.7 25.83-2.28 27.6-13.44 9.45 9.97.75 27.96-4.08 38.64-3.59 7.95-3.69 18.17.96 25.92 1.69 2.8 4.24 4.98 6.48 7.44 11.01 12.01 21.7 23.93 23.76 45.12.86 8.76-.42 16.89-2.64 24-4.25 13.66-12.53 24.15-23.52 31.68-10.37 7.11-25.52 11.45-42.72 12.24-18.46.84-30.5-2.56-45.6-7.2.13.68 2.45 1.22 3.6 1.68-3.99-.09-7.85-2.39-10.8-4.32zm2.88-172.32c.73-1.05 2.37-3.43 1.68-4.32-.45 1.55-1.31 2.69-1.68 4.32zm-.72 5.52c-.11-1.75 1.44-4.27.48-5.28-.03 1.72-1.13 3.66-.48 5.28zm91.2 6.72c.11-.57.77-2.75-.24-2.88.16.88-.31 2.39.24 2.88zm-84.96 19.92c-2.66-6.14-5.26-12.34-5.76-20.64-.3-.02-.33-.31-.72-.24 1.17 7.95 2.49 15.76 6.48 20.88zm78 .48c4.01-4.56 5.86-11.27 6.96-18.72-.05-.27-.26-.38-.48-.48-.62 7.93-3.3 13.82-6.48 19.2zm-77.04 3.84c-2.88-5.76-6-13.36-7.68-21.12 1.1 7.54 3.89 15.47 7.68 21.12zm75.36-11.28c2.02-2.15 3.26-6.35 3.36-9.6-.83 3.48-1.87 6.76-3.36 9.6zm-.48 4.8c.49-.72 1.1-2.58 1.68-2.4.03 1.03-1.77 2.1-.72 2.64 1.98-3.79 3.81-7.71 4.8-12.48-1.37 1.02-.78 4.01-2.16 5.04.07-2.12 2-4.85.96-6.48-.34 5.57-3.48 9.63-4.56 13.68zm1.68 1.2c1.05-2.01 3.58-5.05 2.88-7.2-.29 2.91-2.68 4.99-2.88 7.2zm-75.36 2.88c-.33-.69.66-1.22 0-1.44-.9.14-1.69-2.1-.96-3.12-.42-.45-.7.28-1.2-.24-.56-1.76-.96-3.68-1.92-5.04.74 3.9 2.25 7.03 4.08 9.84zm-6.96-5.28c.06-.86-.16-1.44-.72-1.68-.05.85.17 1.43.72 1.68zm8.64 30c3.46-12.18-4.63-21.27-8.64-29.76 3.49 9.69 11.05 16.63 8.64 29.76zm-5.76-19.2c-1.89-3.15-3.21-6.87-5.04-10.08 1.17 3.87 2.64 7.44 5.04 10.08zm74.16-4.32c.71.12 1.28-1.1.72-1.44-.23.49-.49.95-.72 1.44zm-65.04 22.8c-.59 4.56-2.71 8.39-3.84 12 6.16-8.49 5.83-26.24-.96-33.84 3 5.53 5.86 13.72 4.8 21.84zm61.92-7.68c-.39 6.9 1.51 12.4 3.6 16.56 1 1.96 1.9 4.3 3.6 5.04-3.38-4.62-6.42-10.85-6.47-18 .82 1.26.18 3.98 1.43 4.8-1.75-6.94-.42-14.9 2.16-20.64-2.09 2.06-2.25 6.06-3.36 9.12.28-4.21 1.45-7.52 3.12-10.32-.02-.3-.07-.57-.47-.48-1.88 4.08-3.31 8.63-3.61 13.92zm-1.92 11.28c.58 2.23 1.54 5.22 2.88 6-4.57-7.31-4.59-22.39-.72-30.48.26-.02.19-.31-.24-.24-3.13 6.59-3.94 16.89-1.92 24.72zm4.8 8.16c-4.58-7.33-6.56-23.06-1.68-31.68.02-.42-.18-.62-.48-.72-4.31 9.08-3.63 25.51 2.16 32.4zm3.84 3.84c-6.46-7.66-9.96-24.13-4.56-35.52-.05-.19-.2-.28-.48-.24-5.02 11.29-2.36 29.14 5.04 35.76zm-74.4.96c7.85-6.7 9.85-25.07 4.32-35.76-.28.03-.68-.04-.72.24 6.25 10.6 3.36 27.41-3.6 35.52zm8.4-17.76c.6-6.15-.31-12.78-2.88-16.56 2.04 4.33 2.59 11.25 2.88 16.56zm-3.84 1.44c-.83 5.74-3.73 10.37-5.52 14.16 5.75-6.06 8.79-22.71 3.36-30.72 1.99 5.02 2.99 10.87 2.16 16.56zm59.28-12.48c.05-1.32 1.18-2.82.48-4.08-.12 1.23-1.12 2.87-.48 4.08zm11.52 23.04c-2.6-4.91-5.38-11.83-4.8-19.44.17-2.17.84-4.3 1.2-6.48-.05-.19-.2-.28-.48-.24-2.59 9.13-.69 20.78 4.08 26.16zm1.2-3.6c-2.55-4.77-4.2-13.04-2.4-19.92-.05-.19-.2-.28-.48-.24-1.47 7.03-.61 15.93 2.88 20.16zm-79.44.24c3.36-4.28 4.38-14.76 1.44-19.92 2.18 6.19 1.12 15.02-1.44 19.92zm12.72-9.12c1.03-2.15.63-8.04-.48-10.32.23 2.99.86 7.02.48 10.32zm53.52.72c.27 1.96.07 4.33 1.44 5.04-1.8-4.22-1.15-11.7-1.44-16.08-.62 3.88-.44 7.68 0 11.04zm-3.36.48c-.66-3.25.19-7.45-.48-10.08-.23 3.07-.79 8.32.48 10.08zm-47.04-1.68c-.22-2.49.51-5.95-.48-7.68.21 1.58-.55 6.13.48 7.68zm-4.8 10.32c.83-2.57 2.41-6.83 1.68-9.36-.14 3.38-1.75 6.56-1.68 9.36zm-10.32 4.56c2.02-3.27 4.63-7.22 4.56-11.76-.75 4.53-3.4 8.43-4.56 11.76zm74.4-4.8c.02-.73-.22-1.22-.72-1.44-.44.47.21 1.2.72 1.44zM411 545.01c.64-1.71 3.31-3.86 2.4-5.52-.31 2.06-3.02 4.1-2.4 5.52zm-5.76 2.88c.73-.15 1.23-.54 1.2-1.44-.8.07-.95.8-1.2 1.44zm-13.2 9.36c-.75.92-2.08 1.85-1.92 3.12 1.36-1.78 3.16-3.59 4.8-5.52 1.69-1.98 4.09-3.87 5.04-5.52.22-.38.42-.33-.24-.72-2.62 2.67-5.37 5.82-7.68 8.64zm102-6.24c-.8-.73-1.85-2.33-3.12-1.92 8.72 6.48 14.69 15.71 18.48 27.12-2.46-10.53-8.6-19.1-15.36-25.2zm15.6 11.04c-2.6-5.16-5.85-9.67-10.08-13.2 3.78 3.98 6.92 8.6 10.08 13.2zm0 31.92c1.1-16.76-7.05-32.57-16.8-41.04-1.18-1.03-2.79-2.65-3.84-2.4 13.29 9.05 23.15 28.41 19.44 50.4-.03-.6.13-1 .48-1.2.14.42-.29 1.41.24 1.44 4.95-23.86-5.93-42.36-18.96-51.84 0-.25-.42-.31-.48 0 11.96 9.24 21.74 23.96 19.92 44.64zm-115.44-43.2c.63.06 1.04-.09.96-.72-.41-.44-.94.07-.96.72zm8.88.48c.22-.43.58-.7.72-1.2-.62-.12-1.36.85-.72 1.2zm.72.48c.08-.57.84-.45.72-1.2-.62-.12-1.36.85-.72 1.2zm95.52 2.16c-.77-1.23-1.49-2.51-2.88-3.12.63 1.37 1.86 2.14 2.88 3.12zm8.16 27.6c.87 4.61.56 9.86.72 14.88 2.36-19.68-7.16-37.21-19.92-45.36 8.96 7.21 16.67 17.04 19.2 30.48zM401.4 552.93c.57-.32 1.19-.58 1.2-1.44-.8.07-.95.8-1.2 1.44zm-3.6 4.08c1.04-.65 2.66-1.98 2.4-3.12-.73 1.1-2.07 1.6-2.4 3.12zm-10.8 1.68c1.56-1.24 2.7-2.9 3.84-4.56-1.68 1.11-2.83 2.76-3.84 4.56zm-4.08 27.6c-.41 6.18.79 13.25 2.4 18 .54 1.58 1.09 3.58 2.4 4.32-2.96-6.07-4.75-14-4.32-21.6.83-14.49 7.9-24.93 15.36-32.4.06-.31.38-.49-.24-.48-7.33 7.49-14.64 17.87-15.6 32.16zm117.12-20.4c-2.63-4.49-5.68-8.56-9.84-11.52 3.6 3.52 6.7 7.54 9.84 11.52zm-99.36-9.84c.27-.37.78-.5.72-1.2-.62-.12-1.36.85-.72 1.2zm101.76 1.68c-.31-.65-.43-1.49-1.2-1.68.11.85.61 1.31 1.2 1.68zm-8.88 2.16c-1.47-.61-2.19-3.24-3.84-2.88 1.48.52 2.63 3.67 3.84 2.88zm-94.8-1.92c.61-.03.93-.35.96-.96-.61.03-.93.35-.96.96zm-2.88 1.68c.08-.57.84-.45.72-1.2-.62-.12-1.36.85-.72 1.2zm-18 20.4c2.28-7.81 4.93-15.24 9.12-21.12-4.66 5.41-7.49 12.66-9.12 21.12zm18.72-19.2c.15-.65 1.01-.6.96-1.44-.64.01-1.61.92-.96 1.44zm-12 22.56c2.18-8.71 5.12-16.65 10.08-22.56-.05-.19-.2-.28-.48-.24-4.56 6.24-8.41 13.18-9.6 22.8zm5.52-20.88c.76.03.83-.62.96-1.2-.75-.04-.82.61-.96 1.2zm-2.4.48c.62.21 1.18-1.36.24-1.2.1.58-.43.52-.24 1.2zm108 0c-.08-.56-.24-1.04-.72-1.2-.36.35-.02 1.24.72 1.2zm-10.56 10.08c2.23 7.29 15.03 6.39 14.64-2.88-.11-2.87-1.77-3.71-2.88-6-6.79-3.51-13.86 1.97-11.76 8.88zm-97.44 13.2c.69-7.69 3.85-16.48 8.4-21.84-.02-.3-.07-.57-.48-.48-4.02 5.89-7.99 13.12-7.92 22.32zm2.4 22.8c.8.01.06-1.28 0-1.44-.71-2.18-1.99-4.29-2.64-6.48-3.76-12.85.38-28.04 5.76-36.24-8.52 8.97-10.16 32.22-3.12 44.16zm116.64-22.08c-.46-8.18-2.88-14.4-6-19.92 2.3 5.38 4.87 12.56 6 19.92zm6-2.88c.01-6.1-2.35-11.89-4.32-16.8-.28-.04-.54-.43-.72 0 2.62 4.66 3.89 10.67 5.04 16.8zm-124.32 29.28c-6.96-10.73-8.46-32.01-1.92-44.16-.05-.19-.2-.28-.48-.24-6.27 12.12-5.44 34.69 2.4 44.4zm116.4-26.88c-.22-5.15-1.56-11.23-4.08-14.88 2.05 4.61 3.07 9.75 4.08 14.88zM391.8 575.49c.08-.33 1.09-1.45 0-1.44.07.42-.67 1.19 0 1.44zm-10.8 3.6c.59.14 1.17-1.58.24-1.44.18.73-.24.87-.24 1.44zm6.48 36.24c-5.73-9.19-8.45-22.98-6.48-36-2.94 13.06.36 27.35 6.48 36zm-6.96-7.92c-2.85-7.58-3.67-17.75-2.64-26.88-1.91 8.83-.78 19.68 2.64 26.88zm8.88-20.88c-.13-1.17.97-3.42 0-3.84.09 1.21-.89 3.34 0 3.84zm85.2 5.52c.79 8.52 13.26 8.55 14.4.96.87-5.78-3.49-9.61-8.4-8.88-4.16.61-6.39 3.63-6 7.92zm-90.48-3.36c.76.31.76-1.99 0-1.68v1.68zm4.32 19.92c1.83 3.88 4.13 8.06 6.96 10.08-5.18-6.26-9.63-14.53-10.32-24.48-.3-.02-.33-.31-.72-.24.55 5.53 2.09 10.4 4.08 14.64zm122.4-12.24c.28-.31.49-1.9 0-2.16-.27.3-.48 1.89 0 2.16zm-137.04 2.4c-.24-.96.15-2.55-.72-2.88.02 1.18-.03 2.43.72 2.88zm108.72 18.24c11.87 5.06 14.51-16.79 1.44-14.16-6.52 1.31-7.7 11.48-1.44 14.16zm-88.8-5.52c-.2-1.4-.93-2.27-1.68-3.12.42 1.18.72 2.48 1.68 3.12zm.72 3.6c-1.45-1.51-2.12-3.8-3.6-5.28.86 1.94 1.96 4.92 3.6 5.28zm-2.4 1.44c-.01-.71-.55-.9-.96-1.2.14.58.21 1.23.96 1.2zm34.8 27.36c1.84-6.54.56-14.81.96-22.56-.05-.19-.2-.28-.48-.24.05 6.89.09 15.78-.48 22.8zm-1.2-4.08c.05-1.16.47-2.01-.24-3.12.16.96-.31 2.55.24 3.12zm3.6 5.04c.02-1.81.52-4.17-.24-5.52.3 1.84-.52 4.76.24 5.52z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M493.56 466.77c-1.98 8.86-9.46 16.73-20.16 16.08-5.18-.32-10.6-3.09-12.72-6.72 3.49 2.9 6.77 5.52 12.24 6 11.21.97 18.79-7.24 20.16-16.8 1.91 1.05 2.35 3.57 3.36 5.52-1.22-1.1-1.19-3.45-2.88-4.08z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M422.76 491.25c2.12-1.26 6.22-1.12 9.6-.72-.29 1.12.16 1.56-.24 2.4-1.31.05-2.88-.17-3.84.24-.42 1.44-.34 4.3 0 5.76-3.37-.14-3.06 3.88 0 3.84v7.2c1.22.74 2.49-.07 3.84.48-.09.95.22 2.3-.24 2.88-3.83-.14-6.9.4-9.36-.96-.22-5.62-.7-15.13.24-21.12zm3.6 1.68c.14-3.62-6.22-1.05-2.4 1.68 1.67.06 2.36-.58 2.4-1.68zm-3.6 18c.07.98.83 1.93 2.64 1.68 3.29-2.85-2.87-5.35-2.64-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M387 558.93c-4.19 5.88-6.84 13.31-9.12 21.12 1.63-8.46 4.46-15.71 9.12-21.12z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M393.24 564.93c-5.38 8.2-9.52 23.39-5.76 36.24.65 2.19 1.92 4.3 2.64 6.48.06.16.8 1.45 0 1.44-7.04-11.94-5.4-35.19 3.12-44.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M377.88 580.53c-1.03 9.13-.21 19.3 2.64 26.88-3.42-7.2-4.55-18.05-2.64-26.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M416.52 649.89c2.37-.2 5.28 1.12 7.92 1.44-2.63.47-5.24-1.16-7.92-1.44z"
							clipRule="evenodd"
						></path>
						<path
							fill="#a06400"
							d="M432.25 513.7c-.72 1.9-.16 4.11-.4 6.13-.04 5.98-.46 11.99-.22 17.96.94 1.42 3.01.22 4.43.45 1.93.46 2.02-1.22 1.86-2.58-.03-7.03.4-14.09-.02-21.11-.62-1.63-2.81-.91-4.15-1.11-.54-.04-1.02 0-1.5.26z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M440.16 513.5c-1.29-.1-3.41-.05-3 1.82 0 7.52-.24 15.09-.07 22.58.77 1.47 2.93.06 4.3.34 1.93.46 2.01-1.21 1.86-2.57.01-7.11.57-14.25-.04-21.34-.38-1.41-2.02-.74-3.05-.83z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M444.79 513.37c-1.33-.1-2.7.69-2.28 2.2.04 7.43-.28 14.88.03 22.3.97 1.39 2.9.08 4.31.34 2.1-.04 1.26-2.22 1.47-3.56-.06-6.79.12-13.63-.09-20.39-.43-1.21-2.39-.79-3.44-.89z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M449.58 513.42c-1.05-.14-2.23.47-2.06 1.68-.2 7.51-.38 15.06-.02 22.56.76 1.65 2.88.38 4.28.64 1.78-.56.83-2.52 1.1-3.91-.11-6.71.07-13.44-.34-20.12-.54-1.11-1.97-.78-2.96-.85z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M454.33 513.36c-1.24-.05-2.99.38-2.57 1.99.15 7.38-.11 14.78.39 22.14.32 1.98 2.71.17 4.1.43 1.77-.56.88-2.14 1.16-3.53-.06-6.7.13-13.45-.09-20.13-.37-1.13-2.03-.8-2.99-.9z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M431.24 563.45c-.56 1.16-.45 2.71.01 3.91 1.22 1.04 3.07.44 4.55.6 1.73.25 2.33-1.71 1.99-3.08.12-1.87-1.83-1.81-3.16-1.69-1.12.1-2.34-.25-3.39.26z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M439.59 563.2c-1.14-.11-2.69.2-2.66 1.66-.23 1.24-.11 3.21 1.59 3.07 1.5-.08 3.36.42 4.58-.65.63-1.17.26-2.73-.26-3.85-1-.45-2.17-.17-3.25-.23z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M442.7 563.41c-.58 1.17-.42 2.77-.02 4 1.58.63 3.49.25 5.16.22 1.34-.69.64-2.85.3-4.03-1.56-.54-3.37-.37-5-.34l-.24.08-.2.07z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M447.91 563.45c-.46 1.21-.79 3.36.38 4.17 1.45.12 3.09.31 4.5-.16.46-1.2.79-3.36-.38-4.16-1.42-.13-3.12-.31-4.5.15z"
							color="#000"
						></path>
						<path
							fill="#a06400"
							d="M452.53 563.45c-.51 1.18-.69 3.32.67 4.04 1.27.18 3 .64 3.99-.26.27-1.22.76-3.43-.68-4.03-1.31.11-2.76-.28-3.98.25z"
							color="#000"
						></path>
						<path fill="#380000" d="M433.36 185.02l-4.05 42.17-1.76 18.19-.38.12" color="#000"></path>
						<path
							fill="#ac7000"
							d="M436.76 240.62c-.71.36-1.45.79-2.04 1.3-.27 1.5.06 3.05.06 4.57.33 6.71.42 13.42.72 20.13.31.85 1.43.34 2.12.48.69-.14 1.86.37 2.12-.5-.37-4.99-.68-9.98-1.02-14.97-.26-3.57-.63-7.19-1.36-10.67-.11-.24-.33-.4-.6-.34z"
							color="#000"
						></path>
						<path
							fill="#ac7000"
							d="M438.24 224.63c-.91.82-1.34 2.11-1.53 3.3-.36 4.24.46 8.47.7 12.7.76 8.64 1.38 17.29 2.21 25.91.38.87 1.55.48 2.29.53.74.01.84-.79.71-1.37-.65-13.54-1.48-27.11-3.55-40.52-.05-.39-.43-.74-.83-.55z"
							color="#000"
						></path>
						<path
							fill="#ac7000"
							d="M445.81 256.29c-1.62.02-2.83 1.59-2.79 3.15-.01 2.32-.12 4.66.09 6.96.25.94 1.47.61 2.18.65.67-.01 1.74 0 1.72-.92.29-3.12.63-6.41-.48-9.41a.713.713 0 00-.72-.43z"
							color="#000"
						></path>
						<path
							fill="#ac7000"
							d="M451.74 224.1c-.85.26-.53 1.39-.72 2.05-.9 9.49-1.57 19.01-2.79 28.47-.32 3.3-.8 6.61-.89 9.92.05.99.57 2.21 1.64 2.41.82-.16.68-1.26.88-1.88 1.56-10.25 2.36-20.6 3.43-30.91.25-2.69.64-5.38.83-8.06-.41-.75-1.14-1.38-1.84-1.89-.16-.09-.36-.15-.54-.11z"
							color="#000"
						></path>
						<path
							fill="#ac7000"
							d="M452.4 240.45c-.46 3.13-.64 6.32-1 9.47-.5 5.45-1.16 10.88-1.66 16.32.26.98 1.49.64 2.24.72.69-.03 1.81.08 1.93-.85.33-4.03.51-8.08.85-12.12.25-3.8.65-7.61.81-11.4-.52-.85-1.42-1.48-2.2-2.12-.3-.21-.7-.33-.97-.02z"
							color="#000"
						></path>
						<path
							fillRule="evenodd"
							d="M441.72 191.73c.49-.32.13 2.26.24 3.12-.49.32-.13-2.26-.24-3.12z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M425.88 201.81c.22 1.68-.25 6.11-.72 8.64-4.87-.3-4.6-9.06.72-8.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429.72 204.69c-.88-.08-2.12.2-2.64-.24.26-.86 2.46-.47 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M435.72 204.21c1.77-.47 4.02 1.06 3.6 3.36-1.04 5.81-9.82-1.72-3.6-3.36zm0 3.84c.29.04.69-.04.72.24 4.41-1.77-3.09-4.68-.72-.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M429.96 205.89c-.11 1.42-2.44.47-3.12.24v-.72c.77-.41 2.65-.18 3.12.48z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M436.44 208.29c-.04-.28-.43-.2-.72-.24-2.37-4.44 5.13-1.53.72.24zm.72-.96c-.23-3.27-2.84 1.27 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M437.16 207.33c-2.84 1.27-.23-3.27 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M430.44 215.25c.35.06.56 1.97-.24 1.68-.19-.84.36-.93.24-1.68z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M424.44 217.17c.02 3.19-.45 6.11-.72 8.64-5.77.17-4.38-10.02.72-8.64z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M430.2 217.89c.48 1.62-.02 2.96-.24 4.8-.5-1.23.06-3.46.24-4.8z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M425.64 219.09c1.01.11 2.37-.12 2.64.72-1.05-.07-2.48.25-2.64-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M428.28 221.73c-1.18-.02-2.43.03-2.88-.72-.04-.28.06-.43.24-.48.42.01 3.2-.56 2.64 1.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M433.08 225.33c-.27-1.32-.61-1.32-.48-2.4.64-5.03 8.9-.23 4.56 2.88-1.22.87-2.73.18-4.08-.48zm.96-2.4c-.17 1.21.35 1.73.96 2.16 1.14-.23 1.91-.82 1.68-2.4-.83-.81-1.94-.34-2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M436.68 222.69c.23 1.58-.54 2.17-1.68 2.4-.61-.43-1.13-.95-.96-2.16.7-.58 1.81-1.05 2.64-.24zm-1.92 1.44c1.4.52 1.67-1.52.24-1.2-.2.28-.31.64-.24 1.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M435 222.93c1.43-.32 1.16 1.72-.24 1.2-.07-.56.04-.92.24-1.2z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M429.48 223.89c.59-.09.48 2.09-.24 2.16.01-.79.41-1.2.24-2.16z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M429.24 227.73c.2 2.43.02 6.57-.96 8.64.48-2.72.46-5.95.96-8.64z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M423 231.81c.32 2.57-.37 6.17-.72 8.88-5.69-.02-4.92-9.43.72-8.88z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M424.44 233.97c.9.14 2.54-.46 2.4.72-.89-.15-2.53.45-2.4-.72z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M426.84 236.13c-.63.46-2.23.27-2.64-.24.09-1.17 2.63-.79 2.64.24z"
							clipRule="evenodd"
						></path>
						<path
							fill="gray"
							fillRule="evenodd"
							d="M433.08 235.65c5.46-1.97 4.48 7.64-.48 5.04-1.91-1.01-1.48-4.34.48-5.04zm-.48 2.88c.87 1.91 3.96.56 2.64-1.68-.18-.06-.47-.01-.48-.24-1.51-.15-1.88.83-2.16 1.92z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M428.28 236.61c.59.76.27 4.08-.48 5.04.05-1.8.32-3.37.48-5.04z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M434.76 236.61c.01.23.3.18.48.24 1.32 2.24-1.77 3.59-2.64 1.68.28-1.09.65-2.07 2.16-1.92zm0 1.92c-.23-3.27-2.84 1.27 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M434.76 238.53c-2.84 1.27-.23-3.27 0 0z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M424.44 238.53c.6.28 1.87-.11 1.92.72-.85-.03-1.93.17-1.92-.72z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M443.64 181.17c1.44.83 2.61-.33 4.32 0 2.02.38 2.66 2.18 4.56 1.92 1.73-.24 1.45-1.37 2.88-2.4 1.44-.16 2 .56 2.88.96 1.48 7.12 1.28 14.62 2.4 21.84.54.5 1.16-.26 2.16 0 1.22-.32-.37-1.96.96-2.16 6.94-.67 7.5 10.35.96 10.56-1.03-.17-.4-2-.96-2.64-.63.25-1.47.28-2.4.24-.11 3.06.33 6.69.72 9.6h2.4c1.01-.33-.23-1.41.48-1.92 6.87-.9 8.04 10.28 1.44 10.56-1.24.12-.43-1.81-.96-2.4-.99-.03-1.5.41-2.64.24.15 3.29.29 5.51.72 8.16.83.17 2.28-.26 2.4 0 .95.06.07-1.69.72-1.92 6.77-.74 7.44 10.01 1.44 10.56-1.19.23-.4-1.52-.96-1.92-.93.26-2.23.16-3.12.48.19 3.17.74 5.98.72 9.36-1.52 4.07-7.06 3.78-8.16 7.92-.61 2.33 0 6.3 0 10.08 0 34.49 1.92 68.96 1.92 105.84 0 13.52.31 26.99.72 39.36.69 20.66.75 41.88.96 60.96 3.1 3.36 6.66 6.34 12 6.96 12.23 1.42 19.61-7.47 20.64-18 4.72 4.81 7.36 10.35 6.72 19.2-.43 6-2.9 11.68-4.8 17.04-2.59 7.32-6.38 11.8-5.76 21.12.46 6.82 3.78 11.87 8.16 16.32 13.18 13.37 27.15 28.4 25.92 56.4-.85 19.36-9.99 35.18-22.08 45.36-12.68 10.66-29.94 15.97-50.88 16.56-.35.68-.06 2.02-1.2 1.92.17 1.43 1.46 1.74.96 3.84-2.33-.15-5.26.3-7.2-.24.34-2.81.73-3.93-.24-5.52-18.38-.73-33.48-4.84-45.6-12.24-11.85-7.25-21.06-18.99-25.44-32.64-1.7-5.32-2.97-12.73-3.12-19.68-.38-18.5 7.64-33.54 17.28-43.2 1.64-1.64 3.52-3.28 5.28-5.04 6-6.01 12.46-14.21 11.04-25.68-.84-6.8-4.57-11.92-6.72-18-2.08-5.91-3.59-13.09-3.84-20.65-.45-13.76 7.94-21.71 18.72-25.92-.31-1.43.46-1.78.72-2.64-.69-.82-1.55-1.48-1.44-3.12 2-.54 5.29-1.31 6.72-.96.96 1.46-.39 2.41-.96 3.12.25 1.19 2.08.81 1.92 2.4 5.95-.1 10.12 1.56 13.92 3.6 1.15-55.25 2.03-117.88 2.88-173.76.12-7.32 1.07-14.83.48-21.6-.13-1.51-.7-3.19-1.44-4.32-1.34-2.04-4.34-2.21-6-4.08-2.41-2.72-.14-6.71-.48-11.04-2.17-.95-2.54.65-3.6 1.44-7.18.69-6.05-11.45.24-10.08 1.82.4.83 2.39 3.84 1.92.69-1.44.79-4.98.96-7.68-1.93-1.05-3.02-.02-3.84 1.2-6.14-.28-6.31-11.14.96-10.32 1.58-.09-.25 1.74.96 1.92.63.25 1.48.29 2.4.24 1.22-1.98.44-5.96 1.2-8.4-1.35-1.18-3.14-.17-3.6.96-6.69.38-6.12-11.34.96-10.08.7.54.1.98.24 2.16 1.26.16 1.33.22 2.88.24.52-3.22.95-6.47 1.44-11.28.35-3.31.07-11.23 2.88-11.52 1.84-.18 1.98 1.97 3.36 2.4 2.78.88 3.89-.72 6-1.91zm-9.84.24c-.05.34-.39.4-.48.72-.75 1.98-1.09 5.93-1.44 9.6-1.7 18.03-3.87 38.45-5.28 54.72-.22 2.62-.16 4.27 2.4 4.8-1.81-1.27-2.35-6.1-.96-8.4.08 2.94-.86 5.11.24 6.96.68 1.13 2.59 1.41 3.6 2.4 1.99 1.92 1.7 3.82 3.12 6.24.09-5.48-.45-10.42-.48-16.32-4.25-.24-5.05-6.71-1.2-7.44 1.49-.29 2.45.58 3.6.48-.2-2.68-.38-5.38-.72-7.92-5.56.12-5.44-8.08 0-7.2 1.3.21 1.05 1.15 2.64 1.44-.4-3.52-.55-7.29-.96-10.8-6.78.75-5.78-8.61-.24-7.2 2.51.63 3.3 5.26.96 6.96 1.47 15.89 2.28 32.44 4.32 47.76-.12-2.43 3.35-2.65 4.8-1.44 1.9-15.07 3.13-30.8 4.8-46.08-3.71-2.03-2.2-7.94 2.16-6.96 4.09.91 3.08 8.36-1.68 7.2-.37 3.14-.61 6.43-.96 9.6 5.34-4.96 10.08 6.15 2.4 6-.4 3.27-.75 6.6-1.2 9.84 5.09-4.35 9.39 6.08 2.64 6.24-.19 7.1-1.9 17.05-1.2 23.76 1.7-.4.97-2.65.96-3.6-.01-1.29-.22-2.61 0-3.84 1.05-5.79 6.67-6.16 6.24-12.24-1.31-18.9-3.6-39.44-4.8-57.36-.16-2.37.62-4.88-1.68-6.72-1.58.41-2.85 1.15-2.88 3.12-.79-.57.96-2.06-.96-1.92-1.37.46.42 4.09-.96 4.56-.24-1.35.78-4.27-.48-4.8-.87 5.34.52 11.57-.72 16.32-.23-5 .24-9.6.24-13.44 0-1.36.33-3.46-.96-4.08-.83 8.41 0 12.9-.72 22.8-.73-6.3.88-14.95-.48-23.28-1.36 8.07-.12 15.89-.96 28.08-.53-8.58.26-16.77 0-27.6-2.96 1.36-.39 7.62-1.68 10.56-.26-1.31-.05-3.03 0-5.04.05-1.96.56-4.72-.72-6-1.22 3.31.08 9.69-.72 12.72-.53-4.05.02-8.43-.24-12.24-2.62 1.95-.14 6.23-1.44 8.88-.39-2.4.66-5.83-.48-7.92-1.22 1.73.12 6.04-.72 8.16-.98-2.08.74-6.67-.72-7.68-1.58.02-.1 3.1-.96 3.84.26-1.39-.44-2.8 0-3.6-1.51-.25-2.17-1.35-3.6-1.68-1.09.9-1.23 2.76-1.92 4.08-.54-2.73 1.79-3.78 1.92-5.04h-1.44zm21.12.24c3.25 1.54 2.49 5.36 2.88 10.32 1.07 13.41 2.41 28.18 3.6 41.52.37 4.15 1.83 13.45.96 16.32-.45 1.5-2.07 2.05-2.16 3.36 5-1.05 3.57-6.22 3.12-11.28-1.05-11.96-2.44-22.21-3.36-34.32-.7-9.25-1.1-18.44-2.88-25.92-.74-.01-1.56-.57-2.16 0zm-29.76 28.8c.47-2.53.94-6.96.72-8.64-5.32-.42-5.59 8.34-.72 8.64zm39.6.48c5.19-.3 4.94-9.57-.96-8.88.38 2.9.39 6.17.96 8.88zm-37.68-6.48c.52.44 1.76.16 2.64.24-.18-.71-2.38-1.1-2.64-.24zm12.24 3.12c.42-2.3-1.83-3.83-3.6-3.36-6.22 1.64 2.56 9.17 3.6 3.36zm11.52-.48c-.02 2.88 3.52 3.51 4.98 1.79.62-.73.86-1.88.3-3.47-1.95-2.18-5.26-.87-5.28 1.68zm-24-1.68v.72c.68.23 3.01 1.18 3.12-.24-.47-.66-2.35-.89-3.12-.48zm34.08.48c.42.79 1.84.19 2.64 0 .14-1.19-2.39-.62-2.64 0zm-37.2 19.92c.27-2.53.74-5.45.72-8.64-5.1-1.38-6.49 8.81-.72 8.64zm42.48.72c5.36-.25 4.58-8.95-.48-8.88-.46 2.64.6 5.79.48 8.88zm-37.92-6.72c-.27-.84-1.63-.61-2.64-.72.16.97 1.59.65 2.64.72zm34.08.24c-.05 1.25 2.67.68 2.64-.24-.69-.27-1.73.05-2.64.24zm-6.96 5.52c3.33-.24 3.56-7.06-1.44-5.28-3.79 1.35-.61 5.42 1.44 5.28zm-29.76-5.04c-.18.05-.28.2-.24.48.45.75 1.7.7 2.88.72.56-1.76-2.22-1.19-2.64-1.2zm11.52 5.28c4.34-3.11-3.92-7.91-4.56-2.88-.13 1.08.21 1.08.48 2.4 1.35.66 2.86 1.35 4.08.48zm14.4-1.2c-.55 7.03-1.25 14.61-1.92 21.84-.47 5.13-1.34 10.04-1.68 15.36-.08 1.34-.81 4.19 1.2 4.8 2.15-13.03 2.87-26.73 4.56-40.56-.8-.32-1.33-1.9-2.16-1.44zm-13.92 12.96c.71 8.37 1.57 19.22 2.4 29.04h2.16c-.56-13.69-1.59-28.54-3.6-41.76-2.6 2.47-1.38 7.73-.96 12.72zm-15.36 3.12c.35-2.71 1.04-6.31.72-8.88-5.64-.55-6.41 8.86-.72 8.88zm45.84.72c4.76-.54 4.62-9.34-.96-8.88.14 3.14.27 6.29.96 8.88zm-41.28-6.72c.14-1.18-1.5-.58-2.4-.72-.13 1.17 1.51.57 2.4.72zm36.72.48c.54.24 2.34.03 3.12-.24-.02-1.27-3.06-.71-3.12.24zm-39.36.72c.41.51 2.01.7 2.64.24-.01-1.03-2.55-1.41-2.64-.24zm8.4 4.8c4.96 2.6 5.94-7.01.48-5.04-1.96.7-2.39 4.03-.48 5.04zm30.96-3.6c.93.27 3.13.42 3.36-.72-.46-.81-3.8-.93-3.36.72zm-6.96 4.56c3.03-.4 3.13-7.04-1.68-5.28-3.58 1.3-.73 5.59 1.68 5.28zm-30.24-2.4c-.05-.83-1.32-.44-1.92-.72-.01.89 1.07.69 1.92.72zm23.76 27.12c1.22.27 2.3.27 3.36 0 .32-7.29 1.15-15.45 1.68-23.76-.88-.56-1.33-1.55-2.4-1.92-.92 9.21-1.63 17.41-2.64 25.68zm-13.2-25.44c-.58.45-1.16.91-1.92 1.2.64 8.37.48 16.13.96 24.48 1 .24 1.89-.13 3.36 0-.91-9-.7-17.25-2.4-25.68zm6.48 25.44c.62.38 2.51.38 3.12 0 .39-2.8.58-7.44-.48-9.6-4.11-.03-2 6.15-2.64 9.6zm-8.88.24c1.5-1.06.6-5.41.24-6.96-.22 1.73-.28 4.32-.24 6.96zm12.96 1.2c.21.49 1.67.25 1.92 0 .18-1.16-1.94-.79-1.92 0zm2.64-.48c-.05 1.25 2.7.71 3.36.48-.25-1.56-2.1-.13-3.36-.48zm4.32 0c-.24.8.75.37 1.2.48.05-.72-.85-.85-1.2-.48zm-18.48.24c-.01.33.12.52.24.72 1.38-.22 2.1-.04 3.12-.24.06-1.26-2.69-.72-3.36-.48zm4.08 0c-.01 1.08 2.35.91 2.4 0-.33-.47-2.03-.3-2.4 0zm3.12.24c.59.22 3.17.7 3.36-.24-.59-.35-3.11-.57-3.36.24zm4.32.96c-.59 5.55.01 10.71 0 15.12.89-.08 2.13.2 2.64-.24-.38-3.63.05-9.68-.48-14.88-.66-.17-1.41-.31-2.16 0zm2.88.24c-.09 5.03.4 10.56.24 14.88 1.1-.11 2.65.24 3.36-.24.11-5.53-.27-10.58-.24-14.88-1.37-.31-2.49-.33-3.36.24zm4.08.24v7.92c0 2.34-.87 6.35 1.2 6.72.52-6.09.11-9.89-.24-15.36h-.72c-.01.3-.3.33-.24.72zm-18.48-.24c-.02 5.01.13 10.21-.24 14.88.84.29 2.79.44 3.6 0-.12-6.1.26-10.83 0-15.12-1.09.1-2.64-.25-3.36.24zm4.08 0c.08 5.7-.08 11.24-.24 14.88.49.37 2.15.37 2.64 0 .31-4.47-.03-8.36 0-15.12-.81.06-1.94-.19-2.4.24zm3.12 14.88h3.6c.11-4.47-.02-9.69 0-15.12h-3.6c-.16 6.34-.04 8.94 0 15.12zm-8.88-3.36c-.02 1.29-.62 3.12.48 3.6.72-3.35.65-6.77.72-9.6.05-1.81.44-3.99-.72-5.52-.7 2.48-.4 7.55-.48 11.52zm-.24 4.32c-.16.83.84.86 1.2.48.17-.83-.84-.86-1.2-.48zm1.92 0v.72c1.1-.11 2.65.24 3.36-.24.06-1.26-2.69-.72-3.36-.48zm6.48 0c-.33-.55-1.67-.09-2.4-.24-.52 1.38 2.62 1.35 2.4.24zm.72.24c.9.53 2.81.63 3.84-.24-.73-.23-3.5-.7-3.84.24zm4.32 0c.41.55 1.84.09 2.64.24.3-1.05-2.63-1.06-2.64-.24zm3.12 0c.62.28 3.45.74 3.36-.48-1.01.26-3.12-.57-3.36.48zm5.28-.24c.04-.52-.85-.11-1.2-.24-.35.76 1.38 1.15 1.2.24zm-21.36 13.92c1.42-2.86.39-7.76.72-12.48-.3-.02-.33-.31-.72-.24-.76 3.16-.82 9.56 0 12.72zm1.44-12.48c-.55 3.68-.08 8.39-.24 12.48h3.36c.34-2.82.21-8.05.24-12.48-.83-.39-2.69.1-3.36 0zm3.84 0v12.48c.95-.09 2.3.22 2.88-.24-.61-3.76.11-9.5-.24-12.24-.49-.37-2.15-.37-2.64 0zm3.36 0c.03 3.95-.03 9.07 0 12.24.88.44 2.94.3 3.84 0v-12.24c-.81-.39-3.02-.39-3.84 0zm4.32-.24v12.48c.64.25 1.48.28 2.4.24.56-3.69.09-8.4.24-12.48-.51-.45-1.75-.16-2.64-.24zm3.36 12.48c1.24.32 1.85.06 3.36 0-.34-3.9-.23-8.25-.24-12.48h-3.36c.03 4.83-.05 9.61.24 12.48zm3.84 0h1.44c.02-4.49-.12-9.11-.24-12.48h-1.2c-.35 3.45.14 6.97 0 12.48zm-14.88 1.44c.32.3 2.7.63 2.64-.24-.79-.33-2.3-.76-2.64.24zm3.36 0c.74.33 3.47.59 3.84-.24-.45-.71-3.08-.68-3.84.24zm4.32-.48c-.29 1.04 2.64 1.05 2.64.24-.12-.8-2.16-.55-2.64-.24zm3.36 0c-.12 1.12 3.49 1.12 3.36 0-.67-.38-2.68-.38-3.36 0zm3.84 0c-.21 1.1 1.9.96 1.44-.24-.59-.03-1.15-.04-1.44.24zm-19.92.96c.08-.33.35-.46.24-.96h-.96c-.06.62.09 1.03.72.96zm.96-.48c.43.5 2.66.62 3.36-.24-.53-.29-3.21-.66-3.36.24zm18.96 1.44c-.07 2.01.18 3.75.24 6 .06 2.12-.91 5.97 1.2 6.24.62-4.25.03-9.58 0-12.72-.68.2-.62-.34-1.2-.24-.01.3-.3.33-.24.72zm-20.64.24c-.16 1.42-.21 3-.24 5.04-.03 2.17-.53 5.66.72 7.2 1.04-2.66.22-8.57.48-12.72-.3-.02-.33-.31-.72-.24-.01.3-.3.33-.24.72zm1.68-.48c-.31 3.24-.23 8.21-.24 12.48.75.38 2.86.38 3.6 0v-12.72c-1.09.1-2.64-.25-3.36.24zm4.08 0c.13 3.76-.33 8.66.24 12.72h2.16c.81-4.01-.16-7.99.48-12.72-.55-.38-2.33-.38-2.88 0zm3.12 5.04c1.18.21 1.13-.8 2.4-.48 1.3.42 1.57 2.7.24 3.36-1.17.21-1.59-.33-2.4-.48-.09 1.2-.03 3.71 0 5.04 2.06-.01 2.47.33 3.84 0v-12.48c-.86-.5-2.59-.13-3.84-.24-.3 1.04.25 3.55-.24 5.28zm4.56-5.04c.1 4.14-.22 9.45.24 12.48h2.64c-.16-4.4-.03-7-.24-12.72-.88.08-2.12-.21-2.64.24zm3.36-.24v12.72h3.36c.03-3.24-.02-8.45 0-12.48-.71-.49-2.26-.14-3.36-.24zm-7.2 7.2c.39.36 1.77.36 2.16 0v-1.44c-.88-.85-2.48-.28-2.16 1.44zm-8.16 6.96c.26.47 3.15.55 3.6-.24-.66-.67-2.36-.56-3.6.24zm4.32-.48v.72c.8-.24 2.61.53 2.64-.48-.12-.8-2.16-.55-2.64-.24zm3.36.48c.79.21 3.79.81 3.84-.48-.78-.22-3.79-.82-3.84.48zm4.56-.48c-.23 1.09 2.88 1.09 2.64 0-.49-.37-2.15-.37-2.64 0zm3.12 0c.03.29.08.57.48.48.93.26 2.79.56 2.88-.48-.61-.45-2.72-.34-3.36 0zm4.08 0c-.05.91 1.5.91 1.44 0-.1-.54-1.27-.19-1.44 0zm-21.12.24c-.24.72.54.42.96.48v-.72c-.41-.02-.74.05-.96.24zm9.36 1.2c-.09 3.05.05 6.04 0 9.6.82.38 3.03.38 3.84 0v-9.6c-1.24-.21-2.15.09-3.84 0zm4.56 0c-.39 3.6.16 5.53 0 9.6.96.37 1.85.23 2.64 0v-9.6c-1.19-.19-1.27 0-2.64 0zm3.36 0c-.56 2.72-.08 6.48-.24 9.6.85.07 2.76.07 3.6 0 .09-3.31-.13-6.97 0-9.6-1.13-.44-2.55-.21-3.36 0zm4.08-.24c-.01.3-.3.33-.24.72.55 2.64-1.15 8.1.96 9.12 1.26-.58.72-2.88.72-4.56 0-1.89.18-4-.24-5.28h-1.2zm-20.88 10.08c1.01-2.31.31-7.49.48-9.84h-.72c-.18 2.75-.79 8.17.24 9.84zm1.2 0c1.17-.11 2.81.25 3.6-.24v-9.6h-3.6c.02 3.73-.24 7.12 0 9.84zm4.08-.24c.62.37 2.51.37 3.12 0-.27-3.14.05-6.19-.24-9.6h-2.64c-.43 2.68-.04 6.26-.24 9.6zm3.6.96v.72c.79.21 3.79.81 3.84-.48-.87-.88-2.87-.23-3.84-.24zm4.56 0v.96c.95-.18 2.75.5 2.64-.72-.12-.8-2.16-.55-2.64-.24zm3.12.48c.39.6 3.6 1.01 3.6-.24-.3-.7-3.65-.95-3.6.24zm5.76-.72h-1.44a.802.802 0 001.44 0zm-23.04.48v.72c.69.04 1.31.03 1.2-.72-.31-.31-.88-.31-1.2 0zm1.68.48c.79.21 3.79.81 3.84-.48-.78-.22-3.79-.82-3.84.48zm7.2-.48c-.49-.55-1.99-.09-2.88-.24-.55 1.37 3.15 1.44 2.88.24zm5.28 1.44c-.12 3.56-.2 8.31 0 12 .49.37 2.15.37 2.64 0-.15-4.01.32-8.63-.24-12.24-1.06-.19-1.44.32-2.4.24zm3.36 0c-.24 4.53-.25 7.67 0 12 .68.38 2.69.38 3.36 0 .39-3.66-.19-7.1 0-12-1.16-.27-2.61-.19-3.36 0zm4.08-.24c-.01.3-.3.33-.24.72.27 2.39.23 4.94.24 7.44.01 1.61-.7 4.31 1.2 4.32 1.04-4.14.37-8.98 0-12.48h-1.2zm-21.6.96c-.06 2.55.09 5.95 0 8.4-.03 1.08-.88 3.18.72 3.12.19-4.34.77-9.5 0-12.24h-.72v.72zm1.44 11.52h3.84c-.07-5.02.14-7.81.24-12-.86-.5-2.59-.13-3.84-.24.13 4.66-.19 8.22-.24 12.24zm4.56-12.24c-.07 4 .2 8.36-.24 12 .65.47 2.1.14 3.12.24.03-4.5.12-8.27 0-12.24h-2.88zm3.36 5.76c.9-.32 2.82-1.7 4.08 0v-5.76h-3.84c-.13 1.86.29 4.29-.24 5.76zm1.44 1.68c1.04.07 1.94.01 1.92-.96-.01-.31-.3-.34-.24-.72-1.19-1-2.67.49-1.68 1.68zm-1.2 4.8c1.62-.03 3.09.06 3.84-.24v-4.56c-1.24 1.1-3.3.76-3.84-.72-.18 1.74-.04 3.18 0 5.52zm0 1.2c.75.25 3.82.78 3.84-.48-1.55-.09-2.67-.51-3.84.48zm4.56-.48c-.23 1.09 2.88 1.09 2.64 0-.49-.37-2.15-.37-2.64 0zm3.36 0c-.12 1.12 3.49 1.12 3.36 0-1.16-.4-2.39-.25-3.36 0zm4.08 0c-.07.83 1.26.88 1.68.48.23-.98-1.3-.84-1.68-.48zm-21.84.24c-.24.72.54.42.96.48v-.72c-.41-.02-.74.05-.96.24zm1.68.48h3.84c.03-1.14-3.86-1.14-3.84 0zm4.56-.24c.5.32 3.07.67 2.88-.48-.86.25-2.78-.55-2.88.48zm3.6.96c-.38 2.78-.16 6.22-.24 9.84.94.5 2.76.12 4.08.24.1-2.99-.02-7.3 0-10.08-.86-.18-3.08.01-3.84 0zm4.56 0c-.17 3.99.16 6.08-.24 9.84.55.37 2.33.37 2.88 0 .11-3.15.18-6.85-.24-10.08-.81.06-1.37.38-2.4.24zm3.36 0c.01 3.8-.08 6.23 0 9.84.85.34 3.34.52 3.84-.24-.56-2.72-.08-6.48-.24-9.6-1.18-.21-2.29-.02-3.6 0zm4.32-.24c-.01.3-.3.33-.24.72.03 1.72 0 3.9 0 5.76.01 1.49-.59 4.47 1.68 3.6.29-4.28.37-8.08-.24-10.08h-1.2zm-22.08.96c.57 3.92-1.27 8.53.72 9.36.43-3.58.33-7.79.24-10.08h-.72c-.01.3-.3.33-.24.72zm1.68-.48c-.1 4.18-.14 6.1-.24 9.6.99.69 2.78.29 4.08 0 .09-3.86-.2-6.7 0-9.6-.81-.39-3.02-.39-3.84 0zm4.32 0c.1 2.86-.05 6.15 0 9.6.62.38 2.51.38 3.12 0v-9.84c-1.02.09-2.47-.24-3.12.24zm3.84 10.56c-.02 1.13 3.87 1.13 3.84 0-1.46-.38-1.77.12-3.84 0zm4.56 0c.19 1.26 1.68.45 2.64.48-.3-1.15-1.63-.5-2.64-.48zm3.36.48c1.33-.14 3.11.86 3.6-.48-.93.06-2.68-.74-3.6.48zm4.32-.48c-.34.75 1.79.75 1.44 0-.24-.68-1.02.06-1.44 0zm-20.4.48c.61.28 3.38.66 3.6-.24-.6-.28-3.37-.67-3.6.24zm4.32 0c.6.29 2.9.59 3.12-.24-.59-.3-2.89-.59-3.12.24zm0 .96c.08 4.21-.15 7.47-.24 10.8.68.38 2.69.38 3.36 0-.15-3.53.32-7.67-.24-10.8-.58-.41-1.71.24-2.88 0zm3.84 0c-.55 3.13-.08 7.27-.24 10.8.94.5 2.76.12 4.08.24-.09-1.69.21-2.6 0-3.84-2.06 2.5-5.38-1.7-2.16-2.64 1.24-.28 1.42.5 2.16.72-.23-2 .45-4.53-.24-5.52-1.23.22-2.85.18-3.6.24zm4.56 0c-.15 3.14.09 6.59 0 10.8.55.37 2.33.37 2.88 0 .15-4.23-.27-7.93 0-10.56-.84-.65-2.17-.5-2.88-.24zm3.36 0c-.04 3.55.06 8.01 0 10.8.72.12 2.65.54 3.84 0-.01-4.08.08-8.23-.24-10.8-.74-.39-2.85-.39-3.6 0zm4.56-.24c-.33 2.23-.34 5.7-.24 8.16.05 1.14-.11 2.8.96 3.12 1.68-.75.74-3.02.72-4.56-.02-2.15.29-4.43-.24-6.72h-1.2zm-22.56.96c.04 2.26-.04 5.44 0 7.68.02.95-.77 2.67.72 2.64.35-3.98.57-7.15.24-11.04h-.72c-.01.3-.3.33-.24.72zm1.68-.48c.11 3.58-.15 7.95 0 10.8.66.15 2.9.08 3.84-.24v-10.8c-1.24.11-2.97-.26-3.84.24zm9.36 6.48c.8.78 1.91.81 2.4-.24.09-1.77-2.82-1.95-2.4.24zm-.96 5.04c.76.93 2.63.59 3.84.48-.46-1.51-2.38-.15-3.84-.48zm4.56.24c.89.6 1.3.18 2.64.24-.33-1.07-1.73-.66-2.64-.24zm3.6-.24c.78 1.05 2.22.39 3.6.48.01-1.28-2.87-.71-3.6-.48zm4.32 0c-.22.86.95.33 1.44.48.21-.91-1.07-.85-1.44-.48zm-20.88.48c1.07 0 3.32.87 3.6-.48-1.15.2-3.2-.48-3.6.48zm7.44-.48h-2.88c.26.64 2.91 1.27 2.88 0zm-8.88 10.08c1.52-1.6.36-5.89.72-8.64-.3-.02-.33-.31-.72-.24-.76 1.89-.82 6.99 0 8.88zm1.44-8.64c-.39 2.19-.17 5.51-.24 8.64 1.21.05 2.02.12 3.6.24.73-1.79.4-5.76.48-8.88-1.23-.47-3-.21-3.84 0zm4.32 0v8.64c.68.38 2.69.38 3.36 0 .09-3.21-.15-5.96 0-8.64-.67-.38-2.68-.38-3.36 0zm3.84 0v8.64c.89.38 3.2.38 4.08 0 .27-2.51-.13-5.34 0-8.88-1.32.12-3.14-.27-4.08.24zm4.8 8.64c.58.46 1.93.15 2.88.24.09-2.12-.06-6 0-8.88-.58-.46-1.93-.15-2.88-.24-.14 1.94.09 5.66 0 8.88zm3.6-8.88c-.37 3.21-.01 5.91 0 9.12h3.84c-.09-3.41.28-6.92-.48-9.12h-3.36zm4.32.72c.75 2.61-1.71 8.43 1.68 8.4.04-2.08.21-6.22-.24-9.12h-1.44c-.03.28-.42.54 0 .72zm-22.8 9.84h.96c.07-.63-.08-1.03-.72-.96-.07.32-.34.46-.24.96zm1.68-.72v.72c.79.21 3.79.81 3.84-.48-.4-.87-3.05-.53-3.84-.24zm4.56.96c1.1-.11 2.65.24 3.36-.24-.05-1.28-3.69-1.41-3.36.24zm3.84-.24c.81.23 3.68.7 4.08-.24-.65-.87-3.82-1.03-4.08.24zm7.68-.48c-.49-.55-1.99-.09-2.88-.24-.49 1.44 3.06 1.35 2.88.24zm.72.72c1.17-.28 3.46.58 3.84-.48-.38-1.06-2.67-.21-3.84-.48v.96zm4.32-.72c-.22 1.1 2.17 1.01 1.68-.24-.63 0-1.37-.09-1.68.24zm-20.88 1.44c-.42 3.06-.39 5.11-.48 8.4.94.5 2.76.12 4.08.24-.29-3.57.62-6.67-.24-8.88-1.62.23-2.11-.16-3.36.24zm-1.68 8.64c1.29-.33.72-2.6.72-4.08.01-1.81.18-3.62 0-4.56h-.96c.38 3.69-.84 6.61.24 8.64zm6 0c1.33 0 1.92.5 3.36 0v-8.4c-.71-.48-2.26-.14-3.36-.24.14 3.68-.33 6.06 0 8.64zm3.84-8.4v8.4c.97.31 3.14.44 4.08 0-.1-3.71.31-6.06 0-8.64-1.32.12-3.14-.27-4.08.24zm4.8 8.4c.73.26 2.43.45 3.12 0-.4-2.92.06-5.68-.24-8.64-5.02-1.19-2.11 5.57-2.88 8.64zm3.6 0c.82.38 3.03.38 3.84 0 .19-2.77.02-4.7 0-8.4-.86-.5-2.59-.13-3.84-.24v8.64zm4.56-8.64c-.35 1.15-.07 2.29 0 3.36.15 1.99-.77 5.3.96 5.52 1.46-1.52.6-6.58.48-8.88h-1.44zm-23.28 9.6c.61 2.06 1.9-1.02 0 0zm1.92.72c1.25-.12 2.98.26 3.84-.24-.12-1.4-2.6-.44-3.84-.72.03.65-.4.48 0 .96zm4.56 0c1.1-.11 2.65.24 3.36-.24-.45-1.22-4.03-.95-3.36.24zm3.84-.24c1.47.39 3.02.49 4.32 0-.21-1.12-4.11-1.12-4.32 0zm4.8-.48v.72c1.3-.3 2.8.93 3.12-.48-.22-.84-2.52-.54-3.12-.24zm3.6 0v.72c1.15 0 3.39.81 4.08-.48-1.03-.56-2.62-.62-4.08-.24zm4.56.48c.18.55 1.87.84 1.68-.24-.01-.73-1.96-.75-1.68.24zm-23.04 8.88c1.39-.75.7-2.88.72-4.08.04-1.46.4-2.82 0-3.84h-.96c.15 2.57-.3 5.74.24 7.92zm1.44-7.68v7.44c.74.13 2.84.53 4.08 0v-7.68c-1.32.12-3.14-.27-4.08.24zm4.56 0v7.44c.81.44 2.76.29 3.6 0v-7.44c-.74-.39-2.85-.39-3.6 0zm4.32 0c-.54 2.02-.09 5.02-.24 7.44.97.31 3.14.44 4.08 0 .26-1.77.22-5.22 0-7.44-.81-.39-3.02-.39-3.84 0zm4.56 7.44c.58.46 1.93.15 2.88.24.37-2.06.42-5.63 0-7.68-4.44-1.95-2.47 4.55-2.88 7.44zm3.84-7.44c-.56 2-.08 5.04-.24 7.44.94.5 2.76.12 4.08.24-.14-2.58.31-5.75-.24-7.92-1.94.11-2.54.01-3.6.24zm4.56 7.68h1.68c-.12-3.11.15-5.67-.24-7.68-3.18-1.12-1.19 6.53-1.44 7.68zm-23.52 1.44h.96c.21-.77-.37-.75-.72-.96-.07.32-.34.46-.24.96zm1.68-.24c1.19.22 3.73.79 4.08-.24-.98-.56-2.89-.78-4.08.24zm4.56-.48c.66 1.09 3.31 1.58 3.6 0-1.85.1-2.23-.47-3.6 0zm4.08.48c.57.52 3.66 1.01 4.32-.24-.92-.28-3.78-.64-4.32.24zm4.8-.24c.24.93 2.72 1.09 3.12 0-.61-.38-2.5-.38-3.12 0zm3.6.24c1.02.53 3.66.93 4.08-.24-.81-.32-3.63-.6-4.08.24zm6.48.24c.16-.96-.91-.69-1.68-.72-.37 1.17 1.2 1.13 1.68.72zm-24.96 8.4c1.29-.73.71-5.56.48-7.68h-.72c-.07 1.67-.8 5.85.24 7.68zm1.2 0c1.91.05 2.78.35 4.08 0 .06-2.86.01-4.58.24-7.44-.93-.51-2.76-.12-4.08-.24-.32 1.6-.23 5.03-.24 7.68zm4.8-7.44v7.44c1.68.08 2.14.24 3.6 0v-7.44c-.82-.21-2.41-.46-3.6 0zm4.32 0c-.55 2-.08 5.04-.24 7.44.97.31 3.14.44 4.08 0 .34-3.06.15-4.99 0-7.44-1.17-.23-2.6-.31-3.84 0zm4.56 0v7.44c.73.26 2.43.45 3.12 0-.12-2.52.28-5.56-.24-7.68-1.13-.1-1.65.43-2.88.24zm3.84 0c-.56 2-.08 5.04-.24 7.44 1.03.31 3.32.44 4.32 0-.13-3.61-.03-4.24-.24-7.44-1.33-.12-2.72-.16-3.84 0zm4.56 0c.09 1.62-.26 5.67.24 7.68h1.44c.12-2.41.45-5.93-.48-7.68-.2-.71-.6.31-1.2 0zm-23.76 8.4c-.07.63.34.78.96.72.07-.63-.08-1.04-.72-.96-.01.14-.03.28-.24.24zm1.92 0c-.09.34-.28.4 0 .72 1.17-.28 3.46.58 3.84-.48-.4-.87-3.05-.53-3.84-.24zm4.56 0c-.01.33.12.52.24.72 1.11-.25 3.35.62 3.36-.72-1.48-.15-1.93-.34-3.6 0zm4.32 0c-.01.33.12.52.24.72 1.09-.27 3.3.57 3.6-.48-.95-.32-3.11-.47-3.84-.24zm4.8.48c.5.32 3.07.67 2.88-.48-1.07-.14-2.57-.54-2.88.48zm3.6 0c.76.27 3.71.67 4.08-.24-.9-.49-3.25-.62-4.08.24zm6.24-.24c-.03-.53-1.01-.1-1.44-.24-.27 1.15 1.48 1.22 1.44.24zm-23.52 1.2c-.44 3.15-.39 6.63-.24 8.4 1.94-.06 2.72.33 4.08 0 .54-2.14-1.06-2.14-1.2-3.6.41-1.6 1.75-2.25 1.2-4.8-1.71.07-2.48-.43-3.84 0zm-1.2 8.4c.16-2.24.85-7.26-.24-8.4h-.48c.61 3.07-1.18 7.66.72 8.4zm7.2-3.6c-.03 1.63-1.84.88-1.68 3.12.51.84 2.82.93 3.84.48v-8.16c-.78-.49-2.43-.13-3.6-.24-1.22 2.45 1.47 3.31 1.44 4.8zm2.64-4.56c.04 2.95-.12 6.44.24 8.4 1.32-.12 3.15.26 4.08-.24v-8.16c-.95-.39-3.36-.39-4.32 0zm4.8 8.16c1.08.42 2.32.21 3.12 0 .51-2.34-.93-2.75-1.2-4.32.79-.89 1.56-1.8 1.2-3.84-4.87-2.06-2.64 5.02-3.12 8.16zm3.6-6c1.17.35 1.97 1.07 1.68 2.88-.97.55-1.81 1.23-1.44 3.12.96.39 3.37.39 4.32 0 .07-3.79-.31-4.48-.24-8.4-2.71-.1-4.96-.37-4.32 2.4zm5.04-2.4c.39 1.85-1.35 9.3 1.68 8.64-.04-2.54.25-5.94-.24-8.64h-1.44zm-4.8 5.28c1.15.17 1.36-1.9 0-1.68v1.68zm-12.72.24c1.03.28 1.03-1.96 0-1.68-.55.53.08.93 0 1.68zm-.96 0c.28-.29.27-.85.24-1.44h-.72c.01.63-.13 1.41.48 1.44zm-4.8 4.56c-.01-.33.12-.53.24-.72-.32-.08-.45-.35-.96-.24-.06.62.09 1.03.72.96zm.96 0c1.3-.23 3.55.5 4.08-.48-.5-.47-4.59-1.07-4.08.48zm4.56-.24c.73.23 3.51.7 3.84-.24-1.14-.43-3.01-.67-3.84.24zm4.56 0c1.28.67 2.32.15 4.08.24-.14-1.29-3.49-1.2-4.08-.24zm4.8 0c.87.24 2.67.83 2.88-.24-.38-.3-2.87-.64-2.88.24zm3.6 0c1.34.31 3.4 1.1 4.32-.24-.88-.32-3.8-.61-4.32.24zm6.48-.48h-1.44c-.31 1.19 1.84 1.35 1.44 0zm-25.2 6.96c1.04-.96.22-3.78.48-5.52h-.96c-.16 1.25-.9 5.03.48 5.52zm.96-5.28v5.04c.94.5 2.76.12 4.08.24.25-2.09.28-3.82 0-5.52-1.32.12-3.14-.27-4.08.24zm4.8 0v5.28h3.84v-5.28c-.81-.39-3.02-.39-3.84 0zm4.56 0c-.18 2.08-.09 3.35 0 5.28h4.08c.12-.99-.08-3.55 0-5.28-.88-.39-3.19-.39-4.08 0zm4.8 5.28h3.12c-.13-1.71.29-3.97-.24-5.28-4.17-1.7-2.83 2.99-2.88 5.28zm3.6-5.28c.14 1.7-.28 3.96.24 5.28 1.34.12 2.9.1 4.32 0-.15-2.34.19-3.7-.48-5.52-1.32.12-3.14-.27-4.08.24zm6.24 5.52c.92-.96.48-4.18.24-5.52h-1.44c.4 1.84-1 5.49 1.2 5.52zm-24.96 1.44c.08-.33.35-.46.24-.96h-.96c-.06.62.09 1.03.72.96zm.96-.72c-.01.33.12.52.24.72 1.3-.23 3.55.51 4.08-.48-.58-.84-3.37-.55-4.32-.24zm4.8.72c1.17-.28 3.46.58 3.84-.48-.46-.98-2.61-.27-3.84-.48v.96zm4.56-.72v.72c1.65-.41 3.8 1.11 4.08-.72-.84-.43-3.22-.36-4.08 0zm4.8 0v.72c1.12-.13 2.84.89 3.12-.48-.22-.83-2.52-.54-3.12-.24zm3.84.72c1.04-.27 3.84.74 4.32-.48-.6-1-2.95-.25-4.32-.48.03.65-.4.48 0 .96zm6.48-.48c-.02-.62-.8-.48-1.44-.48-.91.96 1.45 1.9 1.44.48zm-25.68 6.48c1.14-1.46.46-3.37.48-5.28h-.96c.3 1.62-.6 4.44.48 5.28zm1.2-5.04v5.04c.89.38 3.2.38 4.08 0v-5.04c-.88-.39-3.19-.39-4.08 0zm5.04 5.28h3.6c.22-1.82-.08-3.08 0-5.28-.78-.49-2.43-.13-3.6-.24-.49 2.11-.49 3.52 0 5.52zm4.32-5.28c-.02 1.31-.24 3.51.24 5.28h3.84c.07-2.32.23-3.85 0-5.28-.88-.39-3.19-.39-4.08 0zm4.8 0v5.04c.62.38 2.51.38 3.12 0v-5.04c-.75-.31-1.9-.27-3.12 0zm3.84 0c-.38 1.36.17 2.76 0 5.04 1.04.39 3.53.39 4.56 0-.29-1.62-.2-2.82-.24-5.04-1.27-.2-3.03-.34-4.32 0zm4.8.24c.61 1.23-.14 3.82.48 5.04h1.2c.37-1.88.23-3.52 0-5.28-.47-.48-1.14.07-1.68.24zm-24.48 6.48h.96c.12-.75-.2-1.07-.96-.96v.96zm1.68-.72c-.01.33.12.52.24.72 1.25-.12 2.98.26 3.84-.24-.1-1.32-3.23-.69-4.08-.48zm4.8.48c.81.55 2.64.08 3.84.24-.37-1.58-3.22-.95-3.84-.24zm4.56 0c.76.27 3.71.67 4.08-.24-.34-.5-3.61-1.04-4.08.24zm4.8-.48c-.21 1.1 3.01 1.03 3.12.24-.92-.43-2.28-.33-3.12-.24zm3.84.48c.95.52 3.05.6 4.32-.24-.54-.44-3.6-.59-4.32.24zm5.04-.24c-.06.95 1.83 1.02 1.44-.24-.59-.03-1.15-.04-1.44.24zm-24 6.48c.26-1.15.69-4.53-.24-5.28h-.48c.47 2.2-1.32 4.87.72 5.28zm1.2-5.28c-.41 1.97-.62 3.51-.24 5.28.89.38 3.2.38 4.08 0v-5.04c-.86-.5-2.59-.13-3.84-.24zm4.56.24c-.08 1.06-.01 4.2 0 5.28h3.84c.1-1.42.31-3.73 0-5.28-.96-.01-2.99-.43-3.84 0zm4.8 2.16c.63-.84 1.06-1.57 2.4-1.2 3.46.94-1.28 5.99-2.64 1.68.08.88-.2 2.12.24 2.64 1.32-.12 3.15.26 4.08-.24-.65-1.64.4-3.54-.24-5.04-1.57-.35-5.23-.86-3.84 2.16zm4.56 2.88c.72.48 2.27.13 3.36.24-.08-2.74-.12-2.81-.24-5.28h-3.12v5.04zm3.84.24h4.56v-5.04c-1.08-.52-3.08-.12-4.56-.24v5.28zm5.28 0h1.44v-5.28c-2.85-.74-1.48 3.91-1.44 5.28zm-11.04-1.68c.28-.67.28-1.25 0-1.92-2.53-.67-2.34 2.5 0 1.92zm-12.24 2.88c.76.27 3.71.67 4.08-.24-.5-.45-3.41-.58-4.08.24zm-1.68.24c.55.06.91-.06.96-.48-.32-.08-.45-.34-.96-.24v.72zm10.32 0c-.12-1.4-2.6-.44-3.84-.72.29 1.63 2.32.62 3.84.72zm.72-.48c.44.96 3.37 1.11 4.32 0-.95-.39-3.36-.39-4.32 0zm4.8 0c-.12.94 3.32 1.27 3.12 0-.54-.45-2.55-.33-3.12 0zm3.84.24c.19.05.28.2.24.48 1.37-.32 4.09.72 4.32-.72-.95-.31-3.97-.62-4.56.24zm5.28-.24c-.14.86.71.73 1.44.72.48-1.23-1.01-1.12-1.44-.72zm-24.72 5.04c1.3-.05.7-3.06.48-3.84h-.72c-.23.73-.7 3.51.24 3.84zm1.2 0c1.02.42 2.7.18 4.08.24.39-.89.39-3.2 0-4.08-3.28-.65-4.88.39-4.08 3.84zm5.28-3.84c-.61 1.52-.44 2.98-.24 4.08h3.84c.11-.74.52-2.66 0-3.84-.78-.49-2.43-.13-3.6-.24zm4.32 4.08h4.32c-.12-1.32.27-3.15-.24-4.08h-3.84c-.5.93-.12 2.76-.24 4.08zm4.8-.24c.72.48 2.27.13 3.36.24v-3.84c-2.69-1.3-4.1.66-3.36 3.6zm4.08-3.6c-.2.84-.37 2.88 0 3.84 1.15.14 2.52 0 4.08.24.48-1.41.32-2.52.24-4.08-.85-.05-3.01-.55-4.32 0zm5.04 3.84c.57-.01.71.41 1.44.24.39-.89.39-3.2 0-4.08-.56-.31-.44.03-1.2-.24-.5.93-.12 2.76-.24 4.08zm-47.04-1.2c1.39.29 4.21.08 5.04-.96-1.41-.37-3.93.22-5.04.96zm1.2 2.4c.89.52 2.68.2 3.36-.24.18-.74-.41-.71-.24-1.44-1.45.14-3.29-.1-3.12 1.68zm22.32 0c1.3.23 3.38 1.11 4.32-.24-1.24-.11-3.93-.99-4.32.24zm-.72-.48h-.96c-.38 1.11 1.24.83.96 0zm6 .96c1.22-.61 3.3.78 3.84-.72-.93-.51-2.76-.12-4.08-.24-.01.41.06.74.24.96zm4.32-.72c-.01.33.12.52.24.72 1.41-.19 3.74.53 4.08-.72-.95-.39-3.36-.39-4.32 0zm4.8.24c.39.56 3.37 1.03 3.36-.24-.65-.29-3.07-.61-3.36.24zm4.08-.24c-.01.33.12.52.24.72 1.32-.12 3.15.26 4.08-.24-.16-1.33-3.4-.68-4.32-.48zm6.48.24c.04-.52-.85-.11-1.2-.24-.35.76 1.38 1.15 1.2.24zm-47.76 1.92c1.9-.02 3.17-.68 5.04-.72-.82-1.09-4.11-.46-5.04.72zm21.6 4.56c.46-1.19 1.51-5.52-.48-5.52.32 2.28-.78 4.47.48 5.52zm1.2-5.28v5.04c.96.39 3.36.39 4.32 0v-5.04c-.96-.39-3.36-.39-4.32 0zm4.8 0v5.04c.96.39 3.36.39 4.32 0v-5.04c-1.03-.32-3.31-.44-4.32 0zm4.8 0c.06 2.02-.13 4.17.24 5.28h4.08v-1.2c-4.41 2.01-4.25-5.06 0-2.64 0-.64.09-1.37-.24-1.68-2.05.1-2.91-.07-4.08.24zm5.04 0c-.45 1.26-.31 3.99 0 5.28h3.12v-5.28c-1.26.27-2.23-.65-3.12 0zm3.84 0c-.12.98.09 3.55 0 5.28 1.77-.25 3.34.45 4.56 0-.13-1.79.29-4.13-.24-5.52-2.02.27-3.18-.02-4.32.24zm5.04 5.28c.57-.01.71.41 1.44.24.69-2.19.23-2.91.24-5.52-2.99-.98-1.06 3.63-1.68 5.28zm-37.68-4.56c-1.04.15-2.71-.32-3.36.24.73.36 2.97.49 3.36-.24zm-4.8.48c2.34-.39-.57-.47-1.68.24 1.1.08 1.1-.15 1.68-.24zm16.32 3.36c-2.45-1.47-5.79-3.33-9.12-3.12 3.61.31 6.53 2.59 9.12 3.12zm-22.32-1.92c.92-.37 2.28-.28 2.88-.96-1.08.04-2.89.61-2.88.96zm1.2 193.68c-1.15-.46-3.47-1-3.6-1.68 15.1 4.64 27.14 8.04 45.6 7.2 17.2-.79 32.35-5.13 42.72-12.24 10.99-7.53 19.27-18.02 23.52-31.68 2.22-7.11 3.5-15.24 2.64-24-2.06-21.19-12.75-33.11-23.76-45.12-2.24-2.46-4.79-4.64-6.48-7.44-4.65-7.75-4.55-17.97-.96-25.92 4.83-10.68 13.53-28.67 4.08-38.64-1.77 11.16-15.56 19.14-27.6 13.44-1.96-.94-3.22-2.63-5.52-3.6.04 4.3-.11 8.98.24 11.76 2.92.04 6.41-.49 7.2 1.68-1.01 5.42 1.99 17.43 0 21.6-1.32 2.77-6.53.88-10.56 1.44-.29 6.6.09 15.35 0 23.52 3.41.27 8.02-.66 10.32.72 1.81 2.66-.25 9.21 1.2 12.24 1.28-3.27 3.45-5.99 7.92-5.52 7.95.83 9.4 13.95.72 14.88-4.14.44-7.09-1.91-8.88-6-.89 3.84 1.32 8.61-2.4 9.84-2.75.91-6.64-.68-9.12.24v2.4c1.99.13 3.13-.18 4.56.24.73 1.27-.78 4.78 2.16 3.84.69-.84-.28-3.33.72-3.84 1.2-.08 2.21.03 3.12.24.84 2.53 1.88 7.17.24 10.31-.82 1.58-2.48 1.67-3.36 3.12-.48 1.5.53 4.51.72 5.28-1.13.05-2.68.6-3.6-.48.73-1.19.84-3 .72-5.04-13.85.18-23.94.04-37.2.73-.63 2.58 1.32 3.75.96 5.27-1.12-.15-2.87.32-3.6-.23.53-1.74.82-3.81.96-5.28-1.06-.91-3.2-1.23-4.08-3.84-1.22-3.64-1.32-11.08 3.36-9.61.77.84-.75 3.93 1.2 4.08 1.93.09.35-3.33 1.2-4.31 2.48.04 3.52.04 6 0 .08-.79.56-1.97 0-2.65-3.31-1.47-7.81 1.17-8.88-2.39-.97-3.26.08-8.52 0-12.24-.09-4.3-.36-7.61.24-10.8 1.52-1.93 5.9-.98 9.12-1.2.31-6.52.37-15.24.48-23.28-2.84-1.25-7.04 1.01-9.36-.72-1.31-.99-.98-4.07-.96-6.48.05-4.42-1.28-14.03.48-16.56 1.46-2.09 5.98-.43 8.4-1.44-.04-11.07.4-21.08.48-32.4-3.79-2.28-7.46-4.02-12.96-4.08-9.34-.11-15.88 4.05-19.92 8.88-7.32 8.76-6.38 23.96-1.92 36.24 2.52 6.92 6.39 13.09 7.2 19.44 2.39 18.59-12.51 24.96-20.88 35.52-7.11 8.97-13.43 22.7-12.96 38.64.83 27.71 16.19 44.17 34.8 53.76-2-.4-3.88-2.19-5.52-2.16 2.95 1.93 6.81 4.23 10.8 4.32zm34.8-193.2c.32.48 1.61.72 2.16.24v-1.2c-.59-.82-2.58-.64-2.16.96zm-11.04 3.6c.92.27 4.12.76 4.32-.48-1.33-.17-3.8-1.01-4.32.48zm-1.92-.48c-.18 1.08 1.61.9 1.2-.24-.55-.08-.92.04-1.2.24zm6.72 0c-.01.33.12.52.24.72 1.32-.12 3.15.26 4.08-.24-.16-1.33-3.4-.68-4.32-.48zm4.8 0c-.01.33.12.52.24.72 1.3-.23 3.55.51 4.08-.48-.58-.84-3.37-.55-4.32-.24zm5.04.72c1.11-.08 2.58.81 3.12-.48-.27-.92-2.1-.3-3.12-.48v.96zm3.84-.72v.72c1.45-.32 4.4 1.3 4.56-.72-.99-.43-3.55-.36-4.56 0zm5.04 0v.72c.62.5 2.05.27 1.92-.72-.35-.36-1.57-.36-1.92 0zm-24.96 4.8c1.11.1 1.25-3.8-.24-3.36-.28.53-.65 3.21.24 3.36zm1.44 0h4.08c.19-1.05.19-1.58.24-3.12-2.44-1.03-6.11-.09-4.32 3.12zm4.8 0h4.08c.48-1.06.18-2.74 0-3.36-2.9-.43-4.96-.01-4.08 3.36zm4.8-.24c1.37.59 2.28.15 4.08.24.48-.65.15-2.1.24-3.12-2.23-.7-5.5-.62-4.32 2.88zm4.8 0c.77.36 2.91.33 3.36.24.25-.48-.16-1.97 0-3.12-2.13-.96-4.23.05-3.36 2.88zm4.08.24c1.59.24 2.78-.27 4.32.24.39-.75.39-2.86 0-3.6-2.91-.35-5.26-.15-4.32 3.36zm5.52.24c.74.17.88-.25 1.44-.24-.25-.98.11-1.51 0-2.88-.53-.19-.93-.51-1.68-.48-.44 1.22-.2 3 .24 3.6zm-24 .96c.81.32 3.64.6 4.08-.24-1.08-.13-3.93-.89-4.08.24zm8.88-.24c-.8-.56-2.63-.09-3.84-.24-.05 1.15 3.55 1 3.84.24zm.72.24c.81.23 3.68.7 4.08-.24-.81-.32-3.63-.61-4.08.24zm5.04-.24c.17 1.03 2.18.22 3.12.48.1-1.23-2.51-.73-3.12-.48zm3.84.24c1.52.21 3.42 1.07 4.56-.24-.95-.31-3.97-.62-4.56.24zm5.28-.24c-.06.77 1.06.87 1.44.48.09-1.03-.87-.65-1.44-.48zm-24 5.04c1.01.51 2.93.11 4.32.24v-4.08c-2.13-.03-2.76-.09-4.08-.24-.5.93-.12 2.76-.24 4.08zm-.96.24c.45-.9.25-3.51.24-4.08h-.96c.36 1.24-.79 3.99.72 4.08zm6 0h4.32c-.12-1.32.27-3.15-.24-4.08h-4.08c.19 1.45-.28 3.3 0 4.08zm4.8-2.64c.87-.25 1.11-1.14 1.92-1.44h-1.68c-.27.28-.27.85-.24 1.44zm2.64 2.64c2.25 1.07 1.61-2.03 1.68-3.84-.3-.28-1.89-.48-2.16 0 1.8.15 1.83 3.14.48 3.84zm2.16-.24c.87.41 2.01.55 3.36.48.44-1.01.32-3.29 0-4.32-3.2-.8-3.85.94-3.36 3.84zm4.32.48h4.32c.2-1.32.08-2.9 0-4.08-1.01-.51-2.92-.12-4.32-.24-.38.96-.38 3.36 0 4.32zm5.04-4.08c.03 1.02-.19 3.45 0 4.08H459c.2-1.66 0-2.24 0-4.08-.54-.12-1.22-.48-1.68 0zm-13.2 2.4c.43.63 1.74.63 2.16 0 .25-1.93-2.48-2.19-2.16 0zm52.32 3.84c-1.01-1.94-1.45-4.47-3.36-5.52-1.37 9.56-8.95 17.77-20.16 16.8-5.47-.48-8.75-3.1-12.24-6 2.12 3.63 7.54 6.4 12.72 6.72 10.7.65 18.18-7.22 20.16-16.08 1.69.63 1.66 2.98 2.88 4.08zm-53.28-3.12c-.31.89 1.43.95 1.68.48-.65-.1-1.02-1.11-1.68-.48zm-11.76 1.68c-.18 1.08 1.61.9 1.2-.24-.55-.08-.92.04-1.2.24zm1.68.24c.19.05.28.2.24.48 1.4-.13 3.31.27 4.32-.24-.17-1.24-4.02-.93-4.56-.24zm5.28.48c1.4-.13 3.31.27 4.32-.24-.23-1.45-2.95-.41-4.32-.72v.96zm4.8-.24c.92.27 3.78.64 4.32-.24-.63-.64-4.05-.98-4.32.24zm5.04.24h3.12c.35-1.49-3.84-1.21-3.12 0zm3.84 0c.9-.11 4.1.98 4.8-.48-.41-.38-4.45-.76-4.8.48zm5.28-.24c.07.78 1.82.59 1.68-.24-.05-.35-1.97-.56-1.68.24zm-25.2 3.84c.9-.23.32-1.93.48-2.88-.33.01-.52-.12-.72-.24-.65.24-.95 3.23.24 3.12zm1.2 0h4.08c.46-.58.15-1.93.24-2.88-1.91-.03-5.87-1.16-4.32 2.88zm5.04 0h4.08c.38-.55.38-2.33 0-2.88-2.58-.4-5.61-.05-4.08 2.88zm4.8 0h4.32c-.08-.95.22-2.3-.24-2.88-2.52-.21-5.01-.38-4.08 2.88zm4.8-.24c1.45.64 1.87.11 3.36.48.38-.62.38-2.51 0-3.12h-3.12c-.28.67-.26 1.65-.24 2.64zm4.08.24c1.16.44 3.04.16 4.56.24.25-.54.04-2.34-.24-3.12h-4.08c-.47 1.05.02 1.6-.24 2.88zm5.28.24H459v-2.88c-.56 0-.7-.42-1.44-.24-.47.64-.14 2.09-.24 3.12zm-24 .96c.76.27 3.71.67 4.08-.24-1.14-.28-3.48-.98-4.08.24zm5.04 0c.89.31 3.81.61 4.32-.24-.87-.23-3.84-.71-4.32.24zm5.04 0c.81.32 3.64.6 4.08-.24-.8-.23-3.67-.71-4.08.24zm4.8-.24c.17.84 3.18.7 3.36 0-.67-.38-2.68-.38-3.36 0zm3.84.24c1.25.84 3.62.35 4.56.24-.17-1.24-4.02-.93-4.56-.24zm5.28-.24c-.13.88 1.9 1.09 1.68 0-.76-.37-.84-.08-1.68 0zm-25.68 5.04c1.67-.16.28-2.24.96-3.6-.34-.06-.4-.4-.72-.48-.83.51-.55 3.2-.24 4.08zm1.44-3.84c.12 1.24-.26 2.98.24 3.84 1.4-.13 3.31.27 4.32-.24.04-1.53-.32-2.04 0-3.36-1.77-.54-2.81-.47-4.56-.24zm5.28 3.84h4.08c.5-.86.13-2.6.24-3.84h-4.32c-.38.81-.38 3.02 0 3.84zm4.8-.24c.99.19 4.41.93 4.32-.72-.72-.61-1.3.47-2.4.24-1.06-.57-1.33-1.69-.96-3.12h-.72c-.49.79-.13 2.43-.24 3.6zm4.8 0c.75.38 2.86.38 3.6 0-.11-1.17.26-2.81-.24-3.6-3.03-.71-3.91.72-3.36 3.6zm4.32.24h4.08c.36-1.43.5-2.98.24-3.84-3.34-.76-5.76.6-4.32 3.84zm5.04-3.6c.11 1.17-.25 2.81.24 3.6 2.49.3 1.3-1.87 1.68-3.36-.61-.63-1.4-.45-1.92-.24zm-12.24 2.16c1.06.09 1.63-.3 1.68-1.2-.59-1.8-3.35.03-1.68 1.2zm-13.68 2.64h.96a.514.514 0 00-.96 0zm1.68 0c.98.13 4.11.89 4.32-.48-.84 0-3.73-.92-4.32.48zm5.28-.48c.08 1.14 4.24 1.14 4.32 0-1.93-.04-2.44-.08-4.32 0zm9.84.48c.67.23 3.42.77 3.36-.48-1.24.21-3.01-.95-3.36.48zm-.96-.48h-3.84c-.02 1.13 3.87 1.13 3.84 0zm9.36.24c-1.01-.51-2.92-.12-4.32-.24.11 1.22 3.85.93 4.32.24zm2.64 0c-.35-.37-1.22-.21-1.92-.24-.28 1.02 1.9.96 1.92.24zm-27.84 3.6c1.44.31.84-1.4.96-2.4-.3-.02-.33-.31-.72-.24-.73.5-.03 1.36-.24 2.64zm1.68 0c2.07.17 2.23.16 4.32 0 .01-.79.41-1.2.24-2.16-.83-.77-2.8-.4-4.32-.48-.27.81-.54 1.9-.24 2.64zm5.04-2.16v2.16c2.46.01 2.61.32 4.56 0-.06-.82.19-1.95-.24-2.4-1.86.18-3.17-.44-4.32.24zm5.52 2.4c1.33-.17 2.36-.22 3.6 0 .45-.52.17-1.76.24-2.64h-4.08c-.44.62-.33 2.29.24 2.64zm4.32-.24c1.07.18 1.74.21 3.36.24.45-.52.16-1.76.24-2.64h-3.36c-.42.45-.17 1.58-.24 2.4zm4.32 0c1.02.42 2.71.18 4.08.24.45-.52.17-1.76.24-2.64h-4.32c-.25.97.07 1.13 0 2.4zm5.04 0c.57.07.9.38 1.68.24.45-.52.17-1.76.24-2.64h-1.92v2.4zm-24.24.96c-.01.33.12.52.24.72 1.74-.16 2.41.04 4.08-.24-.16-1.33-3.4-.68-4.32-.48zm5.28.24c1.71.59 2.32.41 4.08.24-.47-1.19-3.7-.88-4.08-.24zm5.04-.24c1.02.72 3.51 1.37 3.84-.24-1.3.05-2.88-.17-3.84.24zm4.8 0c.48 1.16 2.11.64 3.36.48-.05-1.14-2.62-.78-3.36-.48zm4.08.48c.92.19 4.16.85 4.32-.48-1.36.19-3.44-1.03-4.32.48zm5.28-.48c-.14.86.71.73 1.44.72.22-1.19-.79-.99-1.44-.72zm-25.68 3.12c.69-.04.44-1 .48-1.68-.45.05-.53-.27-.96-.24-.33.4-.55 2.15.48 1.92zm.96-.24c1.04.39 3.53.39 4.56 0v-1.44c-.85.02-5.17-1.38-4.56 1.44zm5.52.24c1.4-.13 3.31.27 4.32-.24v-1.44c-1.4-.38-5.9-.92-4.32 1.68zm5.04 0c1.32-.12 3.15.26 4.08-.24v-1.44c-1.42-.49-5.5-.71-4.08 1.68zm4.8 0h3.36c-.02-.69.14-1.57-.24-1.92-1.79.07-4.08-.44-3.12 1.92zm4.08-1.68v1.44c1.01.51 2.93.11 4.32.24 0-.57.42-.71.24-1.44-1.24-.86-2.83-.04-4.56-.24zm5.52 1.68h1.2c.33-.31.24-1.05.24-1.68h-1.68c.01.63-.09 1.37.24 1.68zm-14.16 1.2c1.09-.27 3.3.57 3.6-.48-.57.07-3.15-.46-3.6.48zm-6.48-.48c-1.28.15-3.19-.32-4.08.24.81.23 3.68.7 4.08-.24zm1.2.48h4.08c-.31-.79-3.76-.79-4.08 0zm10.08 0c.87-.25 2.79.54 2.88-.48-.86.25-2.78-.55-2.88.48zm4.08 0h3.84v-.48c-1.16.27-3.46-.58-3.84.48zm-30 22.8c2.46 1.36 5.52.82 9.36.96.46-.58.15-1.93.24-2.88-1.35-.55-2.62.26-3.84-.48v-7.2c-3.06.04-3.37-3.98 0-3.84-.34-1.46-.42-4.32 0-5.76.96-.41 2.54-.19 3.84-.24.4-.84-.05-1.28.24-2.4-3.38-.4-7.48-.54-9.6.72-.94 5.99-.46 15.5-.24 21.12zm10.56-19.44h4.08c.38-.49.38-2.15 0-2.64-2.39-.29-5.61-.22-4.08 2.64zm5.04 0h4.56c-.07-.88.21-2.13-.24-2.64-2.35-.03-5.3-.67-4.32 2.64zm5.28 0h4.08c-.07-.88.21-2.13-.24-2.64h-3.84v2.64zm4.8-.24c1.2.43 2.08.49 3.36.24v-2.64c-2.12-.2-4.04-.21-3.36 2.4zm4.32.48h3.84c.46-.58.16-1.93.24-2.88-2.58-.4-5.61-.05-4.08 2.88zm5.04 0c1.37.15 3.36-.32 4.32.24.18 1.19-.12 3.84 0 5.76.79.41 2.32.08 2.64.96.67 1.64-.24 3.31-2.4 2.88v7.2c-1.75-.07-2.93.42-4.8.24.01.79-.34 1.81 0 2.64 1.2.43 4.67.16 6.96.24.1-1.14-.98-1.1-.72-2.4.66-2.43 3.68-1.27 3.6.96.55-6.17.02-11.95-.24-18.24-.45-.52-.98.92-2.16.48-1.81-.73-1.16-3.2.24-3.84h-7.44c.28 1.2-.52 2.17 0 2.88zm6.48-.72c.18.81 1.56 1.33 2.4.72.61-2.19-2.3-2.49-2.4-.72zm-35.28 4.08c1.12-.81 2.4-1.44 3.36-2.4-.41-.79-2.02-.38-3.12-.48-.46.58-.15 1.93-.24 2.88zm4.08-2.16c1.38.3 3.72 1.04 4.56-.24-1.02-.32-3.68-1.16-4.56.24zm5.28 0c1.51.27 3.5.97 4.32-.24-.44-.49-3.55-.72-4.32.24zm5.28 0c1.3.34 3.22.69 4.08-.24-1.25-.17-3.53-.93-4.08.24zm8.16-.24c-.64-.48-2.09-.15-3.12-.24-.2 1.53 2.6.79 3.12.24zm.96.24c.06.18.2.28.48.24.79.46 2.99.27 3.36-.48-.68-.28-3.54-.67-3.84.24zm5.04-.24c2.98 1.79 3.73 5.5.96 7.92 2.87 1.34 1.61 6.34-.96 6.96.72.48 2.27.13 3.36.24.28-4.55-.32-10.83 0-14.88-.91-.22-2.44-.79-3.36-.24zm-24.48 1.44c-.03 1.07.88 1.2.96 2.16-.27 1.24-1.56 1.47-1.2 3.36 1.04.39 3.53.39 4.56 0-.25-2.4-2.91-3.61-.48-5.52-.91-.15-2.82-.03-3.84 0zm5.04.24c3.09 1.24.07 3.34-.24 5.28 1.11.39 3.7.39 4.8 0 .23-1.75-1.66-1.92-1.68-3.36 0-1.03 1.57-1.54.96-2.16-1.48.41-3.18-.87-3.84.24zm5.04 5.28c.96.39 3.37.39 4.32 0-.6-2.07-2.48-3.78-.24-5.52h-3.84c2.37 1.77.61 3.36-.24 5.52zm6.48-2.4c-.33.86-1.69.7-1.68 1.92.27 1.08 2.92.83 3.84.48-.18-2.32-2.61-3.5-.48-5.52h-2.88c.29 1.16 1.65 1.23 1.2 3.12zm2.64 1.92c.3 1.06 4.36 1.25 4.32-.24-2.17-1.23-.97-3.74-.24-4.8-1.12.15-2.87-.32-3.6.24 2.8 1.17.46 3.38-.48 4.8zm5.04-4.8c.2 1.09 1.09 1.48 1.2 2.64-.18 1.01-1.48.92-1.2 2.4 3.62.41 2.62-5.96 0-5.04zm-25.68 3.12c.06-.19.2-.28.48-.24-.11-.85.4-2.31-.72-2.16-.79.66-.81 1.92.24 2.4zm5.76-.48c-.07-.73.27-1.87-.48-1.92-.55.32-.93 2.25.48 1.92zm15.6.24c.49-.23.52-.93.48-1.68-.35-.13-.6-.36-.96-.48-.17.57-.69 2.29.48 2.16zm-14.64 0c.72-.48.73-.95.48-1.92h-.72c-.41.44-.31 1.72.24 1.92zm4.08 0c.36-.38.5-1.91-.48-1.68-.35.38-.49 1.9.48 1.68zm1.2 0c.51-.35.77-1.65-.24-1.68-.24.63-.25 1.22.24 1.68zm3.12 0c1.08.18.8-1.5.24-1.68-.43.69-.39.75-.24 1.68zm1.92 0c.73-.35.43-1.46-.24-1.68-.2.2-.65 1.87.24 1.68zm2.88-.24c.2-.59.42-1.39-.48-1.44.01.63-.13 1.41.48 1.44zm-19.44 2.4c-.17-1.75-1.89-1.94-2.4-3.36-.46 1.48.43 3.53 2.4 3.36zm23.76-2.16c.74.36.74-1.57 0-1.2v1.2zm-29.04 2.88h1.2c.34-.74.11-1.08-.24-1.68-1.45-.22-1.59 1.01-.96 1.68zm1.92 1.68c1.21-.07 1.32-1.24 2.16-1.68-.78-.42-1.13-1.27-1.92-1.68.18 1.37-.25 2.14-.24 3.36zm34.56-.96c.55-.26.88-.73.96-1.44-.99-2.62-4.12 1.29-.96 1.44zm-29.76 3.36c.1 1.14-.82 1.26-.72 2.4 1.46-.02 2.73.56 4.32 0-.83-1.31-1.66-1.41-1.44-2.88.17-1.11 2.31-1.27 1.68-2.88-3.3-1.3-6.31.64-3.84 3.36zm4.32-3.36c.61 2.35 2.77 3.9.24 5.76 1.49.19 2.7.42 4.32 0-.21-1.47-2.05-1.31-1.44-3.6.41-.87 1.94-.63 1.68-2.16-1.1-.39-3.69-.39-4.8 0zm5.28 0c1.13 1.98 2.01 3.79.24 5.76 1.32.15 2.28.4 4.08 0-.52-1.62-1.85-1.6-1.68-3.12.14-1.22 1.92-1.03 1.68-2.64-.95-.39-3.36-.39-4.32 0zm6.48 3.36c-.18 1.1-1.47 1.08-1.44 2.4 1.18.15 2.37.26 3.6 0 .28-2.04-2.02-1.5-1.44-3.84.27-.86 1.45-.79 1.44-1.92-.78-.49-2.43-.13-3.6-.24-.36 2.04 1.69 1.67 1.44 3.6zm2.88-3.36c.14 1.22 1.74.98 1.68 2.4.85-.52 1.54-1.18 2.16-1.92-.39-1.42-3.15-.5-3.84-.48zm4.8 5.52c3.17.04 2.88-5.35 0-5.52.55 2.37.76 3.2 0 5.52zm-27.6-2.16c.09-1.52 1.85-1.36 2.4-2.4v-.48c-1.39-.7-3.24 1.34-2.4 2.88zm61.44-.24c.04-.93 1.27-1.92.72-2.64-.07.9-1.32 1.86-.72 2.64zm-38.4.72c.79-.01.92-.69.96-1.44-.21-.43-.53-.75-.96-.96-.36.43-.36 1.96 0 2.4zm-1.68-.24c1.03.28.97-1.9.24-1.92-.39.58-.61 1.16-.24 1.92zm-8.64.48c.24-.64.56-2.15-.48-2.16-.55.58-.79 2.19.48 2.16zm13.92-.48c-.04-.68.21-1.65-.48-1.68-.54.34-.87 1.98.48 1.68zm-12.72.24c.58-.5.49-1.4-.24-1.68-.2.2-.65 1.87.24 1.68zm3.84 0c-.03-.77.24-1.84-.72-1.68-.41.48-.45 2.05.72 1.68zm.72 0c.89.13 1.1-1.9 0-1.68v1.68zm-17.52 0c.46.1.44.68 1.2.48.33-.31.24-1.05.24-1.68-.33.01-.52-.12-.72-.24-.33.39-.85.59-.72 1.44zm6.48.48c.36-.35.36-1.57 0-1.92-1.19 0-1.19 1.92 0 1.92zm1.2 0c.8-.28.57-1.86-.24-1.92-.14.53-.6 1.79.24 1.92zm13.92 1.2c1.24.71 3.77.78 4.32-.48-.95-.57-1.72-1.32-2.4-2.16.18 1.7-1.57 1.46-1.92 2.64zM495 537.57c12.65 13.43 26.44 28.24 26.4 52.56-.01 10.62-3.05 19.85-6.24 28.08 12.24-21.03 6.49-49.91-5.76-65.52-2.49-3.18-5.43-5.95-8.16-9.12-5.29-6.16-12.38-11.81-13.44-21.36-.76-6.86 1.46-10.94 2.64-15.84-6.63 10.47-2.31 23.89 4.56 31.2zm-66-28.56c.67.26 2.07.48 2.4-.24-1.11-.09-1.36-1.04-2.4-1.2v1.44zm35.04 2.88c.39.41 1.01.59 1.92.48 1.85-1.91-2.37-3.65-1.92-.48zm-30.96 1.44c1.81-.09 2.96.12 4.08-.24.44-.67.38-2.51-.24-2.88-2.34-.25-5.27-.1-3.84 3.12zm5.04-.24c.75.25 3.02.43 4.32 0 .06-1.13.27-1.57 0-2.64-2.24-.3-5.42-.76-4.32 2.64zm5.04-2.4v2.4c1.08.36 3.24.36 4.32 0v-2.64c-1.19-.56-3.12.01-4.32.24zm5.28 2.64c1.43.12 2.14-.26 3.12 0 .38-.62.38-2.51 0-3.12-2.31-.23-4.32.26-3.12 3.12zm4.32 0h3.6c.46-.58.16-1.93.24-2.88-1.58-.4-5.29-.88-3.84 2.88zm-19.92.96c-.25 7.05-.26 15.96-.48 23.28 1.09.51 3.09.11 4.56.24.56-6.36-.08-15.95.48-23.04-.98-.7-2.92-.44-4.56-.48zm5.04.24c.15 8.39-.2 15.19-.24 23.04 1.17.52 3.25.11 4.8.24-.17-9.65.41-15.65 0-23.28-1.03-.39-3.52-.39-4.56 0zm5.28.48v22.56c1.01.51 2.93.11 4.32.24.07-6.03-.04-15.71 0-23.28-.91-.2-4.15-.85-4.32.48zm5.04 0v22.56c.82.38 3.03.38 3.84 0 .04-9.95-.18-14.84-.24-23.04-.72-.23-3.6-.8-3.6.48zm4.32 0c.28 6.52-.58 16.26.48 22.8 1.17-.11 2.82.25 3.6-.24v-23.04c-.84-.21-3.97-.84-4.08.48zm-57.84 25.2c5.6-5.05 10.43-14.75 7.68-24.48 1.68 11.62-3.55 18.89-7.68 24.48zm58.08-1.68c-.25.97.11 1.5 0 2.88 1.24.26 2.43.15 3.6 0 .22-.46.42-2.12 0-3.12-1.01.26-2.28.27-3.6.24zm4.32 2.64c1.15.83 3.28.11 5.04.72.54 1.78.1 4.54.24 6.72 4.25-1.13 3.54 4.68.24 3.36-.37 1.99.46 5.86-.24 8.16-1.31.52-3.57.1-5.28.24v2.4c1.8.06 4.95.55 7.68 0a1.923 1.923 0 012.64-2.64c.02-5.34.01-12.78 0-18-.72-.55-1.29.66-2.64.24-1.28-.84-.62-3.1.24-3.84-3.69.53-8.66-2.14-7.92 2.64zm-32.4 1.44c-1.17.22-.91-1.01-1.92-.96v18c2.32-2.41 5.13 1.35 2.64 3.12 2.42-.06 3.09.38 5.76.24.38-.5.38-2.15 0-2.64-.95-.09-2.3.22-2.88-.24.06-2.86-.11-5.06 0-7.44-3.56.36-3.64-4.47 0-4.08-.19-1.48-.52-5.11 0-7.2.75.45 2.58.27 3.36 0-.08-.95.22-2.3-.24-2.88h-6c1.11 1.18 1.36 3.75-.72 4.08zm7.68-1.2c1.5.55 2.83-.1 4.32.24.62-.89.5-1.66.24-3.12h-4.32c-.46.58-.15 1.93-.24 2.88zm5.28 0c1.17.33 3.65.43 4.8 0 .27-.45-.17-1.79 0-2.88-2.57-.01-5.9-.78-4.8 2.88zm5.76.24c1.61-.2 2.97-.06 4.08-.24.49-1-.04-2.06 0-2.88h-4.32c.1 1.02-.23 2.47.24 3.12zm4.8-2.88c.16 1.17.05 1.13 0 2.4 1.45.67 1.96.35 3.84.24v-2.88c-1.24.11-2.97-.26-3.84.24zm-23.28 3.12c.51-.38.87-.89.72-1.92-1.65-1.78-3.32 1.98-.72 1.92zm41.52-.24c.31-.67.6-1.19.24-1.92-2.22-1.55-3.18 2.65-.24 1.92zm-13.44 1.2c.6.34 3.12.56 3.36-.24-.66-.41-2.73-.64-3.36.24zm-24.24 2.16c.97-.63 2.07-1.13 2.64-2.16-.12-.84-1.56-.35-2.4-.48-.44.51-.16 1.76-.24 2.64zm3.6-1.92c.98.19 4.34.86 4.56-.48-1.03-.24-4.24-.78-4.56.48zm10.08 0c-.29-1.46-3.12-.4-4.56-.72.46 2.02 3.3.43 4.56.72zm.72-.24c1.39.39 3.52.72 4.56-.24-.99-.28-3.95-.65-4.56.24zm5.28-.24c.31.94 2.97.73 3.6 0-.69-.44-2.89-.35-3.6 0zm8.64.24c3.27.49 4.44 5.61 1.44 7.2.6 1.39 1.6 1.63 1.92 2.88.83 3.24-1.84 3.65-3.36 5.76.67.84 3.28.51 4.32.24.05-6.75-.07-11.39-.24-16.32-.85-.28-3.6-.63-4.08.24zm-8.88 1.44c2.44 1.73 1.18 3.58 0 5.76 1.51-.19 2.92.32 3.84 0 .06-.19.01-.48.24-.48-.37-1.44-1.97-1.44-1.92-2.88.05-1.26 1.33-1.01 1.68-2.4-.86-.62-2.88-.51-3.84 0zm4.56-.24c-.12 1.64 1.65 1.39 1.44 3.12-.19 1.16-1.62 1.09-1.44 2.64.98.35 3.08.93 3.6-.24.09-1.69-1.86-1.34-1.68-3.12.05-1.31 1.81-.91 1.68-2.4-.69-.44-2.89-.35-3.6 0zm-18.96 2.64c-.05 1.43-1.28 1.23-1.68 2.64.91 1.36 3.08.93 4.8.72.55-2.47-1.99-1.85-1.44-4.32.13-.84 1.45-.48 1.2-1.68h-4.08c-.15 1.13 1.25 1.31 1.2 2.64zm5.28 0c-.17 1.42-1.91 1.28-1.44 3.36 1.15.43 3.64.33 4.8 0 .16-1.97-1.64-2.23-1.44-3.84.15-1.17 1.27-.67 1.44-2.16h-4.56c-.41.84 1.29 1.34 1.2 2.64zm4.08-2.4c2.85 2.08.36 3.46 0 5.76 1.35.01 3.32.36 4.56-.24.17-1.77-1.63-1.56-1.68-3.12-.1-1.47 1.71-1.02 1.44-2.64-1.39.12-3.31-.27-4.32.24zm15.12 2.64c.03 1.3-1.43 1.12-1.2 2.64 2.89.81 3.9-5.85 0-5.52-.23 1.59 1.39 1.33 1.2 2.88zm-26.88 2.4c-.98-1.57-1.35-3.37-.72-4.8-2.18.76-1.49 5.4.72 4.8zm5.52-1.92v-1.92c-1.29-.1-1.16 1.94 0 1.92zm-4.56 0c1.15-.02 1.15-1.66 0-1.68v1.68zm5.28 0c.89.13 1.1-1.9 0-1.68v1.68zm4.8.24v-1.92h-.72c-.34.74-.29 1.88.72 1.92zm13.92 0v-1.92h-.72c-.38.5-.54 2.31.72 1.92zm-12.72 0c.11-.46.52-.61.48-1.2-.47-.01-.3-.66-.96-.48.05.68-.2 1.64.48 1.68zm3.84 0c-.17-.74.25-.88.24-1.44-.3-.02-.33-.31-.72-.24-.46.49-.31 1.73.48 1.68zm1.44 0c.36-.38.5-1.91-.48-1.68-.35.38-.49 1.9.48 1.68zm3.12 0v-1.68c-1.47-.34-1.09 1.89 0 1.68zm17.28 3.6c-1.13 8.29 9.54 10.42 12.48 4.32 2.55-5.28-1.64-10.33-7.2-9.36-3.43.6-4.97 2.8-5.28 5.04zm-16.08-3.6c.28-.29.28-.85.24-1.44h-.72c.01.63-.13 1.41.48 1.44zM429 551.97c.78-.19 1.26-.67 1.44-1.44-.29-.67-.77-1.15-1.44-1.44-.06 1.28-.17 1.83 0 2.88zm33.6-1.44c.35 1.26 2.78.83 2.16-.96-.75-.74-2.23-.42-2.16.96zm-34.56.72v-1.2c-2.27-1.28-2.23 2.42 0 1.2zm4.08.72c2.4 1.94 1.51 3.52 0 5.28 1.89.37 3.43.23 4.8 0-.09-1.75-2.29-1.39-1.92-3.6.23-1.14 2.02-.71 1.92-2.16-.7-.71-4.78-1.05-4.8.48zm6.72 2.64c-.25 1.03-1.3 1.25-1.44 2.4 1.36.81 3.36.46 5.04.24.34-2.02-1.73-1.63-1.44-3.6.22-1.07 1.72-.85 1.44-2.4-1.16-.52-3.25-.11-4.8-.24-.68 1.67 1.18 1.93 1.2 3.6zm4.32-3.36c0 1.59 1.37 1.36 1.44 2.64.1 1.51-1.35 1.6-1.44 3.36 1.44-.33 4.27.74 4.56-.72-.39-1.21-2.2-1-1.68-3.12.26-.88 2.09-1.15 1.44-2.16-.91-.43-3.39-.36-4.32 0zm5.04 0c-.03 1.56 1.44 1.6 1.44 2.88.01 1.29-1.17 1.16-1.44 2.64.58.94 2.76.28 4.08.48.26-1.93-1.62-1.63-1.68-3.12-.06-1.56 1.6-1.29 1.44-2.88-.76-.44-3.06-.35-3.84 0zm4.56 0c.01 1.43 1.13 1.75 1.68 2.64-.07-1.44 1.49-1.23 1.92-2.16.01-1.28-2.87-.71-3.6-.48zm5.28 2.88c-.01 1.18-1.28 1.11-.96 2.64 3.75.31 3.61-5.76.24-5.76-.94 1.38.87 1.77.72 3.12zm-26.64 2.4c-1.92-.87-.92-3.13-.24-4.56-.05-.19-.2-.28-.48-.24-1.89.62-1.35 5.58.72 4.8zm5.28-1.2c.36-.39.36-1.77 0-2.16h-.72c-.35.78-.43 2.22.72 2.16zm5.52-.24c.33-.35.49-1.9-.24-1.92-.49.57-.72 1.69.24 1.92zm1.44-.24c.72-.34.54-1.56-.24-1.68-.2.2-.65 1.87.24 1.68zm3.6.24c.26-.25.5-1.72 0-1.92-.74.33-1.03 1.68 0 1.92zm4.56-.24c.79-.07.6-1.81-.24-1.68-.61.24-.69 1.72.24 1.68zm3.36-1.44c-.09.97.09 1.67.96 1.68.38-.35.22-1.23.24-1.92-.55-.08-.92.04-1.2.24zm-6.48 1.44c.33-.31.42-1.44-.24-1.44-.41.38-.22 1.23.24 1.44zm4.56 0c.33-.31.42-1.44-.24-1.44-.39.37-.1 1.12.24 1.44zm-21.12.48c1.35.47 1.35-2.15 0-1.68v1.68zm20.64 1.68c.73.22 3.61.79 3.6-.48-.48-.87-1.52-1.19-2.16-1.92-.23 1.05-1.45 1.11-1.44 2.4zm-23.52 1.92c.75-.05 1.77.16 2.16-.24-.31-1.29-1.41-1.78-2.4-2.4-.31.49.01 1.94.24 2.64zm2.88-.72c.28 1.26 4.14 1.11 4.8.24-1.63-.58-2.77-.16-4.8-.24zm5.52.48c1.03.37 3.81.95 4.8-.24-.75-.83-4.33-.77-4.8.24zm5.52 0c1.41.23 3.81 1.24 4.56-.48-1.03-.24-4.24-.78-4.56.48zm5.28.24c.79.21 3.79.81 3.84-.48-.46-.98-2.61-.26-3.84-.48.03.65-.4.48 0 .96zm4.56-.72v.72c.86.04 3.29.9 3.36-.48-.28-.85-2.7-.53-3.36-.24zm-29.04 3.6c1.88.48 2.3-1.26 1.44-2.16-1.87-.49-2.3 1.25-1.44 2.16zm40.32-.48c.91 1.19 2.94.39 2.16-1.2-.96-.46-2.49-.34-2.16 1.2zm-31.92 1.68c1.53-.08 3.41.2 4.56-.24v-2.4c-2.78-.05-6.02-.81-4.56 2.64zm5.28-2.64c-.14.58-.18 1.02-.24 2.16.85.8 3.84.58 5.04.24.33-.4-.19-1.4 0-2.4-1.57-.24-3.16-.2-4.8 0zm5.52 2.4c1.48.57 2.79-.05 4.32.24.38-.49.38-2.15 0-2.64-2.74-.22-5.34-.47-4.32 2.4zm5.04 0c1.02.36 3.07.36 4.08 0v-2.4c-2.24-.14-4.79-.82-4.08 2.4zm5.04-2.4c-.42.45-.17 1.58-.24 2.4 1.35-.1 2.47.58 3.6 0 .01-1.05.15-2.23-.47-2.64-1.32.21-1.63-.04-2.89.24zm-21.36 3.84c.09.95-.22 2.3.24 2.88h4.56c.38-.55.38-2.33 0-2.88-1.33-.2-2.9-.36-4.8 0zm5.52.24c.09 1.1.3 1.38 0 2.4 1.28.33 4.37.57 5.28-.24-.24-.63-.28-1.48-.24-2.4-1.43.05-3.55-.38-5.04.24zm11.04-.24c-.41.81.19 1.4 0 2.64h3.6c.45-.52.17-1.76.24-2.64-1.32-.26-2.12-.03-3.84 0zm4.56 0c-.21.97-.14 1.15 0 2.4 1.02.24 2.63.42 3.6 0-.07-.89.21-2.13-.24-2.64-1.64.04-1.65.26-3.36.24zm-9.84 2.64c1.1.2 2.64-.12 4.32 0 .38-.49.38-2.15 0-2.64h-4.32v2.64zm9.84 1.2c1.03.1 1.44.8 1.2 2.16h1.2c.1-1.19.82-1.75 1.2-2.64-1.23.04-2.77-.44-3.6.48zm4.32 0c1.62.54 1.75 2.57 2.4 4.08 1.76-.8 1.16-3.71.72-4.8-1.12.49-2.68-.66-3.12.72zm-19.68-.24c.39.89 1.99.57 1.44 2.4h2.16c-.49-1.7.91-1.5 1.2-2.4-1.86-.35-3.04-.01-4.8 0zm5.76 0c.37.75.93 1.31.96 2.4h2.16c.46-.67.68-1.57.96-2.4-.88-.39-3.19-.39-4.08 0zm5.04.24c1.26-.14.78 1.46 1.2 2.16h1.44c.18-1.03.5-1.9 1.2-2.4-.78-.29-3.43-.63-3.84.24zm18.96 7.44c.13-2.93.58-5.15-.48-7.68-.59-.21-1.28-.32-2.16-.24-1.15 3.73 2.02 4.71 2.64 7.92zm-42-7.44c.22 1.47.13 2.13.24 3.6.79-.04 1.06 1.07 1.68.48.15-.65-.3-1.91.24-2.16.63.25 1.48.28 2.4.24.17-.95.43-1.82 1.2-2.16-1.4-.4-4.35-.4-5.76 0zm6.72.24c1.25-.13 1.12 1.12 1.44 1.92h2.4c-.07-1.08.4-1.28.72-2.4-1.44.24-3.89-.53-4.56.48zm-12.24.48c-.39 2.82-1.2 9.46 2.4 10.32-1.72-1.06-2.92-6.15 0-7.68-.55-.65-.08-2.32-.24-3.36-.9.05-2.16-.25-2.16.72zm18.24 1.44c.08-.33.35-.46.24-.96h-.72c-.06.54.06.9.48.96zm-10.08 3.12c1.03-.1 2.48.23 3.12-.24-.05-.75.17-1.76-.24-2.16h-2.88c-.47.54.26 1.34 0 2.4zm3.84 0c1.63-.14 3.81.28 5.04-.24v-1.92c-1.75-.22-6.2-1.32-5.04 2.16zm5.52-.24c1.24.52 3.42.1 5.04.24-.06-.82.19-1.95-.24-2.4-2.11.21-5.6-.97-4.8 2.16zm6 .24c1.4-.13 3.31.27 4.32-.24.08-.88-.03-1.56-.24-2.16-2.2-.18-5.6-.37-4.08 2.4zm5.04 0h3.6c.43-.46.18-1.59.24-2.4-2.24-.23-5.17-.18-3.84 2.4zm4.8 0h3.12c.43-.46.18-1.59.24-2.4-2.16-.37-4.7.04-3.36 2.4zm4.32 0h.96c.37-.44.37-1.97 0-2.4h-1.2c-.17.88-.12 1.53.24 2.4zm8.4 2.16c.72-2.43-1.07-4.34-3.84-4.08.89 1.75 2 3.28 3.84 4.08zm-42.72-3.36c.78 1.94 2.5 2.94 3.84 4.32 1.31-1.9-.9-5.22-3.84-4.32zm42 4.8c-.8-2.32-2.56-3.68-4.56-4.8.6 1.59 2.4 3.98 4.56 4.8zm-38.88.72c-.91-2.21-2.38-3.86-4.56-4.8 1.13 1.99 2.55 3.69 4.56 4.8zm37.68 0c-1.19-1.61-2.33-3.27-4.08-4.32-1.44 2.42 1.22 5.44 4.08 4.32zm-34.8-1.68c.73-.02.57-1.57.24-1.92h-.72c-.33.4-.55 2.15.48 1.92zm2.64 0h1.2c.33-.31.24-1.05.24-1.68-1.2-.95-2.18.61-1.44 1.68zm2.16 0c.64-.01 1.37.09 1.68-.24.03-.75-.29-1.15-.48-1.68h-1.2c-.35.35-.35 1.57 0 1.92zm3.6 0h1.44v-1.92c-1.6-.55-2.1.95-1.44 1.92zm2.16 0h1.2c-.03-.69.13-1.57-.24-1.92h-.96v1.92zm1.92 0c1.04.23.82-1.52.48-1.92h-.48c-.35.35-.35 1.57 0 1.92zm1.68 0h1.2c.48-.48.16-1.37 0-1.92-1.53-.54-1.76 1.12-1.2 1.92zm2.88 0c.27-.65.05-1.23-.24-1.92h-.72c.03.93-.29 2.21.96 1.92zm2.16 0c1.05.28 1.05-2.21 0-1.92-.47.47-.15 1.37 0 1.92zm1.92 0c.51-.58.15-1.74-.48-1.92-.23.62-.5 1.9.48 1.92zm1.92 0c-.02-.69.14-1.57-.24-1.92h-.72c-.46.64-.46 2.41.96 1.92zm1.44 0c.52-.46.53-1.25.24-1.92H453c.08.8-.32 2.08.72 1.92zm2.64 0c.72-.33.49-1.93-.48-1.92-.33.4-.55 2.15.48 1.92zm1.2 0c1.04.23.82-1.52.48-1.92h-.48c-.35.35-.35 1.57 0 1.92zm-32.64 2.4c-.89-1.75-1.93-3.35-3.84-4.08-.63 2.34.93 4.49 3.84 4.08zm5.52-2.64c.91.2.85-1.08.48-1.44h-.72c-.17.73.25.87.24 1.44zm5.76 0c.92.05.81-1.4 0-1.44v1.44zm10.8.24c1.03.28 1.03-1.96 0-1.68-.25.68-.25 1 0 1.68zm-20.88 3.6c12.61-.26 26.96.12 37.44-.72-1.94.64-2.95-1.74-4.56-2.16-3.9-1.04-10 0-15.12 0h-15.12c-.94.89-1.68 1.99-2.64 2.88zm37.44 3.84c-.25-.87.55-2.79-.48-2.88.03.77-.56 2.55.48 2.88zm-39.12-.48c.04-.84-.06-1.54-.48-1.92.08.94-.55 1.64.48 1.92zm38.16 1.44c-.37.82 1.61 1.14 1.44.24-.45-.48-.84-.41-1.44-.24zm-39.12.24c-.22.86.95.33 1.44.48.07-.77-1.05-.88-1.44-.48zm89.76 37.44c.06-.38.93-1.12.24-1.44-.05.37-.92 1.12-.24 1.44zm-88.8 29.28c-2.64-.32-5.55-1.64-7.92-1.44 2.68.28 5.29 1.91 7.92 1.44zm23.76 4.56c-.7-.61-3.25-.23-4.8-.48.68 1.08 3.33.19 4.8.48zm-4.32 2.88h4.56v-1.68c-1.73.35-5.24-1.09-4.56 1.68zm-.48 1.2c1.26.29 4.65.64 5.52-.24-1.25-.24-4.67-.71-5.52.24z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M487.8 494.85c.7 2.15-1.83 5.19-2.88 7.2.2-2.21 2.59-4.29 2.88-7.2z"
							clipRule="evenodd"
						></path>
						<path
							fill="#fff"
							fillRule="evenodd"
							d="M491.88 502.77c.55.72-.68 1.71-.72 2.64-.6-.78.65-1.74.72-2.64z"
							clipRule="evenodd"
						></path>
						<path
							fillRule="evenodd"
							d="M480.36 504.69c.56.34-.01 1.56-.72 1.44.23-.49.49-.95.72-1.44z"
							clipRule="evenodd"
						></path>
					</g>
				</g>
			</svg>
			<h4 style={{ color:'white', textAlign: 'center' }}>
				Cargando <br /> {product || 'productos'}
			</h4>
		</div>
	)
}

export default Loading
