const ContactSection = () => {
	const contacts = [
		{
			icon: '✉️',
			title: 'Email',
			url: 'mailto:spotkazxc@gmail.com',
			bg: 'bg-purple-500/20 hover:bg-purple-500/40',
		},
		{
			icon: '💻',
			title: 'GitHub',
			url: 'https://github.com/keskiyo',
			bg: 'bg-cyan-500/20 hover:bg-cyan-500/40',
		},
		// {
		// 	icon: '🔗',
		// 	title: 'LinkedIn',
		// 	url: 'https://linkedin.com/in/cosmic-developer',
		// 	bg: 'bg-pink-500/20 hover:bg-pink-500/40',
		// },
	]

	return (
		<section className='py-20 px-4'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='font-bold text-4xl md:text-5xl mb-8 glow-text'>
					Связаться со мной
				</h2>
				<p className='text-lg text-gray-300 mb-8'>
					Готов к новым проектам? Давайте создадим что-то невероятное вместе!
				</p>
				<div className='flex gap-6 justify-center'>
					{contacts.map((contact, index) => (
						<a
							key={index}
							href={contact.url}
							className={`p-3 ${contact.bg} rounded-full transition-all glow-hover`}
							title={contact.title}
							target='_blank'
							rel='noopener noreferrer'
						>
							{contact.icon}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default ContactSection
