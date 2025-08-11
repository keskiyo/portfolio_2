const ProjectsSection = () => {
	const projects = [
		{
			emoji: '🛒',
			title: 'E-Commerce Cosmos',
			description:
				'Современная платформа электронной коммерции с реальным временем и аналитикой',
			technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
			link: 'https://github.com/example/ecommerce-cosmos',
		},
		{
			emoji: '📊',
			title: 'Social Space Dashboard',
			description:
				'Дашборд для управления социальными сетями с аналитикой и автопостингом',
			technologies: [
				'Next.js',
				'TypeScript',
				'PostgreSQL',
				'Redis',
				'Chart.js',
			],
			link: 'https://github.com/example/social-dashboard',
		},
		{
			emoji: '✨',
			title: 'Stellar Task Manager',
			description:
				'Продвинутый менеджер задач с командной работой и интеграцией календаря',
			technologies: ['Vue.js', 'Express', 'MongoDB', 'WebSocket', 'PWA'],
			link: 'https://github.com/example/stellar-tasks',
		},
	]

	return (
		<section id='projects' className='py-20 px-4'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='font-bold text-4xl md:text-5xl mb-12 text-center glow-text'>
					Избранные проекты
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 glow-hover transition-all hover:scale-[1.02]'
						>
							<div className='h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl'>
								{project.emoji}
							</div>
							<div className='p-6'>
								<h3 className='font-bold text-xl mb-3 glow-text'>
									{project.title}
								</h3>
								<p className='text-gray-300 mb-4'>{project.description}</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.technologies.map((tech, i) => (
										<span
											key={i}
											className='px-2 py-1 bg-purple-500/20 rounded-full text-xs font-medium'
										>
											{tech}
										</span>
									))}
								</div>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 text-cyan-500 hover:text-pink-500 transition-colors'
								>
									Посмотреть проект ↗
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
