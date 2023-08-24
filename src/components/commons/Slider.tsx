import { useState, ReactNode } from 'react'
import { ArrowLeft } from '../icons/ArrowLeft'
import { ArrowRight } from '../icons/ArrowRight'

interface Props<T> {
	items: T[]
	maxItemPerView: number
	renderItem: (item: T) => ReactNode
}

export function Slider<T>({ items, maxItemPerView, renderItem }: Props<T>) {
	const [visibleItems, setVisibleItems] = useState(items.slice(0, maxItemPerView))
	const [currentIndex, setCurrentIndex] = useState(0)
	const hasPrev = currentIndex !== 0
	const hasNext = currentIndex !== Math.ceil(items.length / maxItemPerView) - 1

	const handlePrev = () => {
		if (!hasPrev) {
			return
		}
		const newIndex = currentIndex - 1
		setCurrentIndex(newIndex)
		setVisibleItems(items.slice(newIndex * maxItemPerView, newIndex * maxItemPerView + maxItemPerView))
	}

	const handleNext = () => {
		if (!hasNext) {
			return
		}
		const newIndex = currentIndex + 1
		setCurrentIndex(newIndex)
		setVisibleItems(items.slice(newIndex * maxItemPerView, newIndex * maxItemPerView + maxItemPerView))
	}

	return (
		<div data-aos='fade-left' data-aos-once='true' className='flex gap-6 items-center ml-auto'>
			<div
				className={`rounded-[100%] w-[56px] h-[56px]  flex justify-center items-center shadow-md ${
					hasPrev ? 'bg-blue cursor-pointer' : 'bg-blue/20 cursor-not-allowed'
				} `}
				onClick={handlePrev}>
				<ArrowLeft />
			</div>
			<div className='gap-8 flex items-center'>{visibleItems.map((item) => renderItem(item))}</div>
			<div
				className={`rounded-[100%] w-[56px] h-[56px]  flex justify-center items-center shadow-md ${
					hasNext ? 'bg-blue cursor-pointer' : 'bg-blue/20 cursor-not-allowed'
				} `}
				onClick={handleNext}>
				<ArrowRight />
			</div>
		</div>
	)
}
