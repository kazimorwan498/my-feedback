import { useNavigate } from "react-router-dom";
import Heading from "../../../Global/Heading";
import MyButtons from "../../../Global/MyButtons";
import TrendsCards from "./TrendsCards";

export default function HeroTrends() {
	const Navigate = useNavigate();
	const handleClick = () => {
		Navigate("/restaurants");
	};

	return (
		<section className="mt-12 sm:mt-24">
			<Heading className="mb-[25px]">The latest trends</Heading>
			<TrendsCards />
			<div className="flex flex-col gap-5 items-center justify-center pt-[46px] pb-16 sm:pb-[84px]">
				<Heading className="text-[22px] font-normal text-center sm:text-start">
					Discover more cool restaurants
				</Heading>
				<MyButtons
					className="sm:text-[19px] !py-[9.25px] sm:ps-[39.59px] sm:pe-10 bg-primary"
					onClick={handleClick}
				>
					Show more
				</MyButtons>
			</div>
		</section>
	);
}
