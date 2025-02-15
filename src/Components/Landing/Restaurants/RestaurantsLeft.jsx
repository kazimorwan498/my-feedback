import Heading from "../../Global/Heading";
import Sort from "../../Global/Sort";
import RestaurantsLeftCards from "./RestaurantsLeftCards";
import MyButtons from "../../Global/MyButtons";
import MyBreadcrumbs from "../../Global/MyBreadcrumbs";

export default function RestaurantsLeft() {
	return (
		<section className="pt-5 1070px:w-1/2">
			<MyBreadcrumbs>All restaurants</MyBreadcrumbs>

			<div className="flex items-center justify-between mb-2">
				<Heading className="text-xl sm:text-[32px]">
					best restaurants in Singapore
				</Heading>
				<Sort />
			</div>
			<RestaurantsLeftCards />

			<MyButtons className="sm:text-[19px] !py-[9.25px] sm:ps-[39.59px] sm:pe-10 bg-primary mt-4 sm:mt-8 mb-8 sm:mb-20">
				Show more
			</MyButtons>
		</section>
	);
}
