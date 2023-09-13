import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import adhd from '../../assets/images/publikasi/artikel-adhd.png'
import autism from '../../assets/images/publikasi/artikel-autism.png'
import dyslexia from '../../assets/images/publikasi/artikel-dyslexia.png'
import dyspraxia from '../../assets/images/publikasi/artikel-dyspraxia.png'
import publikasi1 from '../../assets/images/publikasi/publikasi-1.png'
import newsletter from '../../assets/images/publikasi/newsletter.png'
import Button from '../../components/Button'
import { Slider } from '../../components/commons/Slider'
import useWindowDimensions from '../../helpers/useWindowDimension'
import { ArtikelSliderCard, ArtikelSliderCardProps } from './ArtikelSliderCard'
import { PublikasiHero } from './PublikasiHero'
import { toast } from 'react-toastify'

export const Publikasi = () => {
	const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
	const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
	const apiKey = import.meta.env.VITE_EMAIL_API_KEY

	const articles: ArtikelSliderCardProps[] = [
		{
			id: '1',
			image: dyspraxia,
			title: 'What is Dyspraxia?',
			content: 'Seseorang dengan dyspraxia/dispraksia mempunyai masalah dalam membuat ide, perencanaan, dan...',
			linkTo: '/artikel/dyspraxia',
		},
		{
			id: '2',
			image: dyslexia,
			title: 'What is Dyslexia?',
			content: 'Kata disleksia berasal dari kata “dys” yang berarti gangguan atau ketidakmampuan, dan kata...',
			linkTo: '/artikel/dyslexia',
		},
		{
			id: '3',
			image: autism,
			title: 'What is Autism?',
			content: 'Seseorang dengan dyspraxia/dispraksia mempunyai masalah dalam membuat ide, perencanaan, dan...',
			linkTo: '/artikel/autism',
		},
		{
			id: '2',
			image: dyslexia,
			title: 'What is Dyslexia?',
			content: 'Kata disleksia berasal dari kata “dys” yang berarti gangguan atau ketidakmampuan, dan kata...',
			linkTo: '/artikel/dyslexia',
		},
		{
			id: '3',
			image: autism,
			title: 'What is Autism?',
			content: 'Seseorang dengan dyspraxia/dispraksia mempunyai masalah dalam membuat ide, perencanaan, dan...',
			linkTo: '/artikel/autism',
		},
		{
			id: '4',
			image: adhd,
			title: 'What is ADHD?',
			content:
				'Pernahkah kita merasa sulit memusatkan perhatian, seakan begitu banyak hal mengganggu pikiran sehingga tidak bisa...',
			linkTo: '/artikel/adhd',
		},
	]
	const beritaTerkiniRef = useRef<HTMLDivElement>(null)
	const artikelRef = useRef<HTMLDivElement>(null)
	const newsletterRef = useRef<HTMLDivElement>(null)
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')

	const refMapping: {
		[index: string]: React.RefObject<HTMLDivElement>
	} = {}

	refMapping['berita-terkini'] = beritaTerkiniRef
	refMapping['artikel'] = artikelRef
	refMapping['newsletter'] = newsletterRef

	const { width } = useWindowDimensions()
	const getMaxItem = () => {
		if (width >= 1280) {
			return 3
		}
		if (width >= 768) {
			return 2
		}

		return 1
	}

	const [maxItem, setMaxItem] = useState(getMaxItem())
	const targetId = window.location.hash.substring(1)

	useEffect(() => {
		if (refMapping[targetId] !== undefined && refMapping[targetId].current !== null) {
			refMapping[targetId].current?.scrollIntoView()
		}
	}, [targetId])

	const handleSendEmail = async () => {
		const templateParams = {
			name,
			phoneNumber,
			email,
		}

		try {
			const res = await emailjs.send(serviceId, templateId, templateParams, apiKey)
			if (res.status === 200) {
				toast('Berhasil mendaftar!', { type: 'success' })
			}
		} catch (error) {
			toast('Gagal mendaftar!', { type: 'error' })
		}
	}

	useEffect(() => {
		setMaxItem(getMaxItem())
	}, [width, setMaxItem])

	return (
		<div>
			<PublikasiHero />
			<div className='px-4 sm:px-12 lg:px-32 py-16 font-montserrat'>
				<div ref={beritaTerkiniRef} id='berita-terkini' className='scroll-m-20 min-h-[60vh] mb-32'>
					<div data-aos='fade-down' data-aos-once='true' className='text-4xl font-bold mt-6 mb-14'>
						Berita Terkini
					</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-12 sm:px-16'>
						<img
							data-aos='fade-right'
							data-aos-once='true'
							src={publikasi1}
							alt=''
							className='object-cover w-full md:max-w-[288px] lg:max-w-[388px]'
						/>
						<div data-aos='fade-left' data-aos-once='true' className='flex flex-col gap-10'>
							<div className='text-4xl font-bold whitespace-pre-line'>
								{`Program Aku Bisa Belajar dan 
								Program Guru Bisa Belajar 
								bersama MDRT Foundation`}
							</div>
							<div className='text-justify'>
								Hingga saat ini, YIPABK dan MDRT Foundation telah membantu 90 Peserta Didik Berkebutuhan Khusus
								mendapatkan surat asesmen dan melatih 53 pendidik untuk siap melayani PDBK di sekolah masing-masing
							</div>
							<Button
								linkTo='/publikasi/berita-terkini'
								className='w-full sm:max-w-[256px] h-[56px] text-center flex items-center'>
								Baca Lebih Lanjut
							</Button>
						</div>
					</div>
				</div>
				<div id='artikel' ref={artikelRef} className='scroll-m-20 mb-32 flex flex-col'>
					<div data-aos='fade-down' data-aos-once='true' className='text-4xl font-bold mt-6 mb-14'>
						Artikel
					</div>
					<Slider<ArtikelSliderCardProps>
						key={maxItem}
						items={articles}
						maxItemPerView={maxItem}
						renderItem={(item) => <ArtikelSliderCard key={`${item.title}-${item.id}`} {...item} />}
					/>
				</div>
				<div id='newsletter' ref={newsletterRef} className='scroll-m-20 min-h-[60vh] mb-32'>
					<div data-aos='fade-down' data-aos-once='true' className='text-4xl font-bold mt-6 mb-14'>
						Newsletter
					</div>
					<div className='flex flex-col lg:grid md:grid-cols-[3fr_2fr] items-center gap-24'>
						<div data-aos='fade-right' data-aos-once='true'>
							<img className='w-full object-cover' src={newsletter} alt='' />
						</div>

						<div data-aos='fade-left' data-aos-once='true' className='flex flex-col gap-10'>
							<div className='text-justify'>
								Dapatkan informasi terkini seputar kegiatan YIPABK, edukasi terkait anak berkebutuhan khusus, serta
								cerita dari mereka yang PEDULI setiap bulannya langsung di Inbox Anda!
							</div>
							<div className='text-3xl font-bold'>
								Tertarik membaca koleksi <i>Newsletter</i> kami?
							</div>
							<Button
								linkTo='https://drive.google.com/drive/folders/1_3yHKaim5Zaf2crLhh9L5T5EpCmzrWRb'
								className='w-full sm:max-w-[256px] h-[56px] text-center flex items-center'>
								<div>
									<i>Download</i> di sini!
								</div>
							</Button>
						</div>
					</div>
				</div>
				<div data-aos='fade-down' data-aos-once='true' className='min-h-[60vh] mb-32 flex flex-col items-center'>
					<div className='text-center text-lg md:text-2xl font-bold mb-12'>
						Daftar <i>Newsletter</i> Kami!
					</div>
					<div className='w-full justify-center items-center flex flex-col gap-6 mb-12'>
						<div className='text-lg md:text-2xl font-bold w-full justify-center flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='min-w-[5rem] sm:min-w-[10rem]'>Nama</div>
							<input
								className='bg-grey/25 px-4 py-2 rounded-md w-full md:w-[645px]'
								onChange={(e) => setName(e.target.value)}
								type='text'
							/>
						</div>
						<div className='text-lg md:text-2xl font-bold w-full justify-center flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='min-w-[5rem] sm:min-w-[10rem]'>No Telp</div>
							<input
								className='bg-grey/25 px-4 py-2 rounded-md w-full md:w-[645px]'
								onChange={(e) => setPhoneNumber(e.target.value)}
								type='tel'
								pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
							/>
						</div>
						<div className='text-lg md:text-2xl font-bold w-full justify-center flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='min-w-[5rem] sm:min-w-[10rem]'>Email</div>
							<input
								className='bg-grey/25 px-4 py-2 rounded-md w-full md:w-[645px]'
								onChange={(e) => setEmail(e.target.value)}
								type='email'
							/>
						</div>
					</div>
					<Button onClick={handleSendEmail} className='w-[200px] h-[56px] flex items-center'>
						Daftar
					</Button>
				</div>
			</div>
		</div>
	)
}
