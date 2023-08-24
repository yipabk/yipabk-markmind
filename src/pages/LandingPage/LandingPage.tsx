import { Partners } from '../../components/commons/Partners'
import { AboutUs } from './AboutUs'
import { Actions } from './Actions'
import { LandingHero } from './LandingHero'
import { Programs } from './Programs'

function LandingPage() {
	return (
		<div className='mt-[79px]'>
			<LandingHero />
			<AboutUs />
			<Programs />
			<Actions />
			<div className='flex flex-col justify-center items-center w-100 min-h-[100vh] px-6'>
				<Partners title='Partner Kami' />
			</div>
		</div>
	)
}

export default LandingPage
