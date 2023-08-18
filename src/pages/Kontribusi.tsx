import bca from '../assets/images/BCA.png'
import qr from '../assets/images/QR.png'
import { FadingHeader } from '../components/commons/FadingHeader'

export const Kontribusi = () => {
	return (
		<div>
			<FadingHeader
				bg='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
				className='flex flex-col justify-end items-center h-[100vh] w-full'>
				<div className='text-white font-display text-5xl mb-16'>DONASI</div>
				<div className='text-white font-display text-3xl mb-8 tracking-wide text-center'>"Giving is the GREATES Act of GRACE"</div>
				<div className='text-orange text-xl font-medium w-1/2 text-center mb-[15vh] tracking-wide'>
					Mari salurkan donasi Anda melalui rekening YIPABK untuk bersama wujudkan mimpi anak berkebutuhan khusus!
				</div>
			</FadingHeader>
			<div className='flex flex-col justify-center items-center min-h-[80vh] w-full bg-blue/40 gap-12 p-8'>
				<div className='flex flex-col lg:flex-row items-center gap-12'>
					<div className='whitespace-pre-line font-bold text-[22px] text-center lg:text-start'>
						{`Scan QR code atau
            transfer untuk berdonasi!`}
					</div>
					<div className='flex flex-col md:flex-row bg-white rounded-lg drop-shadow-md max-w-[662px]'>
						<div className='p-1 flex justify-center items-center'>
							<img width={236} height={243} src={qr} className='mr-2'></img>
						</div>
						<div className='flex flex-col'>
							<div className='p-3 mt-2 flex justify-center items-center'>
								<img src={bca} width={180} height={57}></img>
							</div>
							<div className='bg-gray-100 p-2 rounded-ss-lg h-full'>
								<div className='font-bold text-base md:text-xl mb-2 flex flex-col lg:flex-row'>
									<div>No. Rek :</div> <div>766 - 03 - 18181</div>
								</div>
								<div className='text-sm md:text-base'>Yayasan Indonesia Peduli Anak Berkebutuhan Khusus (YIPABK)</div>
							</div>
						</div>
					</div>
				</div>
				<div className='font-montserrat text-sm md:text-[19px] max-w-4xl text-center'>
					Kontribusi yang Anda berikan akan digunakan untuk meningkatkan akses pendidikan inklusi di Indonesia melalui
					berbagai kegiatan dan program YIPABK.
				</div>
			</div>
		</div>
	)
}
