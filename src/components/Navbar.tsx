import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Navitem from './Navitem'
import { Logo } from './commons/Logo'

interface NavMenuItem {
	name: string
	linkTo: string
	isActive: boolean
}

export const Navbar = () => {
	const availableMenus: NavMenuItem[] = [
		{ name: 'HOME', linkTo: '#', isActive: true },
		{ name: 'TENTANG KAMi', linkTo: '#', isActive: false },
		{ name: 'PROGRAM', linkTo: '#', isActive: false },
		{ name: 'KONTRIBUSI', linkTo: '#', isActive: false },
		{ name: 'PARTNER', linkTo: '#', isActive: false },
		{ name: 'BERITA TERKINI', linkTo: '#', isActive: false },
	]

	return (
		<Popover className='relative bg-white'>
			{({ open }) => (
				<>
					<div className='mx-auto px-4 sm:px-6'>
						<div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
							<div className='flex justify-start lg:w-0 lg:flex-1'>
								<a href='#'>
									<Logo />
								</a>
							</div>
							<div className='-mr-2 -my-2 md:hidden'>
								<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>Open menu</span>
									<Bars3Icon />
								</Popover.Button>
							</div>
							<Popover.Group as='nav' className='hidden md:flex space-x-4'>
								{availableMenus.map((menu) => (
									<Navitem linkTo={menu.linkTo} isActive={menu.isActive}>
										{menu.name}
									</Navitem>
								))}
							</Popover.Group>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter='duration-200 ease-out'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='duration-100 ease-in'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'>
						<Popover.Panel
							focus
							static
							className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
							<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
								<div className='pt-5 pb-6 px-5'>
									<div className='flex items-center justify-between'>
										<div>
											<img className='h-8 w-auto' src='/img/logos/workflow-mark-indigo-600.svg' alt='Workflow' />
										</div>
										<div className='-mr-2'>
											<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
												<span className='sr-only'>Close menu</span>
												<XMarkIcon />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className='py-6 px-5 space-y-6'>
									<div className='grid grid-cols-2 gap-y-4 gap-x-8'>
										{availableMenus.map((menu) => (
											<Navitem linkTo={menu.linkTo} isActive={menu.isActive}>
												{menu.name}
											</Navitem>
										))}
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}
