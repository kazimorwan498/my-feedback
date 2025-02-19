import { useNavigate } from "react-router-dom";
import Heading from "../../Global/Heading";
import MyButtons from "../../Global/MyButtons";

export default function Explore() {
	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate("/explore");
	};

	return (
		<section className="bg-[rgb(242,242,242)] px-2 md:px-[47px]">
			<div className="flex flex-col-reverse min-[1125px]:flex-row items-center justify-center gap-[44px] max-w-[1440px] mx-auto pt-[26px] pb-[25px]">
				<div>
					<Heading className="min-[1125px]:max-w-[460px] text-xl sm:text-[26px] mb-7">
						MyFeedback for Business has resources to help you plan,
						start, grow, and advertise your small business
					</Heading>
					<p className="text-[rgb(94,94,94)] min-[1125px]:max-w-[453px] text-sm sm:text-base mb-16">
						The lorem ipsum is, in printing, a series of meaningless
						words used temporarily to calibrate a layout.
					</p>
					<MyButtons
						className="text-[13px] sm:text-[15.5px] px-5 sm:px-[28px]"
						onClick={handleClick}
					>
						Explore MyFeedback business
					</MyButtons>
				</div>
				<div>
					<img src="/explore.png" alt="Explore" />
				</div>
			</div>
		</section>
	);
}
