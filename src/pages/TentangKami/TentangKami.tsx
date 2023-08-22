import { useEffect, useState } from 'react'
import team1 from '../../assets/images/team-1.png'
import team2 from '../../assets/images/team-2.png'
import team3 from '../../assets/images/team-3.png'
import team4 from '../../assets/images/team-4.png'
import team5 from '../../assets/images/team-5.png'
import team6 from '../../assets/images/team-6.png'
import team7 from '../../assets/images/team-7.png'
import team8 from '../../assets/images/team-8.png'
import team9 from '../../assets/images/team-9.png'
import { FadingHeader } from '../../components/commons/FadingHeader'
import { Slider } from '../../components/commons/Slider'
import useWindowDimensions from '../../helpers/useWindowDimension'
import { TeamCard, TeamCardProps } from './TeamCard'

export const TentangKami = () => {
	const peoples: TeamCardProps[] = [
		{
			image: team1,
			title: 'Ketua Dewan Pembina',
		},
		{
			image: team2,
			title: 'Anggota Dewan Pembina',
		},
		{
			image: team3,
			title: 'Anggota Dewan Pembina',
		},
		{
			image: team4,
			title: 'Founder Bentara Campus',
		},
		{
			image: team5,
			title: 'Dewan Pengawas',
		},
		{
			image: team6,
			title: 'Ketua Dewan Pengurus',
		},
		{
			image: team7,
			title: 'Wakil Ketua Dewan Pengurus',
		},
		{
			image: team8,
			title: 'Sekretaris Dewan Pengurus',
		},
		{
			image: team9,
			title: 'Bendahara Dewan Pengurus',
		},
	]
	const { width } = useWindowDimensions()
	const getMaxItem = () => {
		if (width >= 1280) {
			return 3
		}
		if (width >= 640) {
			return 2
		}

		return 1
	}

	const [maxItem, setMaxItem] = useState(getMaxItem())

	useEffect(() => {
		setMaxItem(getMaxItem())
	}, [width, setMaxItem])

	return (
		<div>
			<FadingHeader
				variant='black'
				className='flex justify-center items-end w-full h-[50vh]'
				bg='https://images.fineartamerica.com/images-medium-large/attentive-cat-in-black-and-white-alex-ag.jpg'>
				<div className='text-white font-display text-5xl mb-12 tracking-wide'>TENTANG KAMI</div>
			</FadingHeader>
			<div>
				<div className='px-6 sm:px-12 md:px-24 lg:px-56 w-full py-12 flex justify-center items-center flex-col'>
					<div className='mb-24'>
						<div className='mb-6 tracking-wide text-justify'>
							Yayasan Indonesia Peduli Anak Berkebutuhan Khusus (YIPABK) berdiri tahun 2012 dengan akte notaris Linda
							Herawati Nomor 77 tanggal 28 Juni 2012.
						</div>
						<div className='mb-6 tracking-wide text-justify'>
							Melihat besarnya jumlah anak berkebutuhan khusus (ABK) di sekitar yang belum mendapatkan penanganan dan
							pendidikan sesuai kebutuhan mereka, membangkitkan kepedulian para pendiri YIPABK akan masa depan generasi
							muda Indonesia.
						</div>
						<div className='mb-6 tracking-wide text-justify'>
							Sekelompok pendidik yang terdiri atas guru, orang tua, serta pemerhati anak pun berkumpul dan berpadu
							tangan, membentuk program-program holistik guna membantu anak dengan ketunaan fisik, mental, kognisi,
							maupun sosial atau gangguan perilaku.
						</div>
						<div className='mb-6 tracking-wide text-justify'>
							Mewujudkan pendidikan yang merata bagi generasi penerus bangsa adalah komitmen kami. YIPABK akan terus
							berupaya hingga setiap anak Indonesia memperoleh kesempatan yang sama untuk bertumbuh, berkembang, serta
							menyambut masa depan yang lebih cerah.
						</div>
					</div>
				</div>
				<div className='px-6 sm:px-12 md:px-24 lg:px-56 w-full min-h-[80vh] lg:min-h-[100vh] py-16'>
					<div className='flex flex-col xl:flex-row mb-16 gap-6 lg:gap-16'>
						<img
							className='w-96 h-64 object-cover'
							src='https://images.unsplash.com/photo-1603157259666-71adcb873119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
							alt=''
						/>
						<div className='relative'>
							<div className='font-display text-4xl tracking-wide mb-6'>VISI</div>
							<div>
								“Terwujudnya Indonesia dengan anak-anak yang bahagia dan memiliki kesempatan pendidikan yang sama.”
							</div>
							<div className='bg-white w-[5.5rem] h-[4.5rem] absolute top-0 left-[-5.5rem]'></div>
							<div className='bg-orange w-[2rem] h-[2rem] absolute top-[2rem] left-[-5rem]'></div>
							<div className='bg-orange w-[14rem] h-[0.14rem] absolute top-[2.93rem] left-[-5rem]'></div>
						</div>
					</div>
					<div className='flex flex-col xl:flex-row gap-6 lg:gap-16'>
						<img
							className='w-96 h-64 object-cover'
							src='https://images.unsplash.com/photo-1603157259666-71adcb873119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
							alt=''
						/>
						<div className='relative'>
							<div className='font-display text-4xl tracking-wide mb-6'>MISI</div>
							<div>
								<div className='font-bold mb-4 '>
									Advocating, Creating, Educating Special Needs Children in Indonesia
								</div>
								<ol className='ml-4 list-decimal text-justify'>
									<li>
										Advocate - Anak-anak yang memiliki keterbatasan dalam perkembangan maupun akses layanan pendidikan
									</li>
									<li>
										Create - Menciptakan kesempatan, ruang/fasilitas, lingkungan, pelayanan, pendidikan dan lapangan
										pekerjaan bagi anak-anak berkebutuhan khusus
									</li>
									<li>
										Educate - Mengedukasi seluruh elemen masyarakat melalui berbagai kegiatan agar memiliki kepedulian,
										kesadaran dan pemahaman yang baik terhadap penanganan dan pendidikan anak-anak berkebutuhan khusus
									</li>
								</ol>
							</div>
							<div className='bg-white w-[5.5rem] h-[4.5rem] absolute top-0 left-[-5.5rem]'></div>
							<div className='bg-orange w-[2rem] h-[2rem] absolute top-[2rem] left-[-5rem]'></div>
							<div className='bg-orange w-[14rem] h-[0.14rem] absolute top-[2.93rem] left-[-5rem]'></div>
						</div>
					</div>
				</div>
				<div className='w-full h-[75vh] py-24 px-4 sm:px-6 md:px-12 lg:px-24 items-center flex flex-col xl:flex-row gap-12'>
					<div className='text-4xl ml-4 xl:ml-16 whitespace-pre-line text-center xl:text-start font-display underline underline-offset-8 decoration-orange tracking-wide'>
						{`Meet Our
						 Team`}
					</div>
					<Slider<TeamCardProps>
						key={maxItem}
						items={peoples}
						maxItemPerView={maxItem}
						renderItem={(item) => <TeamCard key={item.title} {...item} />}
					/>
				</div>
			</div>
		</div>
	)
}
