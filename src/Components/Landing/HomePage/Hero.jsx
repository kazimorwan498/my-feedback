import Explore from "./Explore";
import Filter from "./Filter";
import HeroBanner from "./HeroBanner";
import HeroTrends from "./Trends/HeroTrends";

export default function Hero() {
	return (
		<>
			<section className="max-w-[1440px] mx-auto px-2 md:px-[47px]">
				<Filter />
				<HeroBanner />
				<HeroTrends />
			</section>
			<Explore />
		</>
	);
}
