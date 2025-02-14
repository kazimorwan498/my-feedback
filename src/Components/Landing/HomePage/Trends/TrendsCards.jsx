import HeroTrendsCardData from "../../../../lib/db/HeroTrendsCardData.json";
import HeroCards from "../../../Global/HeroCards";

export default function TrendsCards() {
	return (
		<section className="flex flex-wrap gap-[23px] items-center justify-center sm:justify-between max-w-[1345px] mb-2">
			{HeroTrendsCardData.map(({ img, title, des, rate, reviews }, i) => (
				<HeroCards
					key={i}
					img={img}
					title={title}
					des={des}
					rate={rate}
					reviews={reviews}
					className="w-[319px] min-w-[319px]"
				/>
			))}
		</section>
	);
}
