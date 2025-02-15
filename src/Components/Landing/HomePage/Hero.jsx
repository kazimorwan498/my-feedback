import Footer from "../../Shared/Footer";
import Activities from "./Activities/Activities";
import Explore from "./Explore";
import Filter from "./Filter";
import HeroBanner from "./HeroBanner";
import HeroTrends from "./Trends/HeroTrends";

export default function Hero() {
	return (
		<>
			<main className="max-w-[1440px] mx-auto px-2 md:px-[47px]">
				<Filter />
				<HeroBanner />
				<HeroTrends />
			</main>
			<Explore />
			<Activities />
			<Footer />
		</>
	);
}
