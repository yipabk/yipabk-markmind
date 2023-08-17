import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	className?: string
}

function Button(props: ButtonProps) {
	return (
		<div
			className={`text-base flex justify-center flex-grow-0 cursor-pointer bg-orange text-white font-medium px-3 lg:px-6 py-2 ${props.className}`}>
			{props.children}
		</div>
	)
}

export default Button
