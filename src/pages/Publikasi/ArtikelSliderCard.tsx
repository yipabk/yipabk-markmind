import { ArrowDown } from '../../components/icons/ArrowDown'

export interface ArtikelSliderCardProps {
	id: string
	image: string
	title: string
	content: string
	linkTo: string
}

export const ArtikelSliderCard = ({ image, title, content, linkTo }: ArtikelSliderCardProps) => {
	return (
		<div className='w-full flex items-center justify-center'>
			<div className='flex flex-col border border-orange h-full justify-between max-w-[337px]'>
				<div className='w-full inline-block'>
					<img className='w-full object-cover h-[171px]' src={image} alt='' />
				</div>
				<div className='font-montserrat p-6 flex flex-col gap-4'>
					<div className='font-bold text-[24px]'>{title}</div>
					<div className='text-justify text-[12px]'>{content}</div>
				</div>
				<a
					href={linkTo}
					className='flex justify-center fill-white bg-orange py-4 hover:bg-white hover:fill-orange border-t border-transparent hover:border-orange duration-200 cursor-pointer'>
					<ArrowDown />
				</a>
			</div>
		</div>
	)
}
