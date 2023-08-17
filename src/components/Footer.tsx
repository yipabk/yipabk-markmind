export const Footer = () => {
	return (
		<footer className='bg-white' aria-labelledby='footerHeading'>
			<h2 id='footerHeading' className='sr-only'>
				Footer
			</h2>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
				<div className='mb-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:mb-0 text-xs md:text-base'>
					<div className='flex'>
						<div className='mr-4'>O</div>
						<div>
							<div>Gedung E-Building, Lantai 2</div>
							<div>Komplek Ruko harmoni Plaza Blok I, No 1-4,</div>
							<div>Jl. Suryopranoto No.2 RT.14/RW.8</div>
							<div>Gambir, Jakarta Pusat, DKI Jakarta 10130</div>
						</div>
					</div>
					<div>
						<div className='flex'>
							<div className='mr-4'>O</div>
							<div>yipabk@gmail.com</div>
						</div>
						<div className='flex'>
							<div className='mr-4'>O</div>
							<div>+62 813-7070-3429</div>
						</div>
					</div>
					<div>
						<div className='font-bold'>KONTAK KAMI</div>
						<div className='flex'>
							<div className='mr-4'>O</div>
							<div>Instagram</div>
						</div>
						<div className='flex'>
							<div className='mr-4'>O</div>
							<div>Youtube</div>
						</div>
						<div className='flex'>
							<div className='mr-4'>O</div>
							<div>Facebook</div>
						</div>
					</div>
					<div className='flex flex-col lg:col-span-2 lg:items-center'>
						<p className='text-gray-500 text-base font-bold uppercase'>Didukung oleh</p>
						<img className='h-10' src='/img/logos/workflow-mark-gray-300.svg' alt='Company name' />
					</div>
				</div>
				<div className='mt-12 border-t border-gray-200 pt-8'>
					<p className='md:text-base text-xs text-gray-400 xl:text-center'>
						&copy; COPY RIGHT 2023, Yayasan Indonesia Peduli Anak Berkebutuhan Khusus
					</p>
				</div>
			</div>
		</footer>
	)
}
