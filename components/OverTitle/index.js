export default function OverTitle({ text }) {
	return (
		<p className={`
			block
			p-1
			before:relative 
			before:content-['']
			before:inline-block
			before:w-[0.9em]
			before:h-[0.9em]
			before:bg-slate-950
			before:leading-[0]
			before:mr-[1em]
			text-[1.3rem]
			tracking-[0.02em]
			font-bold
			leading-[0]
			md:leading-6
			uppercase
			text-xs
			md:text-base
			z-20
			text-left
			mb-8
			-mt-2
			txt-slate-950
			whitespace-nowrap
		`}>
			{text}
		</p>	
	)
}