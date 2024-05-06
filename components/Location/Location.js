import Link from 'next/link'
import Image from 'next/image'

import LocationFeatured from './LocationFeatured'

export default function Location() {

	return (
		
		<section className="bg-zinc-700 text-zinc-100">
			<div className="flex flex-col align-center mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">

				<div className="max-w-lg self-center text-center">
					<h2 className="text-3xl font-bold sm:text-4xl">Cities we serve</h2>
					<p>We service a large area. If you don&apos;t see your city listed here, please <Link href="/contact" className="underline">contact</Link> us anyway. Thank you!</p>
				</div>

				<div className="px-3 md:lg:xl:px-40 py-20">
        	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<LocationFeatured city="Seaside" href="locations/seaside" state="Oregon" img="/img/component/locations/seasideor.png" />
						<LocationFeatured city="Astoria" href="locations/astoria" state="Oregon" img="/img/component/locations/astoriaor.png" />
						<LocationFeatured city="Clatskanie" href="locations/clatskanie" state="Oregon" img="/img/component/locations/clatskanieor.png" />
						<LocationFeatured city="Longview" href="locations/longview" state="Washington" img="/img/component/locations/longviewwa.png" />
						<LocationFeatured city="St. Helens" href="locations/st-thelens" state="Oregon" img="/img/component/locations/sthelensor.png" />
						<LocationFeatured city="Battleground" href="locations/battleground" state="Washington" img="/img/component/locations/battlegroundwa.png" />
					</div>
				</div>

				<div className="max-w-lg text-left mb-2 self-center text-center">
					<p className="mt-8 mb-2 text-xl">
						We service a large area. Please call us if you aren&apos;t inside our service area, we would be happy to discuss options. For a list of locations please click below.
					</p>
					<p className=" text-xl">
						<Link 
							href="locations"
							className='underline text-bold'
						>
							See all locations 
						</Link>
					</p>
				</div>	

			</div>
		</section>

	)
}