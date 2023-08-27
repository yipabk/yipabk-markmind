import { useEffect, useRef, useState } from 'react'
import publikasi1 from '../../assets/images/publikasi/publikasi-1.png'
import publikasi2 from '../../assets/images/publikasi/publikasi-2.png'
import publikasi3 from '../../assets/images/publikasi/publikasi-3.png'
import publikasi4 from '../../assets/images/publikasi/publikasi-4.png'
import dyspraxia from '../../assets/images/publikasi/artikel-dyspraxia.png'
import dyslexia from '../../assets/images/publikasi/artikel-dyslexia.png'
import autism from '../../assets/images/publikasi/artikel-autism.png'
import adhd from '../../assets/images/publikasi/artikel-adhd.png'
import Button from '../../components/Button'
import { Slider } from '../../components/commons/Slider'
import useWindowDimensions from '../../helpers/useWindowDimension'
import { ArtikelSliderCard, ArtikelSliderCardProps } from './ArtikelSliderCard'
import { PublikasiHero } from './PublikasiHero'

export const Publikasi = () => {
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
	console.log(targetId)

	useEffect(() => {
		if (refMapping[targetId] !== undefined && refMapping[targetId].current !== null) {
			refMapping[targetId].current?.scrollIntoView()
		}
	}, [targetId])

	useEffect(() => {
		setMaxItem(getMaxItem())
	}, [width, setMaxItem])

	return (
		<div>
			<PublikasiHero />

			<div className='px-4 sm:px-12 lg:px-32 py-16'>
				<div ref={beritaTerkiniRef} id='berita-terkini' className='scroll-m-20 min-h-[60vh] mb-32'>
					<div className='text-4xl font-bold my-6'>Berita Terkini</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-12 sm:px-16'>
						<img src={publikasi1} alt='' className='object-cover w-full md:max-w-[288px] lg:max-w-[388px]' />
						<div className='flex flex-col gap-10'>
							<div className='text-4xl font-bold whitespace-pre-line'>
								{`Aku dan Guru Bisa Belajar 
								Bersama MDRT Foundation`}
							</div>
							<div className='text-justify'>
								Hingga saat ini, sekolah inklusi masih menghadapi tantangan dalam lingkungan sekolah. Melihat kebutuhan
								tersebut, YIPABK pun meluncurkan program “Aku Bisa Belajar” dan “Guru Bisa Belajar” dengan dukungan dana
								dari MDRT Foundation.
							</div>
							<Button linkTo='/publikasi/berita-terkini' className='w-full sm:max-w-[256px]'>
								Baca Lebih Lanjut
							</Button>
						</div>
					</div>
				</div>
				<div id='artikel' ref={artikelRef} className='scroll-m-20 mb-32 flex flex-col'>
					<div className='text-4xl font-bold my-6'>Artikel</div>
					<Slider<ArtikelSliderCardProps>
						key={maxItem}
						items={articles}
						maxItemPerView={maxItem}
						renderItem={(item) => <ArtikelSliderCard key={`${item.title}-${item.id}`} {...item} />}
					/>
				</div>
				<div id='newsletter' ref={newsletterRef} className='scroll-m-20 min-h-[60vh] mb-32'>
					<div className='text-4xl font-bold my-6'>Newsletter</div>
					<div className='flex flex-col md:flex-row justify-center items-center gap-12'>
						<div className='grid grid-cols-[3fr_2fr] grid-rows-2 gap-1'>
							<div className='row-span-2'>
								<img className='w-full h-full object-cover' src={publikasi2} alt='' />
							</div>
							<div>
								<img className='w-full h-full object-cover' src={publikasi3} alt='' />
							</div>
							<div>
								<img className='w-full h-full object-cover' src={publikasi4} alt='' />
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
							<Button
								linkTo='https://drive.google.com/drive/folders/1_3yHKaim5Zaf2crLhh9L5T5EpCmzrWRb'
								className='w-full sm:max-w-[256px]'>
								<div>
									<i>Download</i> di sini!
								</div>
							</Button>
						</div>
					</div>
				</div>
				<div className='min-h-[60vh] mb-32 flex flex-col items-center'>
					<div className='text-center text-lg md:text-2xl font-bold mb-12'>
						Daftar <i>Newsletter</i> Kami!
					</div>
					<div className='w-full justify-center items-center flex flex-col gap-6 mb-12'>
						<div className='text-lg md:text-2xl font-bold w-full justify-center flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='min-w-[5rem] sm:min-w-[10rem]'>Nama</div>
							<input className='bg-grey/25 px-4 py-2 rounded-md w-full md:w-[645px]' type='text' />
						</div>
						<div className='text-lg md:text-2xl font-bold w-full justify-center flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='min-w-[5rem] sm:min-w-[10rem]'>No Telp</div>
							<input className='bg-grey/25 px-4 py-2 rounded-md w-full md:w-[645px]' type='number' />
						</div>
						<div className='text-lg md:text-2xl font-bold w-full justify-center flex flex-col sm:flex-row items-start sm:items-center gap-2'>
							<div className='min-w-[5rem] sm:min-w-[10rem]'>Email</div>
							<input className='bg-grey/25 px-4 py-2 rounded-md w-full md:w-[645px]' type='email' />
						</div>
					</div>
					<Button className='w-96'>Daftar</Button>
				</div>
			</div>
		</div>
	)
}
