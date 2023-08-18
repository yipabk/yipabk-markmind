import React from 'react'

interface BoxProps {
	children: React.ReactNode
	bgImage: string
	hoverText: string
	className?: string
}

function ProgramDisplayBox(props: BoxProps) {
	return (
		<div
			className={`flex justify-center items-center relative overflow-hidden group cursor-pointer ${props.className}`}>
			<div className='top-0 left-0 bg-brown/50 group-hover:bg-transparent duration-200 absolute w-full h-full z-[-1]'></div>
			<img className='top-0 left-0 absolute object-cover w-full h-full z-[-2]' src={props.bgImage}></img>
			<div className={`text-white font-display text-4xl md:text-5xl opacity-100 group-hover:opacity-0 duration-200`}>
				{props.children}
			</div>
			<div
				className={`text-white font-display text-xl md:text-2xl duration-200 group-hover:translate-y-0 flex justify-center 
                  translate-y-[100%] bg-brown absolute py-4 bottom-0 left-0 right-0 text-center`}>
				{props.hoverText}
			</div>
		</div>
	)
}

export default ProgramDisplayBox
