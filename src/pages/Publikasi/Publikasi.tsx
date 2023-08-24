import Button from '../../components/Button'
import { FadingHeader } from '../../components/commons/FadingHeader'

export const Publikasi = () => {
	return (
		<div>
			<FadingHeader
				variant='black'
				bg='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
				className='flex flex-col justify-end items-center h-[45vh] w-full'>
				<div className='text-white font-display text-5xl mb-16'>PUBLIKASI</div>
			</FadingHeader>

			<div className='px-32 py-16'>
				<div className='min-h-[60vh] mb-32'>
					<div className='text-4xl font-bold my-6'>Berita Terkini</div>
					<div className='flex gap-12'>
						<img
							src='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
							alt=''
							className='object-cover w-96 h-72'
						/>
						<div className='flex flex-col gap-10'>
							<div className='text-4xl font-bold'>Aku dan Guru Bisa Belajar Bersama MDRT Foundation</div>
							<div className='text-justify'>
								Hingga saat ini, sekolah inklusi masih menghadapi tantangan dalam lingkungan sekolah. Melihat kebutuhan
								tersebut, YIPABK pun meluncurkan program “Aku Bisa Belajar” dan “Guru Bisa Belajar” dengan dukungan dana
								dari MDRT Foundation.{' '}
							</div>
							<Button className='w-96'>Baca Lebih Lanjut</Button>
						</div>
					</div>
				</div>
				<div className='min-h-[60vh] mb-32'>
					<div className='text-4xl font-bold my-6'>Artikel</div>
				</div>
				<div className='min-h-[60vh] mb-32'>
					<div className='text-4xl font-bold my-6'>Newsletter</div>
					<div className='flex gap-12'>
						<div className='flex h-96 w-[40rem] gap-2 box-border'>
							<img
								src='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
								alt=''
								className='h-full w-1/2 object-cover'
							/>
							<div className='flex flex-col gap-2 h-96 overflow-hidden'>
								<img
									src='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
									alt=''
									className='h-1/2 w-full object-cover'
								/>
								<img
									src='https://images.unsplash.com/photo-1567507968014-cd038413b9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
									alt=''
									className='h-1/2 w-full object-cover'
								/>
							</div>
						</div>
						<div className='max-w-md flex flex-col gap-10'>
							<div className='text-justify'>
								Dapatkan informasi terkini seputar kegiatan YIPABK, edukasi terkait anak berkebutuhan khusus, serta
								cerita dari mereka yang PEDULI setiap bulannya langsung di Inbox Anda!
							</div>
							<div className='text-3xl font-bold'>
								Tertarik membaca koleksi <i>Newsletter</i> kami?
							</div>
							<Button className='w-96'>
								<div>
									<i>Download</i> di sini!
								</div>
							</Button>
						</div>
					</div>
				</div>
				<div className='min-h-[60vh] mb-32 flex flex-col items-center'>
					<div className='text-center text-2xl font-bold mb-12'>
						Daftar <i>Newsletter</i> Kami!
					</div>
					<div className='flex flex-col gap-6 mb-12'>
						<div className='text-xl font-bold flex gap-2'>
							<div className='min-w-[10rem]'>Nama</div>
							<input className='bg-grey/25 rounded-md w-[30rem]' type='text' />
						</div>
						<div className='text-xl font-bold flex gap-2'>
							<div className='min-w-[10rem]'>No Telp</div>
							<input className='bg-grey/25 rounded-md w-[30rem]' type='text' />
						</div>
						<div className='text-xl font-bold flex gap-2'>
							<div className='min-w-[10rem]'>Email</div>
							<input className='bg-grey/25 rounded-md w-[30rem]' type='text' />
						</div>
					</div>
					<Button className='w-96'>Daftar</Button>
				</div>
			</div>
		</div>
	)
}
