import { PublikasiHero } from '../PublikasiHero'

interface Props {
	firstSectionTitle: string
	firstSectionContent: string
	secondSectionTitle: string
	secondSectionContent: string
	secondSectionImage: string
	secondSectionDir: 'ltr' | 'rtl'
}

export const Layout = ({
	firstSectionTitle,
	firstSectionContent,
	secondSectionTitle,
	secondSectionContent,
	secondSectionImage,
	secondSectionDir,
}: Props) => {
	return (
		<div className='flex flex-col '>
			<PublikasiHero />
			<div
				data-aos='fade-down'
				data-aos-once='true'
				className='flex flex-col gap-4 px-8 sm:px-20 lg:px-48 mt-12 font-montserrat mb-32'>
				<div className='text-2xl lg:text-[32px] font-bold'>{firstSectionTitle}</div>
				<div className='whitespace-pre-line text-left'>{firstSectionContent}</div>
			</div>
			<div className='flex flex-col bg-blue/40 h-[20vh]'>
				<div className='border border-white bg-white w-[85%] h-[10vh]'></div>
				<div className='border border-white bg-white w-[70%] h-[10vh]'></div>
			</div>
			<div className='flex flex-col bg-blue/40 px-8 sm:px-20 lg:px-48 font-montserrat gap-12 pt-16 pb-52'>
				<div data-aos='fade-down' data-aos-once='true' className='text-2xl lg:text-[32px] font-bold'>
					{secondSectionTitle}
				</div>
				<div
					data-aos='fade-down'
					data-aos-once='true'
					className={`flex flex-col ${secondSectionDir === 'ltr' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}>
					<div className='flex-1 whitespace-pre-line text-left'>{secondSectionContent}</div>
					<div className='flex-1 w-full'>
						<img className='w-full object-cover' src={secondSectionImage} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
