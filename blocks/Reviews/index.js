const reviews = [
	{
		stars: 5,
		text: 'Joel did a great job cleaning up and hauling away a huge pile of sod we recently had removed. He was on time and easy to work with. We would highly recommend him!',
		name: 'Julie M.',
	},
	{
		stars: 5,
		text: 'Great junk hauling service for an affordable price.',
		name: 'Ron S.',
	},
	{
		stars: 5,
		text: 'It was a pleasure working with Joel,  no job was to big, made something that was very overwhelming, very doable.  Removing items from two crawl spaces within our home and construction materials in our yard.  He was quick to respond to my phone inquiry,  able to bid out the job within a day and  start removing the following morning.  Thank you thank you Joel',
		name: 'Rex B.',
	},
	{
		stars: 5,
		text: 'Joel is awesome to work with and very professional and safety oriented',
		name: 'Pamela H.',
	},
	{
		stars: 5,
		text: 'Excellent to work with. Very helpful and responsive.',
		name: 'Scott C.',
	},
	{
		stars: 5,
		text: 'Quick courteous service.',
		name: 'M. Anderson',
	},
	{
		stars: 5,
		text: 'Joel helped me remove a couple truckloads of trash and was professional about it. Work was quick and he was great to talk to.',
		name: 'Gabriel L.',
	},
]

const reviewStars = (starNumber) => {
	const stars = []
	let remainder = 4

	for (let i = 0; i < starNumber; i++) {
		stars.push(
			<svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
					d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
			</svg>
		)
		remainder -= 1
	}

	for (let i = 0; i <= remainder; i++) {
		stars.push(
			<svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
			</svg>)
	}

	return <div className="flex space-x-1">{stars}</div>
}

const review = (reviewNumber) => {
 return (
	<div className=" h-full mr-auto py-8 relative">
		<div className="flex space-x-1">
			{reviewStars(5)}
		</div>
		<div className="mt-4">
			<p className="text-sm leading-relaxed">{reviews[reviewNumber].text} yeAAAaha</p>
			<h4 className="text-base whitespace-nowrap font-extrabold mt-4">{reviews[reviewNumber].name}</h4>
			{/* <p className="mt-1 text-xs text-gray-400">Founder of Labar</p> */}
		</div>
	</div>
 )
}

export default function Component() {
  return (
  
		<section className="h-[40vh] flex flex-col m-4">

			<div className="flex items-center">
				<h2 className="text-3xl font-extrabold">What are people saying about us?</h2>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
				</svg>
			</div>

			<div className={`
			flex flex-col md:flex-row
			`}>
	
				{/* left column / top*/}
				<div className={`
				relative
				h-full w-full md:w-1/2
				mr-4 md:ml-0
				flex flex-col
				overflow-hidden
				
				`}>
	
					{/* lower row */}
					<div className={`
					h-1/2 
					relative flex flex-col lg:flex-row
					`}>
	
							{review(4)}				
	
							{review(5)}
							
					</div>

				</div>

				{/* right column / bottom*/}
				<div className={`
				relative flex flex-row
				h-full w-full md:w-1/2
				mr-4 md:ml-0
				flex flex-row
				overflow-hidden
				`}>
	
					{review(2)}

	
				</div>

				

			</div>
			
		</section>
			
  )
}