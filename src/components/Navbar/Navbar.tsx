import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Navitem from './Navitem'
import { useLocation } from 'react-router-dom'
import { Logo } from '../commons/Logo'
import { NavbarItemDropdown } from './NavbarItemDropdown'

export interface NavMenuItemChildren {
	name: string
	linkTo: string
}

export interface NavMenuItem {
	name: string
	linkTo: string
	isActive: boolean
	children: NavMenuItemChildren[]
}

export const Navbar = () => {
	const { pathname } = useLocation()
	const availableMenus: NavMenuItem[] = [
		{ name: 'HOME', linkTo: '/', isActive: pathname === '/', children: [] },
		{ name: 'TENTANG KAMI', linkTo: '/tentang-kami', isActive: pathname === '/tentang-kami', children: [] },
		{
			name: 'PROGRAM',
			linkTo: '/program',
			isActive: pathname === '/program',
			children: [
				{ name: 'LIFE', linkTo: '/life' },
				{ name: 'RAISE', linkTo: '/raise' },
				{ name: 'TEACH', linkTo: '/teach' },
				{ name: 'CARE', linkTo: '/care' },
			],
		},
		{ name: 'KONTRIBUSI', linkTo: '/kontribusi', isActive: pathname === '/kontribusi', children: [] },
		{ name: 'PARTNER', linkTo: '/partner', isActive: pathname === '/partner', children: [] },
		{
			name: 'PUBLIKASI',
			linkTo: '/publikasi',
			isActive: pathname === '/publikasi',
			children: [
				{ name: 'BERITA TERKINI', linkTo: '#berita-terkini' },
				{ name: 'ARTIKEL', linkTo: '#artikel' },
				{ name: 'NEWSLETTER', linkTo: '#newsletter' },
			],
		},
	]

	return (
		<Popover className='fixed w-full z-50 bg-white'>
			{({ open }) => (
				<>
					<div className='mx-auto px-2 font-montserrat'>
						<div className='flex justify-between items-center border-b-2 border-gray-100 md:space-x-10'>
							<div className='flex justify-start lg:w-0 lg:flex-1'>
								<a href='/'>
									<Logo />
								</a>
							</div>
							<div className='lg:-mr-2 -my-2 md:hidden'>
								<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>Open menu</span>
									<Bars3Icon color='#000' enableBackground='false' height={24} width={24} />
								</Popover.Button>
							</div>
							<Popover.Group as='nav' className='hidden md:flex md:space-x-1 lg:space-x-4'>
								{availableMenus.map((menu) =>
									menu.children.length > 0 ? (
										<NavbarItemDropdown key={`NavItem-${menu.name}`} item={menu} />
									) : (
										<Navitem linkTo={menu.linkTo} isActive={menu.isActive} key={`NavItem-${menu.name}`}>
											{menu.name}
										</Navitem>
									)
								)}
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
												<XMarkIcon color='#000' enableBackground='false' height={24} width={24} />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className='py-6 px-5 space-y-6'>
									<div className='grid grid-cols-2 gap-y-4 gap-x-8'>
										{availableMenus.map((menu) =>
											menu.children.length > 0 ? (
												<NavbarItemDropdown key={`NavItem-${menu.name}`} item={menu} />
											) : (
												<Navitem linkTo={menu.linkTo} isActive={menu.isActive} key={`NavItem-${menu.name}`}>
													{menu.name}
												</Navitem>
											)
										)}
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
