import { FadingHeader } from '../components/commons/FadingHeader'
import { Partners } from '../components/commons/Partners'

export const Partner = () => {
	return (
		<div>
			<FadingHeader
				variant='black'
				bg='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
				className='flex flex-col justify-end items-center h-[100vh] w-full'>
				<div className='text-white font-display text-5xl mb-16'>PARTNER</div>
			</FadingHeader>
			<div className='flex flex-col justify-center items-center w-100 min-h-[100vh] px-6'>
				<Partners title='Mereka yang' subtitle='#PeduliABK' />
			</div>
		</div>
	)
}
