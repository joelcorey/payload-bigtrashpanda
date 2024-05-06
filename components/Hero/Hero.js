import Image from 'next/image'
import Link from 'next/link'
import OverTitle from '../OverTitle'

export default function Hero() {

	// let bg = 'bg-gray-900'
	let bg = 'bg-gradient-to-br from-slate-600 to-gray-900'

	return (
		<section className={`${bg}`}>
			<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 lg:pb-28">
				<div className="mr-auto place-self-center lg:col-span-7">

					<OverTitle text='a junk removal company' />

					<p 
						className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white"
					>
						Turning big problems <br />in to small solutions.
					</p>

					{/* TODO: Use similar inline links with next/link and link to terms. Good for interal SEO and SEO in general  */}
					{/* <p 
						className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
					>
						This free and open-source landing page template was built using the utility classes from <a href="https://tailwindcss.com" className="hover:underline"
					>
						Tailwind CSS</a> and based on the components from the <a href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite Library</a> and the <a href="https://flowbite.com/blocks/" className="hover:underline">Blocks System</a>.
					</p> */}

					<p 
						className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
					>
						We handle all of your junk removal, trash collection, and debris deletion needs.
					</p>

					<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
					
						<Link 
							href="/services"
							className="hover:scale-105 transition block w-full rounded bg-white px-12 py-3 text-lg font-medium text-emerald-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
						>
							Services <span>&rarr;</span>
						</Link>

						<Link 
							href="tel:+19712600144"
							className="hover:scale-105 transition block w-full rounded px-12 py-3 text-lg font-medium text-white shadow bg-emerald-600 hover:bg-cyan-800 focus:outline-none focus:ring sm:w-auto"
						>
							Call now! <span>&rarr;</span>
						</Link> 
							
					</div>
				</div>
				<div className="hidden lg:mt-4 lg:col-span-5 lg:flex">
					<Image 
						width='200'
						height='200'
						className="w-full h-auto rounded-lg shadow-lg"
						src='/img/component/raccoon/001.png'
						alt="A baby trash panda (raccoon)"
					/>
				</div>                
			</div>
    </section>

	)
}
