import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { NavMenuItem } from './Navbar'
import { classNames } from '../../helpers/classNames'
import { ChevronDown } from '../icons/ChevronDown'

interface Props {
	item: NavMenuItem
}

export const NavbarItemDropdown = ({ item }: Props) => {
	const [isOpen, setOpen] = useState<boolean>(false)

	const handleHover = () => {
		setOpen(true)
	}

	const handleLeave = () => {
		setOpen(false)
	}

	return (
		<Popover className='relative'>
			{() => (
				<>
					<Popover.Button
						onMouseEnter={handleHover}
						onMouseLeave={handleLeave}
						className={`flex items-center justify-center decoration-orange decoration-2 mx-4 text-xs cursor-pointer hover:opacity-75
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
							className='absolute z-10 -ml-4 mt-3 transform px-2  max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
							<div className='shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
								<div className='relative grid bg-white'>
									{item.children.map((child) => (
										<a
											key={child.name}
											href={item.linkTo + child.linkTo}
											className='p-3 py-4 pr-10 flex items-start hover:bg-gray-50 border border-t border-t-gray-100'>
											<p className='text-xs font-medium text-gray-900'>{child.name}</p>
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
