const SkillsSection = () => {
	const skills = [
		{
			icon: '💻',
			name: 'JavaScript/TypeScript',
			level: 60,
		},
		{
			icon: '⚛️',
			name: 'React/Next.js',
			level: 55,
		},
		{
			icon: '🗄️',
			name: 'MongoDB/PostgreSQL/MySQL',
			level: 60,
		},
		{
			icon: '🎨',
			name: 'Tailwind/CSS',
			level: 60,
		},
		{
			icon: '🔀',
			name: 'Git/GitHub',
			level: 58,
		},
		{
			icon: '☁️',
			name: 'AWS/Docker',
			level: 47,
		},
	]

	return (
		<section id='skills' className='py-20 px-4'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='font-bold text-4xl md:text-5xl mb-12 text-center glow-text'>
					Технические навыки
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{skills.map((skill, index) => (
						<div
							key={index}
							className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 glow-hover transition-all hover:scale-105'
						>
							<div
								className={`${
									index % 2 === 0 ? 'text-cyan-500' : 'text-pink-500'
								} mb-3 text-3xl`}
							>
								{skill.icon}
							</div>
							<h3 className='font-semibold mb-2'>{skill.name}</h3>
							<div className='w-full bg-gray-700 rounded-full h-2'>
								<div
									className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full'
									style={{ width: `${skill.level}%` }}
								></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection
