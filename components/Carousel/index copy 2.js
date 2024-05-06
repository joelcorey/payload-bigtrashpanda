'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "react-feather"


export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        
				{slides.map((s) => (
          <Image
						className={`
						object-center h-full w-full
						`}
						src={s}
						
						alt="Young woman swinging on a swing set at sunset. Peace of mind."
					/>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        
				<button type="button" className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={prev}>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-500/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
							</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
        
				<button type="button" className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={next}>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-500/50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
        
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

