import { FilterItems } from "../../../lib/db/FilterItems";
import MyButtons from "../../Global/MyButtons";
import { useState } from "react";
import { cn } from "@heroui/react";

export default function Filter() {
	const [SeeAll, setSeeAll] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("restaurants");

	const SeeAllToggler = () => {
		setSeeAll(!SeeAll);
	};

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className="pt-[37px] pb-10 sm:pb-[70px] flex flex-col gap-5">
			<div
				className={cn(
					"flex items-center flex-wrap gap-x-7 sm:gap-x-5 md:gap-x-10 lg:gap-x-[56px] gap-y-5 sm:gap-y-10 justify-center h-[345px] min-[618px]:h-auto overflow-hidden transition-all delay-100",
					SeeAll
						? "max-[355px]:h-[345px] min-[355px]:h-[291px] min-[558px]:h-[160px]"
						: "h-[70px] xl:h-[80px]"
				)}
			>
				{FilterItems.map(({ img, title, category }, i) => (
					<button
						onClick={() => handleCategoryClick(category)}
						key={i}
						className={cn(
							"max-w-[103px] flex flex-col items-center justify-between text-accent h-[70px] space-y-2 pb-3 border-b-2 border-transparent filter",
							selectedCategory === category ? "active" : ""
						)}
					>
						<div className="max-w-[33px] max-h-[26px] object-contain text-accent">
							{img}
						</div>
						<p className="text-[15.5px]">{title}</p>
					</button>
				))}
			</div>
			<MyButtons
				className="min-[618px]:hidden mx-auto bg-primary px-5 !py-2"
				onClick={SeeAllToggler}
			>
				{SeeAll ? "See Less" : "See All"}
			</MyButtons>
		</div>
	);
}
