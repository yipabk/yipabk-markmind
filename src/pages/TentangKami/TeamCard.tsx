import { FC } from 'react'

export interface TeamCardProps {
	id: string
	image: string
	title: string
}

export const TeamCard: FC<TeamCardProps> = ({ image, title }) => {
	return (
		<div className='relative'>
			<div
				className='absolute inset-0'
				style={{ background: 'linear-gradient(180deg, rgba(201, 201, 201, 0.00) 0%, #7E7E7E 100%)' }}></div>
			<div className='relative z-20 flex items-end w-[222px] h-[222px]'>
				<img src={image} width={222} height={222} alt='' />
			</div>
			<div
				className='text-white p-4 max-w-[222px] flex justify-center items-center relative z-20 text-center font-montserrat h-[80px]'
				style={{ background: 'linear-gradient(180deg, #6CB4BE 25.31%, rgba(108, 180, 190, 0.00) 100%)' }}>
				{title}
			</div>
		</div>
	)
}
