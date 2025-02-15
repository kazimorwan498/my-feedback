import Heading from "../../../Global/Heading";
import ActivitiesCards from "./ActivitiesCards";

export default function Activities() {
	return (
		<section className="border-b border-[rgb(220,220,220)]">
			<div className="max-w-[1440px] mx-auto px-2 md:ps-[47px] md:pe-0 pt-[83px]">
				<Heading className="mb-6">Recent activities</Heading>
				<ActivitiesCards />
			</div>
		</section>
	);
}
