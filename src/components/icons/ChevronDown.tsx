import { SVGProps } from 'react'

export const ChevronDown = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg width='11' height='10' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				id='chevron-down'
				d='M-1.78814e-07 0.196181L10.3923 0.196181L5.19615 9.19618L-1.78814e-07 0.196181Z'
				fill='#D9D9D9'
			/>
		</svg>
	)
}
