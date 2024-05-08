import Image from 'next/image'

import styles from "./heroBentoPrimary.module.css";
const { stroke } = styles;

import ImageSlider from '../../components/ImageSlider'
let showBorders = false

const borders = (showBorders) => {
	return showBorders ? 'border border-1 border-black' : ''
}

// testing github actions

let slides = [
	'/img/component/carousel/carousel-1.svg',
	'/img/component/carousel/carousel-2.svg',
	'/img/component/carousel/carousel-3.svg'
]

const HeroBentoPrimary = () => {

	return (
		<div className={`
		h-[100svh] grid grid-cols-6 grid-rows-6 gap-4 m-4
		`}>
			<div className={`
			row-start-2 row-span-3 col-start-1 col-span-2 bg-red-500 rounded-lg
			bg-gradient-to-br from-[#78BE21] to-[#00445C]
			`}>
				<div className={`
				flex flex-col
				`}>
					<p className={`
					bg-white px-4 py-2 mx-2 mt-2
					text-6xl font-bold
					mix-blend-screen
					rounded-t-lg
					`}>
						Big Trash
					</p>
					<p className={`
					bg-white px-4 mx-2
					text-6xl font-bold
					mix-blend-screen
					`}>
						Panda <br /><div className={`text-3xl font-normal`}>LLC</div>
					</p>
					<p className={`
					pr-2 mx-2 mt-2
					text-2xl
					`}>
						What we do: litter, junk, and garbage removal. We turn big problems in to small solutions for your peace of mind.
					</p>

				</div>
			
			</div>

			<div className={`
			row-start-5 row-span-1 col-start-1 col-span-2 rounded-lg
			${borders(true)}
			`}>
			
				<div className={`
				flex flex-row justify-center
				bg-white 
				text-4xl font-bold
				mix-blend-screen
				px-4 py-2 m-2
				rounded-tr-lg rounded-bl-lg
				${borders(true)}
				
				`}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
						className="w-9 h-auto mr-4">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
					</svg>
					<div>971-260-0144</div>
				</div>
				<div className={`
				flex flex-row justify-center
				bg-white 
				text-lg font-bold
				mix-blend-screen
				px-4 py-2 m-2
				`}>
				Click the number to give us a call or text!</div>
			</div>

			<div className={`
			relative row-start-5 row-span-2 col-start-3 col-span-3 bg-red-500 rounded-lg
			`}>
				<ImageSlider slides={slides} />
			</div>

			<div className={`
			relative flex flex-col justify-between
			row-start-1 col-start-3 col-span-4 row-span-4 bg-slate-500
			overflow-hidden
			rounded-lg
			${borders(showBorders)}
			`}>
				<Image
					className={`
					absolute object-cover
					`}
					src="/img/blocks/hero/glad-young-couple-sitting-couch-surrounded-by-boxes-large.jpg"
					fill
					alt="Young woman swinging on a swing set at sunset. Peace of mind."
				/>
				<div className={`
					w-[75%]
					text-4xl font-bold
					bg-slate-300 px-4 py-2 m-2
					rounded-tr-lg rounded-bl-lg
					mix-blend-screen
					${borders(showBorders)}
					${stroke}
				`}>litter, junk, and garbage removal</div>
				<div className={`
					w-[60%]
					text-4xl font-bold
					bg-slate-300 px-4 py-2 m-2
					rounded-tr-lg rounded-bl-lg
					mix-blend-screen
					${borders(showBorders)}
					${stroke}
				`}>Solutions for peace of mind</div>
			</div>

		</div>
	)
}

export default HeroBentoPrimary