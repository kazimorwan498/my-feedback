import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@heroui/react";
import { Close, FilterIcon } from "./Icons";
import FiveStar from "./FiveStar";

export default function FilterButton() {
	const DropdownItemData = [
		{
			num: 5,
			starI: 5,
		},
		{
			num: 4,
			starI: 4,
		},
		{
			num: 3,
			starI: 3,
		},
		{
			num: 2,
			starI: 2,
		},
		{
			num: 1,
			starI: 1,
		},
	];

	return (
		<Dropdown
			placement="bottom-end"
			className="w-[331px] h-[301px] border border-[rgb(230,230,230)] shadow-[0_20px_20px_rgba(0,0,0,0.06)] [&>div]:h-[301px] [&>div]:w-[331px]"
		>
			<DropdownTrigger>
				<Button
					variant="bordered"
					className="rounded-full text-[rgb(93,93,93)] font-medium text-sm sm:text-[17px] border-[rgb(93,93,93)] aria-expanded:bg-[rgb(93,93,93)] aria-expanded:!opacity-100 aria-expanded:text-white min-w-[90px] sm:min-w-[95px]"
				>
					<FilterIcon /> Filter
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Static Actions"
				className="py-[29px] px-3 relative"
			>
				<DropdownItem
					isDisabled="true"
					className="!bg-transparent text-center opacity-100 *:!h-[26px] *:!text-[22px] *:!font-bold mb-2"
				>
					filter by rating
				</DropdownItem>

				{DropdownItemData.map(({ num, starI }, i) => (
					<DropdownItem
						className="h-[30px] rounded !text-[rgb(232,166,65)] !bg-white  mb-3 last:mb-0 *:!text-[26px] *:!flex *:items-center *:gap-6 *:ps-[20px]"
						key={i}
					>
						<span>{num}</span>
						<div>
							<div className="absolute top-[3.45px] !size-[22px] flex gap-[6.05px]">
								{Array.from(Array(5).keys()).map((i) => (
									<img key={i} src="/star2.svg" alt="Star" />
								))}
							</div>
							<FiveStar className="relative" i={starI} />
						</div>
					</DropdownItem>
				))}

				<DropdownItem className="text-[rgb(93,93,93)] absolute top-3 right-2.5 !size-[33px] !p-[4px] !flex !items-center !justify-center bg-[rgb(240,240,240)] rounded-full hover:!bg-primary/[0.13] hover:!text-primary">
					<Close />
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
