import { useEffect } from 'react'

const BackgroundEffects = () => {
	useEffect(() => {
		const createStars = () => {
			const container = document.getElementById('stars-container')
			if (!container) return

			const starCount = 200

			for (let i = 0; i < starCount; i++) {
				const star = document.createElement('div')
				star.className = 'star'

				const x = Math.random() * 100
				const y = Math.random() * 100
				const size = Math.random() * 3 + 1
				const delay = Math.random() * 5
				const duration = Math.random() * 3 + 2

				star.style.left = `${x}%`
				star.style.top = `${y}%`
				star.style.width = `${size}px`
				star.style.height = `${size}px`
				star.style.animationDelay = `${delay}s`
				star.style.animationDuration = `${duration}s`

				container.appendChild(star)
			}
		}

		createStars()
	}, [])

	return (
		<div className='fixed inset-0 overflow-hidden pointer-events-none'>
			<div id='stars-container' className='absolute inset-0'></div>

			<div className='spacesheep animate-spacesheep'>
				<img
					width='48'
					height='48'
					src='https://img.icons8.com/color/48/rocket--v1.png'
					alt='rocket--v1'
				/>
			</div>

			<div className='absolute animate-comet' style={{ animationDelay: '0s' }}>
				<div className='w-2 h-2 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50'></div>
			</div>
			<div className='absolute animate-comet' style={{ animationDelay: '5s' }}>
				<div className='w-1 h-1 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50'></div>
			</div>
			<div className='absolute animate-comet' style={{ animationDelay: '10s' }}>
				<div className='w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50'></div>
			</div>

			<div className='absolute animate-rocket'>
				<div className='text-4xl'>🚀</div>
			</div>
		</div>
	)
}

export default BackgroundEffects
