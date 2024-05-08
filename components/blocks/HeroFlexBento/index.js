import Image from "next/image"

import ImageSlider from "../../ImageSlider"

let slides = [
	{
		'backgroundColor': '#374151',
		'title': 'Junk removal',
		'imageUrl': '/img/component/imageSlider/high-angle-house-interior-with-clutter.jpg',
		'imageAlt': '',
		'href': 'junk-removal'
	},
	{
		'backgroundColor': '#4b5563',
		'title': 'Litter removal',
		'imageUrl': '/img/component/imageSlider/person-doing-community-service-by-collecting-trash.jpg',
		'imageAlt': '',
		'href': 'litter-removal'
	},
	{
		'backgroundColor': '#374151',
		'title': 'Garbage removal',
		'imageUrl': '/img/component/imageSlider/old-rusty-junk-garbage-steel-rubber.jpg',
		'imageAlt': '',
		'href': 'garbage-removal'
	},
	// group-asia-young-creative-people-smart-casual-wear-discussing-business-brainstorming
	{
		'backgroundColor': '#374151',
		'title': 'See all that we do',
		'imageUrl': '/img/component/imageSlider/group-asia-young-creative-people-smart-casual-wear-discussing-business-brainstorming.jpg',
		'imageAlt': '',
		'href': 'services'
	},
]
export default function Component() {
  return (
    <section className="h-[80svh] flex flex-col md:flex-row m-4">

			{/* left column / top*/}
			<div className={`
			relative
		  h-full w-full md:w-1/2
			mr-2
			flex flex-col
			rounded-3xl
			overflow-hidden
			bg-[#252525]
			`}>

				<div className={`
				flex items-center
				text-5xl text-zinc-300 font-extrabold
				absolute top-[15%] left-[25px]
				z-10
				`}>
					Junk, litter, and garbage removal
				</div>

				<div className={`
				flex items-center
				text-2xl text-zinc-300
				absolute top-[40%] left-[25px]
				z-10
				`}>
					We turn big problems in to small solutions
				</div>

				<div className={`
				absolute inset-0 top-[50%] left-[25px]
				`}>
					<Image
					className={`
					object-cover 
					rounded-tl-3xl
					`}
					src='/img/blocks/hero/glad-young-couple-sitting-couch-surrounded-by-boxes-large.jpg'
					fill
					alt="Young woman swinging on a swing set at sunset. Peace of mind."
					/>
				</div>

			</div>

			{/* right column / bottom*/}
			<div className={`
			relative
		  h-full w-full md:w-1/2
			mr-2 md:ml-2
			flex flex-col
			rounded-3xl
			overflow-hidden
			mt-4 md:mt-0 
			`}>

				{/* upper row */}
				<div className={`
				h-1/2
				relative
				rounded-3xl
				bg-[#d7d9dd]
				overflow-hidden
				`}>
					<ImageSlider slides={slides}/>
				</div>

				{/* lower row */}
				<div className={`
				h-1/2 pt-4
				relative flex
				
				`}>

					<a href='/about' className={`
					relative
					w-full mr-2
					rounded-3xl
					bg-[#fffa8f]
					transform transition duration-500 hover:scale-105
					`}>

						<div className={`
						flex flex-row space-between 
						absolute top-[5%] left-[25px] right-[25px]
						z-10
						`}>
							<div>
								Discover what<br /> drives us.
							</div>
						</div>

						<div className={`
						flex flex-row space-between 
						absolute top-[5%] right-[25px]
						z-10
						`}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-8">
								<path strokeLinecap="round"  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>

						</div>

						<div className={`
						flex items-center
						text-4xl
						absolute bottom-[5%] left-[25px]
						z-10
						`}>
							About us
						</div>
						
					</a>


					<a href='tel:+19712600144' className={`
					relative
					w-full ml-2
					rounded-3xl
					bg-[#6CC18A]
					transform transition duration-500 hover:scale-105
					`}>

						<div className={`
						flex
						absolute top-[5%] left-[25px] right-[25px]
						z-10
						`}>
							<div>
								Have some<br /> questions?
							</div>
						</div>

						<div className={`
						flex flex-row space-between 
						absolute top-[5%] right-[25px]
						z-10
						`}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
							</svg>
						</div>

						<div className={`
						flex items-center
						text-4xl
						absolute bottom-[5%] left-[25px]
						z-10
						`}>
							Call us
						</div>

					</a>
					
				</div>

			</div>
      
    </section>
  )
}