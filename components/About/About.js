import Link from 'next/link'

export default async function About() {

	return (
		<section>
			<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:h-1/2 lg:grid-cols-2">

					<div className="relative z-10 lg:py-16 rounded-lg">
						<div className="relative h-32 sm:h-80 lg:h-full shadow-xl">
							<img
								alt="House"
								src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=compress&fit=clamp&w=720&q=60"
								className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl"
							/>
						</div>
					</div>

					<div className="relative flex items-center bg-slate-200 rounded-lg">
						<span
							className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 bg-slate-200"
						/>

						<div className="p-8 sm:p-16 lg:p-24 bg-slate-200">
							<h2 className="text-2xl font-bold sm:text-3xl">
								Trash, litter, junk, and debris removal that is affordbale, done fast, and done right.
							</h2>

							<p className="mt-4 mb-4 text-lg text-gray-600">
								Big Trash Panda Junk Removal is a local, veteran, and family owned small business that handles junk removal for local business owners, real-estate agents, home owners, and investors. We are happy to service our clients in Centralio, Longview, Portland, Vancouver, Longbeach, Astoria, and many other of our beautiful Pacific Northwest cities. We are fully licensed and insured. Our home and business debris removal service is designed to not only meet your expectations but to exceed it.
							</p>

							<Link 
								href="contact"
								className="w-5 hover:scale-105 transition px-8 rounded bg-white py-3 text-sm font-medium text-emerald-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
							>
								Contact us <span>&rarr;</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}