import { ReactNode } from 'react'

interface Props {
	imgs: string[]
	title?: string
	content: ReactNode
	dir: 'ltr' | 'rtl' | 'ttb'
}

export const SectionWithImage = ({ imgs, title, content, dir }: Props) => {
	return (
		<div
			className={`flex ${
				dir === 'ltr' ? 'flex-col lg:flex-row' : 
				dir === 'rtl' ? 'flex-col lg:flex-row-reverse' :
				dir === 'ttb' ? 'flex-col-reverse' : 'flex-col'
			} px-8 xl:px-24 2xl:px-40 py-24 md:py-48 items-center justify-center gap-12 lg:gap-16'`}>
			<div
				data-aos={`fade-${dir === 'ltr' ? 'right' : 'left'}`}
				data-aos-once='true'
				className={`flex flex-row ${
					dir === 'ltr' ? 'md:flex-col' : 
					dir === 'rtl' ? 'md:flex-col': ''
					} w-full justify-center`}>
				{imgs.map((img)=>(
					<div className='mx-1 sm:my-2 w-full'>
						<img src={img} className='object-fill w-full bg-black' />
					</div>
				))}
			</div>
			<div
				data-aos={`fade-${dir === 'ltr' ? 'left' : 'right'}`}
				data-aos-once='true'
				className='flex flex-col items-center lg:items-start text-black font-montserrat'>
				{title && (
					<div className='text-xl lg:text-[32px] tracking-wide mb-6 font-bold text-center lg:text-start'>{title}</div>
				)}
				<div className='text-sm lg:text-base font-light leading-5 text-justify'>{content}</div>
			</div>
		</div>
	)
}
