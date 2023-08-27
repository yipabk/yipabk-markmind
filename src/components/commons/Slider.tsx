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
		<div
			data-aos='fade-left'
			data-aos-once='true'
			className='grid grid-cols-[56px_1fr_56px] gap-6 justify-between items-center'>
			<div
				className={`rounded-[100%] w-[56px] h-[56px] flex justify-center items-center shadow-md ${
					hasPrev ? 'bg-blue cursor-pointer' : 'bg-blue/20 cursor-not-allowed'
				} `}
				onClick={handlePrev}>
				<ArrowLeft />
			</div>
			<div style={{ gridTemplateColumns: `repeat(${maxItemPerView}, 1fr)` }} className={`gap-8 grid`}>
				{visibleItems.map((item) => renderItem(item))}
			</div>
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
