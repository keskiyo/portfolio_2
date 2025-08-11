interface ProjectCardProps {
	emoji: string
	title: string
	description: string
	tags: string[]
	link: string
}

const ProjectCard = ({
	emoji,
	title,
	description,
	tags,
	link,
}: ProjectCardProps) => {
	return (
		<div className='bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 glow-hover transition-all hover:scale-[1.02]'>
			<div className='h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl'>
				{emoji}
			</div>
			<div className='p-6'>
				<h3 className='font-bold text-xl mb-3 glow-text'>{title}</h3>
				<p className='text-gray-300 mb-4'>{description}</p>
				<div className='flex flex-wrap gap-2 mb-4'>
					{tags.map((tag, index) => (
						<span
							key={index}
							className='px-2 py-1 bg-purple-500/20 rounded-full text-xs font-medium'
						>
							{tag}
						</span>
					))}
				</div>
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-2 text-cyan-500 hover:text-pink-500 transition-colors'
				>
					Посмотреть проект ↗
				</a>
			</div>
		</div>
	)
}

export default ProjectCard
