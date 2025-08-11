const HeroSection = () => {
	const smoothScrollTo = (elementId: string) => {
		const element = document.getElementById(elementId)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			})
		}
	}

	return (
		<section className='min-h-screen flex items-center justify-center px-4'>
			<div className='text-center max-w-4xl mx-auto'>
				<div className='mb-8 animate-float'>
					<div className='text-8xl mb-4'>👨‍💻</div>
				</div>

				<h1 className='font-black text-5xl md:text-7xl mb-6 glow-text'>
					<span className='bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent'>
						Веб-Разработчик
					</span>
				</h1>

				<p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto'>
					Создаю веб-решения с помощью современных технологий
				</p>

				<div className='flex gap-4 justify-center flex-wrap'>
					<button
						onClick={() => smoothScrollTo('skills')}
						className='px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold glow-hover transition-all hover:scale-105'
					>
						Мои навыки
					</button>
					<button
						onClick={() => smoothScrollTo('projects')}
						className='px-8 py-3 border border-cyan-500 text-cyan-500 rounded-full font-semibold hover:bg-cyan-500 hover:text-gray-900 transition-all hover:scale-105'
					>
						Посмотреть проекты
					</button>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
