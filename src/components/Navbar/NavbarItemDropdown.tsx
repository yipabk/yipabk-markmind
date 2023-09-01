import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { NavMenuItem } from './Navbar'
import { classNames } from '../../helpers/classNames'
import { ChevronDown } from '../icons/ChevronDown'

interface Props {
	item: NavMenuItem
}

export const NavbarItemDropdown = ({ item }: Props) => {
	let timeout: number = -1
	const [isOpen, setOpen] = useState<boolean>(false)

	const handleHover = () => {
		clearTimeout(timeout)
		setOpen(true)
	}

	const handleLeave = () => {
		timeout = setTimeout(() => {
			setOpen(false)
		}, 200)
	}

	return (
		<Popover style={{ transformStyle: 'preserve-3d' }} className='relative z-30 flex w-full md:w-auto'>
			{() => (
				<>
					<Popover.Button
						onMouseEnter={handleHover}
						onMouseLeave={handleLeave}
						className={`w-full py-2 flex items-center text-center justify-center decoration-orange decoration-2 text-xs cursor-pointer hover:opacity-75
                  ${item.isActive ? 'font-bold underline underline-offset-8' : 'font-medium'}`}>
						<span>{item.name}</span>
						<ChevronDown
							className={classNames(
								isOpen ? 'rotate-180 transform' : '',
								'ml-2 group-hover:text-gray-500 duration-200'
							)}
							aria-hidden='true'
						/>
					</Popover.Button>

					<Transition
						show={isOpen}
						as={Fragment}
						enter='transition ease-out duration-200'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-150'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'>
						<Popover.Panel
							onMouseEnter={handleHover}
							onMouseLeave={handleLeave}
							static
							style={{ transform: 'translateZ(-20px)' }}
							className='absolute z-10 top-12 transform max-w-[100px] sm:px-0'>
							<div className='shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transform'>
								<div className='relative grid bg-white'>
									{item.children.map((child) => (
										<a
											key={child.name}
											href={item.linkTo + child.linkTo}
											className={`${item.name === 'PROGRAM' && 'p-3 py-4 pr-10'} ${
												item.name === 'PUBLIKASI' && 'py-4 px-2'
											} flex items-start hover:bg-gray-50 border border-t border-t-gray-100`}>
											<p className={`text-xs font-[500] ${item.name === 'PROGRAM' && 'tracking-[2.16px]'} text-black`}>
												{child.name}
											</p>
										</a>
									))}
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}
