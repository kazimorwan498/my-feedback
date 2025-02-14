import { useState } from "react";
import CarouselCardData from "../../../lib/db/CarouselCardData.json";
import { Arrow } from "../../Global/Icon";

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
									<div
										key={i}
										className="w-[285px] min-w-[285px] bg-[rgb(248,248,248)] rounded-xl"
									>
										<img src={img} alt={title} />
										<div className="py-[13px] px-[14px]">
											<h3 className="font-semibold text-[19px]">
												{title}
											</h3>
											<p className="text-[rgb(143,143,143)] text-sm">
												{des}
											</p>
											<div className="mt-6 flex items-center gap-[9px]">
												<div className="flex gap-[6.05px]">
													{Array.from(
														Array(5).keys()
													).map((i) => (
														<img
															key={i}
															src="/star.svg"
															alt="Star"
														/>
													))}
												</div>
												<span className="text-sm font-semibold">
													{rate}{" "}
													<span className="text-searchText font-normal">{`(${reviews} reviews)`}</span>
												</span>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					))}
				</div>
			</div>

			<div className="flex gap-[5px] justify-center">
				{[...Array(Slides)].map((_, index) => (
					<span
						key={index}
						className={`size-[9px] rounded-full transition-all ${
							index === Carousel ? "bg-white" : "bg-gray-300"
						}`}
					/>
				))}
			</div>

			<button
				onClick={prevSlide}
				className="flex items-center justify-center absolute left-[23px] top-1/2 transform -translate-y-1/2 bg-primary text-black bg-white/60 hover:bg-white size-[59px] rounded-full transition-colors shadow-lg"
			>
				<Arrow className="rotate-180" />
			</button>
			<button
				onClick={nextSlide}
				className="flex items-center justify-center absolute right-[23px] top-1/2 transform -translate-y-1/2 bg-primary text-black bg-white/60 hover:bg-white size-[59px] rounded-full transition-colors shadow-lg"
			>
				<Arrow />
			</button>
		</section>
	);
}
