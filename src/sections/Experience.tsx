const ExperienceSection = () => {
	return (
		<section className='py-20 px-4'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='font-bold text-4xl md:text-5xl mb-12 text-center glow-text'>
					Достижения
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='text-center'>
						<div className='text-4xl font-bold text-pink-500 mb-2'>3+</div>
						<div className='text-gray-300'>Завершенных проектов</div>
					</div>
					<div className='text-center'>
						<div className='text-4xl font-bold text-cyan-500 mb-2'>1+</div>
						<div className='text-gray-300'>Лет опыта</div>
					</div>
					<div className='text-center'>
						<div className='text-4xl font-bold text-purple-500 mb-2'>100%</div>
						<div className='text-gray-300'>Довольных клиентов</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExperienceSection
