const ProjectsSection = () => {
	const projects = [
		{
			emoji: '🛒',
			title: 'E-shop "Rus-Autovaz"',
			description: 'Интернет-магазин автозапчастей с yookassa',
			technologies: [
				'React',
				'Node.js',
				'PostgreSQL',
				'Yookassa',
				'Prisma',
				'Zustand',
				'TailwindCSS',
			],
			link: 'https://github.com/keskiyo/store-zap',
		},
		{
			emoji: '📄',
			title: 'BLog Node.js',
			description:
				'Сайт блог, где пользователи могут создавать посты, комментировать и лайкать',
			technologies: [
				'Node.js',
				'JavaScript',
				'MongoDB',
				'Vercel',
				'Heroku',
				'JWT',
			],
			link: 'https://github.com/keskiyo/blog-node-js-frontend',
		},
		{
			emoji: '🛍️',
			title: 'E-shop',
			description: 'Интернет-магазин автозапчастей на PHP',
			technologies: ['PHP', 'Laravel', 'MySQL', 'Yookassa'],
			link: 'https://github.com/keskiyo/Laravel_shop/',
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
