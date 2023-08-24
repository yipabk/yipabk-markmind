import { ReactNode } from 'react'
import Button from '../../components/Button'

interface Props {
	icon: ReactNode
	title: string
	subtitle: string
	buttonText: string
	buttonLink: string
}

export const ActionsBox = ({ icon, title, subtitle, buttonText }: Props) => {
	return (
		<div
			data-aos='fade-up'
			data-aos-once='true'
			className='relative flex flex-col justify-center items-center gap-3 font-montserrat text-white border-white border-4 px-10 pt-8 pb-12 bg-black/60'>
			<div className='h-[91px] flex items-center'>{icon}</div>
			<div className='text-[40px] text-center'>{title}</div>
			<div className='whitespace-pre-line text-center '>{subtitle}</div>
			<Button className='absolute -bottom-6'>{buttonText}</Button>
		</div>
	)
}
