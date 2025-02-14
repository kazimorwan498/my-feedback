import { useState } from "react";
import CarouselCardData from "../../../lib/db/CarouselCardData.json";
import { Arrow } from "../../Global/Icon";
import HeroCards from "../../Global/HeroCards";

export default function HeroBanner() {
	const [Carousel, setCarousel] = useState(0);
	const Slides = Math.ceil(CarouselCardData.length / 4);

	const nextSlide = () => {
		setCarousel((prev) => (prev + 1) % Slides);
	};

	const prevSlide = () => {
		setCarousel((prev) => (prev - 1 + Slides) % Slides);
	};

	return (
		<section className="max-w-[1345px] mx-auto py-5 px-2 sm:px-10 md:ps-[52px] md:pe-[54px] bg-primary rounded-[9px] overflow-hidden relative mb-2">
			<h2 className="font-lexend text-xl sm:text-2xl md:text-[32px] text-white mb-[31px]">
				Find the best restaurant ratings below
			</h2>

			<div className="max-w-[1239px] overflow-hidden">
				<div
					className="flex gap-2 transition-transform duration-500"
					style={{ transform: `translateX(-${Carousel * 100.78}%)` }}
				>
					{[...Array(Slides)].map((_, i) => (
						<div
							className="flex-shrink-0 w-full grid grid-cols-1 min-[800px]:grid-cols-2 min-[1080px]:grid-cols-3 min-[1440px]:grid-cols-4 justify-items-center mb-[26px] gap-5 lg:gap-[33px]"
							key={i}
						>
							{CarouselCardData.slice(i * 4, i * 4 + 4).map(
								({ img, title, des, rate, reviews }, i) => (
									<HeroCards
										img={img}
										title={title}
										des={des}
										rate={rate}
										reviews={reviews}
										key={i}
									/>
								)
							)}
						</div>
					))}
				</div>
			</div>

			<div className="flex gap-[5px] justify-center">
				{[...Array(Slides)].map((_, index) => (
					<button
						key={index}
						className={`size-[9px] rounded-full transition-all ${
							index === Carousel ? "bg-white" : "bg-gray-300"
						}`}
						onClick={() => setCarousel(index)}
					/>
				))}
			</div>

			<button
				onClick={prevSlide}
				className="flex items-center justify-center absolute left-[23px] top-1/2 transform -translate-y-1/2 bg-primary text-black bg-white/60 hover:bg-white size-[59px] rounded-full transition-transform-colors shadow-[0_12px_12px_rgba(0,0,0,0.12)] backdrop-blur active:scale-95"
			>
				<Arrow className="rotate-180" />
			</button>
			<button
				onClick={nextSlide}
				className="flex items-center justify-center absolute right-[23px] top-1/2 transform -translate-y-1/2 bg-primary text-black bg-white/60 hover:bg-white size-[59px] rounded-full transition-transform-colors shadow-[0_12px_12px_rgba(0,0,0,0.12)] backdrop-blur active:scale-95"
			>
				<Arrow />
			</button>
		</section>
	);
}
