interface Contact {
	icon: string
	title: string
	url: string
	bg: string
	onClick?: () => void
}

const ContactSection = () => {
	const contacts: Contact[] = [
		{
			icon: '💻',
			title: 'GitHub',
			url: 'https://github.com/keskiyo',
			bg: 'bg-cyan-500/20 hover:bg-cyan-500/40',
		},
		{
			icon: '✉️',
			title: 'Email',
			url: '#',
			bg: 'bg-purple-500/20 hover:bg-purple-500/40',
			onClick: () => window.open('mailto:spotkazxc@gmail.com', '_blank'),
		},
	]

	const handleClick = (contact: Contact) => {
		if (contact.onClick) {
			contact.onClick()
		}
	}

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
							className={`p-3 ${contact.bg} rounded-full transition-all glow-hover cursor-pointer`}
							title={contact.title}
							target={contact.url.startsWith('http') ? '_blank' : '_self'}
							rel={contact.url.startsWith('http') ? 'noopener noreferrer' : ''}
							onClick={e => {
								if (contact.onClick) {
									e.preventDefault()
									handleClick(contact)
								}
							}}
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
