'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

const ImageSlider = ({ slides, borders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
	
	useEffect(() => {

	}, [currentIndex])

  return (
    <div className={`
		@container
		absolute inset-0 
		`}>
     
			{/* Service title */}
			<div className={`
			flex items-center
			text-2xl
			absolute bottom-[5%] left-[25px] text-4xl font-bold
			z-10
			px-6 py-2
			rounded-lg 
			cursor-pointer
			hover:border 
			transform transition duration-200 hover:scale-110 bg-[#6CC18A]
			`}>
				{slides[currentIndex].title}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6 stroke-[4px]">
					<path strokeLinecap="round"  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
				</svg>
			</div>
		
			<button type="button" className="absolute top-[35%] md:top-[50%] left-[25px] z-1 rounded-full transform transition duration-200 hover:border bg-[#6CC18A] p-4" onClick={goToPrevious}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
				</svg>
				<span className="sr-only">Previous</span>
			</button>
			
			<button type="button" className="absolute top-[35%] md:top-[50%] right-[25px] z-1 rounded-full transform transition duration-200 hover:border bg-[#6CC18A] p-4" onClick={goToNext}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
				</svg>
				<span className="sr-only">Next</span>
			</button>
		
			{slides.map((slideIndex) => (
				<div
					className={`absolute inset-0`}
					key={slideIndex}
					onClick={() => goToSlide(slideIndex)}
				>
					<Image
						className={`
						object-cover 
						rounded-3xl
						grayscale
						`}
						src={slides[currentIndex].imageUrl}
						fill
						alt={slides[currentIndex].alt}
					/>
				</div>
			))}
     
    </div>
  );
};

export default ImageSlider;

