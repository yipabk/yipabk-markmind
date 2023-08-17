import ProgramDisplayBox from './ProgramDisplayBox'

export const Programs = () => {
	return (
		<div className='flex flex-col justify-center items-center w-100 py-24'>
			<div className='flex flex-col items-center mb-16 w-full'>
				<div className='text-3xl md:text-5xl font-display mb-4'>Program-Program Kami</div>
				<div className='bg-orange h-1 w-[80%] max-w-[42rem]'></div>
			</div>
			<div className='grid grid-cols-2 lg:flex'>
				<ProgramDisplayBox
					hoverText='TEST'
					className='w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2'
					bgImage='https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg'>
					LIFE
				</ProgramDisplayBox>
				<ProgramDisplayBox
					hoverText='Resource, Awareness, Inspiration, Stories, Education'
					className='w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2'
					bgImage='https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*'>
					RAISE
				</ProgramDisplayBox>
				<ProgramDisplayBox
					hoverText='TEST'
					className='w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2'
					bgImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vxA1uuUaujpLm07PPJkoqTeDs9HGCKXCtg&usqp=CAU'>
					TEACH
				</ProgramDisplayBox>
				<ProgramDisplayBox
					hoverText='TEST'
					className='w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] xl:w-[16rem] xl:h-[20rem] m-2'
					bgImage='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg'>
					CARE
				</ProgramDisplayBox>
			</div>
		</div>
	)
}
