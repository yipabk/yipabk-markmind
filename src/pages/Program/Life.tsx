import { FadingHeader } from '../../components/commons/FadingHeader'
import hero from '../../assets/images/life-hero.png'
import life1 from '../../assets/images/life-1.png'
import life2 from '../../assets/images/life-2.png'
import life3 from '../../assets/images/life-3.png'
import { SectionWithImage } from '../../components/commons/Section/SectionWithImage'

export const Life = () => {
	return (
		<div>
			<FadingHeader variant='black' bg={hero} className='flex flex-col justify-end items-center h-[50vh] w-full'>
				<div className='text-white font-display text-5xl mb-16'>LIFE</div>
				<div className='text-grey font-display text-5xl mb-16'>(Learning Intevention Family Equipt)</div>
			</FadingHeader>
			<div className='flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 w-full bg-blue/40 gap-12'>
				<div className='flex flex-col bg-white w-full justify-center items-center min-h-[100vh]'>
					<div className='pt-16 px-8 text-sm md:text-base font-semibold leading-7 whitespace-pre-line text-center'>
						{`Program bantuan bagi anak dan orang tua/wali anak yang mengalami gangguan perkembangan
                         dan kesulitan dalam mengikuti pembelajaran di sekolah.`}
					</div>
					<SectionWithImage
						dir='ltr'
						img={life1}
						title={'1. Program "Aku Bisa Belajar"'}
						content={
							<>
								<div className='mb-4'>
									Program “Aku Bisa Belajar” adalah program yang dirancang agar anak-anak berkebutuhan khusus atau
									dengan disabilitas dapat mengenyam layanan pendidikan di sekolah lewat pemberian surat asesmen.
								</div>
								<div className='mb-4'>
									Asesmen yang dilakukan meliputi pengukuran terhadap kondisi, hambatan, dan kemampuan anak. Hasil
									asesmen ini kemudian akan menjadi dasar bagi guru untuk membuat program pembelajaran yang sesuai
									dengan kebutuhan anak didik mereka.
								</div>
								<div className='mb-4'>
									Saat ini, program “Aku Bisa Belajar” berfokus pada pemberian layanan asesmen bagi anak didik
									berkebutuhan khusus dari berbagai sekolah negeri di DKI Jakarta.
								</div>
							</>
						}
					/>
					<SectionWithImage
						dir='rtl'
						img={life2}
						title={'2. Program "Kita Bisa"'}
						content={
							<>
								<div className='mb-4'>
									Program “Aku Bisa Belajar” adalah program yang dirancang agar anak-anak berkebutuhan khusus atau
									dengan disabilitas dapat mengenyam layanan pendidikan di sekolah lewat pemberian surat asesmen.
								</div>
								<div className='mb-4'>
									Asesmen yang dilakukan meliputi pengukuran terhadap kondisi, hambatan, dan kemampuan anak. Hasil
									asesmen ini kemudian akan menjadi dasar bagi guru untuk membuat program pembelajaran yang sesuai
									dengan kebutuhan anak didik mereka.
								</div>
								<div className='mb-4'>
									Saat ini, program “Aku Bisa Belajar” berfokus pada pemberian layanan asesmen bagi anak didik
									berkebutuhan khusus dari berbagai sekolah negeri di DKI Jakarta.
								</div>
							</>
						}
					/>
					<SectionWithImage
						dir='ltr'
						img={life3}
						title={'3. Program Penanganan Anak'}
						content={
							<>
								<div className='mb-4'>
									Berfokus pada anak-anak dengan spektrum autisme, ADHD, gangguan belajar, gifted disinkroni, dan Down
									syndrome, YIPABK telah membantu 25 anak untuk mendapatkan asesmen hingga intervensi terapi dan program
									pembelajaran individu (Individual Educational Program) lewat Program Penanganan Anak.
								</div>
								<div className='mb-4'>
									Kegiatan yang dilakukan sejak tahun 2013 hingga 2015 ini adalah hasil kerja sama YIPABK dengan Yayasan
									HOPE Worldwide Indonesia yang selama ini telah bekerja melayani pendidikan dan kesehatan anak di
									pemukiman-pemukiman miskin.
								</div>
							</>
						}
					/>
				</div>
			</div>
		</div>
	)
}
