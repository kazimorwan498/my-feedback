import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import Heading from "../../Global/Heading";
import RestaurantsLeftDropdown from "./RestaurantsLeftDropdown";
import RestaurantsLeftCards from "./RestaurantsLeftCards";
import MyButtons from "../../Global/MyButtons";

export default function RestaurantsLeft() {
	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate("/");
	};

	return (
		<section className="pt-5 lg:w-1/2">
			<Breadcrumbs
				itemClasses={{
					separator: "px-2",
				}}
				separator="/"
				color="secondary"
				className="font-semibold"
			>
				<BreadcrumbItem onClick={handleClick}>Home</BreadcrumbItem>
				<BreadcrumbItem>All restaurants</BreadcrumbItem>
			</Breadcrumbs>

			<div className="flex items-center justify-between mb-2">
				<Heading className="text-xl sm:text-[32px] lg:text-[22px] xl:!text-[32px]">
					best restaurants in Singapore
				</Heading>
				<RestaurantsLeftDropdown />
			</div>
			<RestaurantsLeftCards />

			<MyButtons className="sm:text-[19px] !py-[9.25px] sm:ps-[39.59px] sm:pe-10 bg-primary mt-4 sm:mt-8 mb-8 sm:mb-32">
				Show more
			</MyButtons>
		</section>
	);
}
