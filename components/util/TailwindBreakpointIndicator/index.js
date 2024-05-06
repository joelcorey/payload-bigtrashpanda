const TailwindBreakpointIndicator = () => {
	return (
		<div className={`absolute bottom-0 left-0 right-0`}>
			<p className={`text-xl sm:block md:hidden`}>
				Tailwind 'sm' breakpoint: "@media (min-width: 640px)"
			</p>
			<p className={`text-xl hidden md:block lg:hidden`}>
				Tailwind 'md' breakpoint: "@media (min-width: 768px)"
			</p>
			<p className={`text-xl hidden lg:block xl:hidden`}>
				Tailwind 'lg' breakpoint: "@media (min-width: 1024px)"
			</p>
			<p className={`text-xl hidden xl:block 2xl:hidden`}>
				Tailwind 'xl' breakpoint: "@media (min-width: 1280px)"
			</p>
			<p className={`text-xl hidden 2xl:block 3xl:hidden`}>
				Tailwind '2xl' breakpoint: "@media (min-width: 1536px)"
			</p>
			<p className={`text-xl hidden 3xl:block`}>
				Tailwind '3xl' breakpoint: "@media (min-width: 1920px)"
			</p>
		</div>
	)
}

export default TailwindBreakpointIndicator