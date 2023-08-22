import { DonateIcon } from '../../components/icons/DonateIcon'
import { ShakeHandIcon } from '../../components/icons/ShakeHandIcon'
import { ActionsBox } from './ActionsBox'
import background from '../../assets/images/landing-page-actions.png'

export const Actions = () => {
	const actions = [
		{
			icon: <DonateIcon />,
			title: 'DONASI',
			subtitle: `untuk bersama wujudkan
       mimpi anak berkebutuhan khusus`,
			buttonText: 'Donasi Sekarang',
			buttonLink: '#',
		},
		{
			icon: <ShakeHandIcon />,
			title: 'JADI RELAWAN',
			subtitle: `untuk buat dampak nyata
       bersama muda mudi Indonesia`,
			buttonText: 'Daftar Sekarang',
			buttonLink: '#',
		},
	]

	return (
		<div className='relative flex flex-col justify-center items-center w-100 min-h-[100vh] px-6 overflow-hidden py-20'>
			<img className='absolute object-cover w-full h-full z-[-2]' src={background} alt='' />
			<div className='absolute bg-gradient-to-b from-paleblue to-paleblue/25 z-[-1] w-full h-full'></div>
			<div
				data-aos='fade-down'
				data-aos-once='true'
				className='text-center text-white text-3xl lg:text-5xl font-display leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]'>
				Giving is The GREATEST Act of GRACE
			</div>
			<div className='flex flex-col lg:flex-row mt-20 gap-24'>
				{actions.map((action) => (
					<ActionsBox
						key={action.title}
						icon={action.icon}
						title={action.title}
						subtitle={action.subtitle}
						buttonText={action.buttonText}
						buttonLink={action.buttonLink}
					/>
				))}
			</div>
		</div>
	)
}
