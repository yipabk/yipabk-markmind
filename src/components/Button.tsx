import React, { MouseEventHandler } from 'react'

interface ButtonProps {
	linkTo?: string
	children: React.ReactNode
	className?: string
	onClick: MouseEventHandler<HTMLAnchorElement>
}

function Button({ linkTo, children, onClick, className }: ButtonProps) {
	return (
		<a
			onClick={onClick}
			href={linkTo}
			className={`text-base flex justify-center flex-grow-0 cursor-pointer bg-orange text-white font-medium px-3 lg:px-6 py-2 hover:bg-white hover:text-orange border border-transparent hover:border-orange duration-200 ${className}`}>
			{children}
		</a>
	)
}

export default Button
