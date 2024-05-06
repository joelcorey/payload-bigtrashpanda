'use client';

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import {
	Bars2Icon,
	XMarkIcon,
	AtSymbolIcon,
	CubeIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ClipboardDocumentCheckIcon,
  IdentificationIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline'
// import { ChevronDownIcon } from '@heroicons/react/solid'

const menuLinks = [
  {
    name: 'SERVICES',
    description: 'Get a better understanding of the sericves Tmutla offers.',
    href: '/services',
    icon: CubeIcon,
  },
	{
    name: 'CONTACT',
    description: 'Reach out and contact us',
    href: '/contact',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
	{
    name: 'LOCATIONS',
    description: 'We offer services in these cities and more',
    href: '/locations',
    icon: MapPinIcon,
  },
  // {
  //   name: 'RESOURCES',
  //   description: 'Build your knowledge through our expertise',
  //   href: '/resources',
  //   icon: ClipboardDocumentCheckIcon,
  // },
	{
    name: 'ABOUT',
    description: 'Learn about us, who we are, and what we do',
    href: '/about',
    icon: IdentificationIcon,
  },
	 // {
  //   name: 'EVENTS',
  //   description: 'Participate in one of our events, ask questions, get involved, and learn.',
  //   href: '/events',
  //   icon: AtSymbolIcon,
  // },
  // {
  //   name: 'ARTICLES',
  //   description: "See what we have been up to through out industry insights.",
  //   href: '/articles',
  //   icon: AtSymbolIcon,
  // },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Navbar() {
  return (
    <Popover className="relative w-full z-50 border-gray-900 border-b-2">
      {({ open }) => (
        <>
          <div className="w-full mx-auto sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
								<Link
									href='/'
									className="flex items-center flex hover:scale-105 transition"
								>
									<span className="sr-only">Workflow</span>
									<img
										className="w-18 h-14 md:w-32 md:h-24 "
										src="/raccoon-200x139.png"
										alt="Big Trash Panda Logo"
									/>
									<h1
										className='hidden lg:block ml-8 text-lg lg:text-xl font-medium w-full'
									>
											BIG TRASH PANDA
									</h1>
								</Link>
              </div>
              <div className="lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-red hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red">
                  <>
										<span className="sr-only">Open menu</span>
                  	<Bars2Icon className="h-6 w-6" aria-hidden="true" />
									</>
								</Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden lg:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    
										<Transition
											show={open}
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 translate-y-1"
											enterTo="opacity-100 translate-y-0"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 translate-y-0"
											leaveTo="opacity-0 translate-y-1"
										>
											<Popover.Panel
												static
												className="absolute bottom-0 z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
											>
												<div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
													<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
														{menuLinks.map((item) => (
															<Link
																key={item.name}
																href={item.href}
																className="-m-3 p-3 flex items-start hover:bg-gray-50"
															>
																<div className="flex">
																	<item.icon className="flex-shrink-0 h-6 w-6 text-red" aria-hidden="true" />
																	<div className="ml-4">
																		<p className="text-base font-medium text-gray-900">{item.name}</p>
																		<p className="mt-1 text-sm text-gray-500">{item.description}</p>
																	</div>
																</div>
															</Link>
														))}
													</div>
												</div>
											</Popover.Panel>
										</Transition>

                  )}
                </Popover>
								
								{menuLinks.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="px-2 py-4 flex items-center text-gray-900 hover:text-gray-700 hover:shadow-lg hover:scale-120 transition ease-in-out delay-250 hover:scale-105 transition"
									>
										<span className="text-base font-medium">{item.name}</span>
									</Link>
								))}	
							
              </Popover.Group>
              
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 bottom-0 inset-x-0 p-2 transition transform origin-top-right "
            >
              <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between text-xl">
                    <div>
												BIG TRASH PANDA
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid">
                      {menuLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex py-2 my-3 items-center hover:bg-gray-50 flex"
                        >
													<item.icon className="flex-shrink-0 h-6 w-6 text-red-dark" aria-hidden="true" />
													<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 space-y-6 text-xl">
									<div className="lg:hidden w-2/3 pt-6 py-2 px-4 flex flex-col border-t-4">
										<a className="py-3 w-full" href="tel:1-503-884-7615">971-260-0144</a>
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