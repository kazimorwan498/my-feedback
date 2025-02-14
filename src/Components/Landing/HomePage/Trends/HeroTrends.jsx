import Heading from "../../../Global/Heading";
import TrendsCards from "./TrendsCards";

export default function HeroTrends() {
	return (
		<section className="mt-12 sm:mt-24">
			<Heading className="mb-[25px]">The latest trends</Heading>
			<TrendsCards />
		</section>
	);
}
