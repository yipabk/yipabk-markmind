import { ReactNode } from 'react'

interface Props {
	img: string
	title: string
	content: ReactNode
	dir: 'ltr' | 'rtl'
}

export const SectionWithImage = ({ img, title, content, dir }: Props) => {
	return (
		<div
			className={`flex ${
				dir === 'ltr' ? 'lg:flex-row' : 'lg:flex-row-reverse'
			} flex-col px-8 xl:px-24 2xl:px-40 py-24 md:py-48 items-center justify-center gap-12 lg:gap-16'`}>
			<div className='flex w-full justify-center '>
				<img src={img} className=' bg-black' />
			</div>
			<div className='flex flex-col items-center lg:items-start text-black font-montserrat'>
				<div className='text-xl lg:text-[32px] tracking-wide mb-6 font-bold text-center lg:text-start'>{title}</div>
				<div className='text-sm lg:text-base font-light leading-5 text-justify'>{content}</div>
			</div>
		</div>
	)
}
