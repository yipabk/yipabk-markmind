import { AboutUs } from './AboutUs'
import { LandingHero } from './LandingHero'
import { Programs } from './Programs'

function LandingPage() {
	return (
		<div className='mt-[92px]'>
			<LandingHero />
			<AboutUs />
			<Programs />
			{/* <div className='relative flex justify-center items-center w-100 h-[100vh] overflow-hidden'>
				<img
					className='absolute object-cover w-full h-full z-[-2]'
					src='https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg'
					alt=''
				/>
				<div className='absolute bg-gradient-to-b from-paleblue to-paleblue/25 z-[-1] w-full h-full'></div>
				<div className='text-center text-white text-5xl font-display w-[36rem] tracking-wide leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]'>
					Giving is The GREATEST Act of GRACE
				</div>
			</div>
			<div className='flex flex-col justify-center items-center w-100 h-[100vh]'>
				<div className='text-5xl  font-display mb-4'>Partner Kami</div>
				<div>Logo</div>
			</div> */}
		</div>
	)
}

export default LandingPage
