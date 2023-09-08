import bca from '../assets/images/BCA.png'
import background from '../assets/images/donasi-hero.png'
import { FadingHeader } from '../components/commons/FadingHeader'

export const Kontribusi = () => {
	return (
		<div>
			<FadingHeader
				variant='black'
				bg={background}
				className='flex flex-col justify-end items-center mt-20 h-[98vh] w-full'>
				<div data-aos='fade-down' data-aos-once='true' className='text-white font-display text-5xl mb-16'>
					DONASI
				</div>
				<div
					data-aos='fade-down'
					data-aos-once='true'
					className='text-white font-display text-3xl mb-8 tracking-wide text-center'>
					"Giving is the GREATEST Act of GRACE"
				</div>
				<div
					data-aos='fade-down'
					data-aos-once='true'
					className='text-orange text-xl font-medium w-1/2 text-center mb-[15vh] tracking-wide'>
					Mari salurkan donasi Anda melalui rekening YIPABK untuk bersama wujudkan mimpi anak berkebutuhan khusus!
				</div>
			</FadingHeader>
			<div className='flex flex-col justify-center items-center min-h-[80vh] w-full bg-blue/40 gap-12 p-8'>
				<div className='flex flex-col lg:flex-row items-center rounded-lg overflow-hidden gap-12 drop-shadow-lg font-montserrat'>
					<div
						data-aos='fade-left'
						data-aos-once='true'
						className='flex flex-col md:flex-row bg-white rounded-lg drop-shadow-md max-w-[662px]'>
						<div className='flex flex-col'>
							<div className='px-3 py-6 mt-2 flex justify-center items-center'>
								<img src={bca} width={180} height={57}></img>
							</div>
							<div className='bg-gray-100 pb-12 pt-6 px-8 lg:px-48 h-full'>
								<div className='font-bold text-base md:text-xl mb-2 flex flex-col justify-center items-center lg:flex-row'>
									<div>No. Rek : 766 - 03 - 18181</div>
								</div>
								<div className='text-sm font-montserrat md:text-base whitespace-pre-line'>
									{`Yayasan Indonesia Peduli Anak 
				  Berkebutuhan Khusus (YIPABK)`}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-once='true'
					data-aos-delay='200'
					className='font-montserrat text-sm md:text-[19px] max-w-4xl text-center'>
					Kontribusi yang Anda berikan akan digunakan untuk meningkatkan akses pendidikan inklusi di Indonesia melalui
					berbagai kegiatan dan program YIPABK.
				</div>
			</div>
		</div>
	)
}
