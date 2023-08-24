import React from "react";

interface HeaderProps {
	children?: React.ReactNode
	bg: string
	variant: 'black' | 'blue'
	className?: string
}

export const FadingHeader = ({ children = null, bg, className = '', variant }: HeaderProps) => {
	return (
		<div className={`relative overflow-hidden ${className}`}>
			{children}
			<div
				className={`absolute w-full h-full z-[-1] bg-gradient-to-t ${
					variant === 'blue' ? 'from-blue' : 'from-black'
				} to-transparent`}></div>
			<img className='absolute w-full h-full object-cover z-[-2] grayscale' src={bg}></img>
		</div>
	)
}
