
import Link from 'next/link'
import Image from 'next/image'

import { MapPinIcon } from '@heroicons/react/24/outline'

export default function LocationFeatured({ city, state, img, href }) {

	return (
		
		<Link
			// TODO: fix CMS import data from there and have these link to geo location pages
			// Original backup: 
			className="w-64 p-10 m-2 flex flex-col ml-auto mr-auto items-center text-center cursor-pointer hover:shadow-lg hover:scale-105 transition text-emerald-600 hover:text-cyan-800"
			//className="w-64 p-10 m-2 flex flex-col ml-auto mr-auto items-center text-center text-emerald-600"
			href={href}
		>
			<Image 
				className="rounded-lg text-white"
				src={img}
				width="200"
				height="200"
				alt={`A local map icon image of ${city}, ${state}`}
			/>
			<MapPinIcon 
				className="w-20 h-20 -mt-20 "
			/>
			<p className="text-xl font-medium text-zinc-300">{city}, {state}</p>
			
		</Link>

	)
}