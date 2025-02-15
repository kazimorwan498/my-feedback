import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import Heading from "../../Global/Heading";
import RestaurantsLeftDropdown from "./RestaurantsLeftDropdown";

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

			<div className="flex items-center justify-between">
				<Heading className="text-lg xl:!text-[32px]">
					best restaurants in Singapore
				</Heading>
				<RestaurantsLeftDropdown />
			</div>
		</section>
	);
}
