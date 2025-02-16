import Heading from "../../Global/Heading";
import HeroCards from "../../Global/HeroCards";
import BellaItaliaDiscoverCardsData from "../../../lib/db/BellaItaliaDiscoverCardsData.json";

export default function BellaItaliaDiscover() {
	return (
		<section>
			<Heading>Also discover...</Heading>
			<div className="flex flex-wrap gap-[49px] items-center justify-center sm:justify-start max-w-[1055px] mt-[45px] mb-[77px]">
				{BellaItaliaDiscoverCardsData.map(
					({ img, title, rate, reviews }, i) => (
						<HeroCards
							key={i}
							img={img}
							title={title}
							des="The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
							rate={rate}
							reviews={reviews}
							className="w-[319px]"
						/>
					)
				)}
			</div>
		</section>
	);
}
