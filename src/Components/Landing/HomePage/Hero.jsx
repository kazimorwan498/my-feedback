import Filter from "./Filter";
import HeroBanner from "./HeroBanner";

export default function Hero() {
	return (
		<section className="max-w-[1440px] mx-auto px-2 sm:px-12">
			<Filter />
			<HeroBanner />
		</section>
	);
}
