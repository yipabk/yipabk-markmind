import img from '../../assets/images/tentang-kami.png'

export const AboutUs = () => {
	return (
		<div className='flex md:flex-row flex-col-reverse md:px-8 xl:px-24 2xl:px-48 py-24 md:py-48 items-center w-100 bg-orange gap-16 md:gap-4'>
			<div data-aos='fade-right' data-aos-once='true' className='text-white mr-10'>
				<div className='text-3xl lg:text-5xl tracking-wide mb-6 font-display '>Tentang Kami</div>
				<div className='text-sm lg:text-base font-light w-[16rem] sm:w-[24rem] lg:w-[34rem] leading-5 text-justify'>
					<div className='mb-4 leading-[21px]'>
						Dengan rahmat, kasih, dan penyertaan Tuhan, YIPABK (Yayasan Indonesia Peduli Anak Berkebutuhan Khusus)
						dibentuk pada tahun 2012 oleh sejumlah pendidik yang punya hati, peduli, dan secara sukarela ingin membantu
						mewujudkan pemenuhan hak anak berkebutuhan khusus.
					</div>
					<p className='mb-4 leading-[21px]'>
						Tentu saja perjalanan selama belasan tahun ini dipenuhi berbagai suka duka, kemenangan, maupun tantangan.
						Tetapi, kami yakin kami akan terus menjalankannya dengan sepenuh hati agar visi dan kasih Tuhan untuk
						anak-anak-Nya yang spesial bisa terwujud.
					</p>
					<p className='mb-4 leading-[21px]'>
						Kami percaya bahwa setiap anak diciptakan unik, baik, dan sempurna. Terdapat begitu banyak kekuatan,
						karunia, maupun hadiah di dalam diri setiap anak berkebutuhan khusus. Oleh karena itu, sudah menjadi
						tanggung jawab kita untuk membantu dan melakukan edukasi untuk mewujudkan impian mereka.
					</p>
					<p className='mb-4 leading-[21px]'>
						Kami berharap ke depannya akan semakin banyak orang yang peduli dan terlibat, agar YIPABK bisa memberi
						dampak yang lebih signifikan dalam membantu anak-anak dan keluarga Indonesia menemukan keindahan diri
						mereka.
					</p>
					<p className='mb-4 leading-[21px]'>
						Kami berharap ke depannya akan semakin banyak orang yang peduli dan terlibat, agar YIPABK bisa memberi
						dampak yang lebih signifikan dalam membantu anak-anak dan keluarga Indonesia menemukan keindahan diri
						mereka.
					</p>
					<p className='font-medium'>Dr. Alice Arianto, Psy.D., CGP. - Pendiri Bentara Campus</p>
				</div>
			</div>
			<div data-aos='fade-right' data-aos-once='true' className='flex w-full justify-center'>
				<div className='relative w-[15rem] h-[15rem] md:w-[17rem] md:h-[17rem] xl:w-[30rem] xl:h-[30rem]'>
					<div className='absolute bg-white bottom-0 right-0 w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem] xl:w-[28rem] xl:h-[28rem]'></div>
					<img
						className='absolute bg-black top-0 left-0 w-[14rem] h-[14rem] md:w-[16rem] md:h-[16rem] xl:w-[28rem] xl:h-[28rem]'
						src={img}
					/>
				</div>
			</div>
		</div>
	)
}
