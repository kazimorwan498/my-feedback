import Heading from "../../Global/Heading";
import GalleryData from "../../../lib/db/GalleryData.json";
import MyButtons from "../../Global/MyButtons";
import { Grid3Icon } from "../../Global/Icons";

export default function Gallery() {
	return (
		<section className="pt-[148px] relative">
			<div className="absolute -top-16 left-1/2 -translate-x-1/2">
				<img src="/bellaItalia-logo.svg" alt="bellaItalia-logo" />
			</div>

			<Heading>Discover our magnificent place in photos</Heading>
			<p className="text-[rgb(94,94,94)] max-w-[600px] mt-[13px]">
				The lorem ipsum is, in printing, a series of meaningless words
				used temporarily to calibrate a layout.The lorem ipsum is, in
				printing.
			</p>

			<div className="relative mt-10 mb-20">
				<div className="grid grid-cols-4 gap-[15px] max-w-[1164px]">
					{GalleryData.map(({ img, style }, i) => (
						<img
							key={i}
							className={style}
							src={img}
							alt="Gallery"
						/>
					))}
				</div>

				<div className="sm:absolute left-7 bottom-5 mt-4 sm:mt-0">
					<MyButtons className="sm:bg-white sm:text-[rgb(35,35,35)] text-sm sm:text-[17px] font-medium px-4 sm:px-7">
						<Grid3Icon className="size-3.5 sm:size-4" /> View all
						photos (7)
					</MyButtons>
				</div>
			</div>
		</section>
	);
}
