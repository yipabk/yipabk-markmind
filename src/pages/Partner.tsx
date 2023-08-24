import background from '../assets/images/partner-hero.png'
import { FadingHeader } from '../components/commons/FadingHeader'
import { Partners } from '../components/commons/Partners'

export const Partner = () => {
	return (
		<div>
			<FadingHeader variant='black' bg={background} className='flex flex-col justify-end items-center h-[50vh] w-full'>
				<div data-aos='fade-up' data-aos-once='true' className='text-white font-display text-5xl mb-16'>
					PARTNER
				</div>
			</FadingHeader>
			<div
				data-aos='fade-down'
				data-aos-once='true'
				className='py-24 px-16 lg:px-48 whitespace-pre-line lg:text-[20px] text-base font-montserrat text-start'>
				{`Mewujudkan pendidikan yang merata bagi generasi penerus bangsa tidak dapat kami lakukan sendiri. Kolaborasi dengan berbagai entitas memungkinkan YIPABK untuk bisa menjangkau lebih banyak ABK di Indonesia sekaligus memberikan bantuan secara menyeluruh. 
				
				Mari bergabung menjadi partner YIPABK untuk menyalurkan kepedulian
				instansi Anda akan masa depan generasi muda Indonesia!`}
			</div>
			<div className='flex flex-col justify-center items-center w-100 min-h-[80vh] px-6'>
				<Partners title='Mereka yang' subtitle='#PeduliABK' />
			</div>
		</div>
	)
}
