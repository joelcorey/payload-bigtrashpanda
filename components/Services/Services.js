import Link from 'next/link'
import Image from 'next/image'
import { getData, urlFor } from 'util/sanity-util'

export default async function Services() {

	const content = await getData(`
	{
		'services': *[_type == 'service' && isDisplayed != "false"]{
			_id,
			_createdAt,
			name,
			"slug": slug.current,
			"image": image.asset->url,
			"icon": icon.asset->url,
			preferredOrder,
			shortDescription,
			longDescription,
			bulletPointsTitle,
			bulletPoints,
			content
		}
	}
`)
const { location, services, } = content

	return (
		
		<section className="bg-slate-200 text-gray-900">
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

					{services.sort((a, b) => (a.preferredOrder > b.preferredOrder) ? 1 : -1).map((service) => (
													
						<Link
							key={service.name}
							href={`/services/${service.slug}`}
							className="hover:scale-105 transition block rounded border border-gray-900 p-8 shadow-xl transition hover:border-racoon-green-100/95"
						>
							<Image 
								src={urlFor(service.icon).url()}
								alt={service.name}
								width="50"
								height="50"
							/>
							<h2 className="mt-4 text-xl font-bold">{service.name}</h2>
							<p className="mt-1 text-sm">
								{service.shortDescription}
							</p>
						</Link>
					))}

				</div>

				<div className="mt-12 text-center">
					<Link 
						href="/services"
						className="w-5 hover:scale-105 transition px-8 rounded bg-white py-3 text-sm font-medium text-emerald-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
					>
						See all services <span>&rarr;</span>
					</Link>
				</div>
			</div>
		</section>

	)
}