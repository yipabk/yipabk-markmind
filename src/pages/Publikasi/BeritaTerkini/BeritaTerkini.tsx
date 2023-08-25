import bentara from '../../../assets/images/berita-terkini/bentara.png'
import image1 from '../../../assets/images/berita-terkini/image-1.png'
import image2 from '../../../assets/images/berita-terkini/image-2.png'
import image3 from '../../../assets/images/berita-terkini/image-3.png'
import image4 from '../../../assets/images/berita-terkini/image-4.png'
import image5 from '../../../assets/images/berita-terkini/image-5.png'
import image6 from '../../../assets/images/berita-terkini/image-6.png'
import image7 from '../../../assets/images/berita-terkini/image-7.png'
import mdrt from '../../../assets/images/berita-terkini/mdrt.png'
import peace from '../../../assets/images/berita-terkini/peace.png'
import { PublikasiHero } from '../PublikasiHero'

export const BeritaTerkini = () => {
	return (
		<div>
			<PublikasiHero />
			<div className='flex flex-col justify-center items-center w-100 min-h-[100vh] px-4 md:px-16 w-full bg-blue/40 gap-12'>
				<div className='flex flex-col bg-white w-full py-16 min-h-[100vh] gap-24'>
					<div className='flex flex-col gap-20'>
						<div
							data-aos='fade-up'
							data-aos-once='true'
							className='whitespace-pre-line font-montserrat text-2xl md:text-[32px] font-bold text-center'>
							{`Aku dan Guru Bisa Belajar
                Bersama MDRT Foundation`}
						</div>
						<div data-aos='fade-up' data-aos-once='true' className='flex flex-wrap items-center gap-24 justify-center'>
							<img src={bentara} alt='' />
							<img src={mdrt} alt='' />
							<img src={peace} alt='' />
						</div>
					</div>
					<div className='flex flex-col gap-40'>
						<div className='flex flex-col lg:flex-row px-8 md:px-20 lg:px-40 justify-between items-center gap-8'>
							<div
								data-aos='fade-right'
								data-aos-once='true'
								className='flex flex-col gap-12 font-montserrat text-sm lg:text-base'>
								<div className='whitespace-pre-line'>
									{`Menurut data statistik dari Kemendikbudristek, dari 66,6 juta penduduk
								di tahun 2021, kisaran disabilitas anak usia 5-19 tahun mencapai angka
								 3,3% atau sekitar 2.197.833 jiwa. Sayangnya, dari jumlah tersebut, hanya
								  12,26% yang menempuh pendidikan formal.`}
								</div>
								<div className='whitespace-pre-line'>
									{`Hingga saat ini, sekolah inklusi masih menghadapi tantangan dalam
								 lingkungan sekolah, seperti adanya penolakan dari sebagian orang tua &
								  masyarakat, pelecehan terhadap penyandang disabilitas, terbatasnya
									 ketersediaan guru pembimbing khusus (GPK) yang kompeten, serta
									  belum maksimalnya media pembelajaran yang aksesibel.`}
								</div>
								<div className='whitespace-pre-line'>
									{`Melihat kebutuhan tersebut, YIPABK pun meluncurkan program “Aku Bisa
								 Belajar” dan “Guru Bisa Belajar” dengan dukungan dana dari MDRT
								  Foundation. Kedua program ini ditujukan untuk meningkatkan kualitas 
									pendidikan yang diterima peserta didik berkebutuhan khusus (PDBK) di
									 sekolah negeri.`}
								</div>
							</div>
							<div data-aos='fade-left' data-aos-once='true' className='flex flex-col gap-8'>
								<img src={image1} alt='' />
								<img src={image2} alt='' />
							</div>
						</div>
						<div className='flex flex-col-reverse lg:flex-row px-8 md:px-20 lg:px-40 justify-between items-center gap-6'>
							<div data-aos='fade-right' data-aos-once='true' className='flex flex-col gap-6'>
								<img src={image3} alt='' />
								<div>
									<img src={image4} alt='' />
									<div className='whitespace-pre-line text-center font-montserrat'>
										{`Penerima manfaat 90 anak di wilayah DKI Jakarta
											( 5 Sekolah Negeri wilayah DKI Jakarta)
											Tempat: 4 sekolah negeri di DKI Jakarta
											`}
									</div>
								</div>
							</div>
							<div
								data-aos='fade-left'
								data-aos-once='true'
								className='flex flex-col gap-12 font-montserrat text-sm lg:text-base'>
								<div className='font-bold text-[32px] leading-10'>Program “Aku Bisa Belajar”</div>
								<div className='whitespace-pre-line'>
									{`Program “Aku Bisa Belajar” terdiri dari rangkaian kegiatan yang 
									memberikan fasilitas pemeriksaan psikoedukasi kepada PDBK
									 di sejumlah SD Negeri di wilayah DKI Jakarta.`}
								</div>
								<div className='whitespace-pre-line'>
									{`Pemeriksaan dilakukan oleh tenaga psikolog melalui 
									wawancara, observasi, pengukuran informal, tes baku verbal, 
									serta tes IQ, dengan hasil pemeriksaan berupa surat asesmen 
									yang berisi informasi tentang kondisi kesulitan belajar dari
									 siswa yang bersangkutan. Informasi ini kemudian digunakan 
									 pendidik untuk membuat pertimbangan dan keputusan 
									 dalam kegiatan belajar-mengajar. 

										Berikut rekam jejak program “Aku Bisa Belajar” selama bulan 
										Mei 2023:`}
								</div>
							</div>
						</div>
						<div className='flex flex-col lg:flex-row px-8 md:px-20 lg:px-40 justify-between items-center gap-6'>
							<div
								data-aos='fade-right'
								data-aos-once='true'
								className='flex flex-col gap-12 font-montserrat text-sm lg:text-base'>
								<div className='font-bold text-[32px] leading-10'>Program “Guru Bisa Belajar”</div>
								<div>
									<div className='whitespace-pre-line'>
										{`Program “Guru Bisa Belajar” merupakan program lanjutan dari 
									program “Aku Bisa Belajar”, di mana guru-guru SD Negeri di wilayah 
									DKI Jakarta menerima pelatihan “Identifikasi dan Kemampuan
								  Asesmen Dasar” yang dibimbing oleh Ibu Kurnia Mega Hapsari, S.Psi.,
									 M.Psi.,Psikolog dari PEACE.

										Adapun tujuan kegiatan ini:
										`}
									</div>
									<div className='whitespace-pre-line ml-2'>
										{`1. Memperlengkapi tenaga pendidik dengan kemampuan yang 
										memadai agar mampu mengidentifikasi PDBK

										2. Memperlengkapi tenaga pendidik dengan kemampuan  membuat 
										program pembelajaran individual

										3. Meningkatkan layanan pendidikan inklusif guna memberikan 
										pendidikan yang baik dan berkualitas bagi ABK di wilayah DKI
										 Jakarta

										4. Membangun sudut pandang positif dari para tenaga pendidik
										 terhadap PDBK yang mau belajar`}
									</div>
								</div>
							</div>
							<div
								data-aos='fade-left'
								data-aos-once='true'
								className='grid grid-cols-2 grid-rows-2 gap-6 max-h-[426px]'>
								<div>
									<img className='w-full h-full' src={image5} alt='' />
								</div>
								<div className='row-span-2'>
									<img className='w-full h-full' src={image7} alt='' />
								</div>
								<div>
									<img className='w-full h-full' src={image6} alt='' />
								</div>
							</div>
						</div>
					</div>
					<div
						data-aos='fade-up'
						data-aos-once='true'
						data-aos-offset='400'
						data-aos-delay='200'
						className='font-montserrat px-8 text-sm lg:text-[20px] font-bold whitespace-pre-line text-center'>
						{`Terima kasih yang sebesar-besarnya kepada MDRT Foundation atas kepercayaan dan dukungan 
						yang telah diberikan kepada YIPABK dalam usaha kami memperjuangkan pemenuhan hak 
						pendidikan bagi anak berkebutuhan khusus. Semoga bantuan ini dapat memberikan dampak
						 nyata bagi kemajuan pendidikan inklusi di Indonesia!`}
					</div>
				</div>
			</div>
		</div>
	)
}
