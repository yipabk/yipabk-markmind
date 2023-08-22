import background from '../assets/images/partner-hero.png'
import { FadingHeader } from '../components/commons/FadingHeader'
import { Partners } from '../components/commons/Partners'

export const Partner = () => {
	return (
		<div>
			<FadingHeader variant='black' bg={background} className='flex flex-col justify-end items-center h-[100vh] w-full'>
				<div className='text-white font-display text-5xl mb-16'>PARTNER</div>
			</FadingHeader>
			<div className='flex flex-col justify-center items-center w-100 min-h-[100vh] px-6'>
				<Partners title='Mereka yang' subtitle='#PeduliABK' />
			</div>
		</div>
	)
}
