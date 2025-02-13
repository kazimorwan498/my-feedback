import { NavLink } from "react-router-dom";
import { FilterItems } from "../../../lib/db/FilterItems";
import MyButtons from "../../Global/MyButtons";
import { useState } from "react";
import { cn } from "@heroui/react";

export default function Filter() {
	const [SeeAll, setSeeAll] = useState(false);

	const SeeAllToggler = () => {
		setSeeAll(!SeeAll);
	};

	return (
		<div className="pt-[37px] pb-10 sm:pb-[70px] flex flex-col gap-5">
			<div
				className={cn(
					"flex items-center flex-wrap gap-x-10 sm:gap-x-5 md:gap-x-10 lg:gap-x-[56px] gap-y-10 justify-center h-[150px] min-[618px]:h-auto overflow-hidden transition-all",
					SeeAll ? "h-[340px] min-[403px]:h-[245px]" : "h-[70px]"
				)}
			>
				{FilterItems.map(({ img, title, category }, i) => (
					<NavLink
						to={category}
						key={i}
						className="max-w-[103px] flex flex-col items-center justify-between text-accent h-[55px] filter "
					>
						<div className="max-w-[33px] max-h-[26px] object-contain text-accent">
							{img}
						</div>
						<p className="text-[15.5px]">{title}</p>
					</NavLink>
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
