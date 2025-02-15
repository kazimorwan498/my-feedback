import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@heroui/react";
import { Close, Sort } from "../../Global/Icons";

export default function RestaurantsLeftDropdown() {
	return (
		<Dropdown
			placement="bottom-end"
			className="w-[276px] h-[173px] border border-[rgb(230,230,230)] shadow-[0_20px_20px_rgba(0,0,0,0.06)]"
		>
			<DropdownTrigger>
				<Button
					variant="bordered"
					className="rounded-full text-[rgb(93,93,93)] font-medium text-sm sm:text-[17px] border-[rgb(93,93,93)] aria-expanded:bg-[rgb(93,93,93)] aria-expanded:text-white min-w-[90px] sm:min-w-[95px]"
				>
					<Sort /> Sort
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Static Actions"
				className="py-[29px] px-3 relative"
			>
				<DropdownItem className="w-[150px] h-[34px] *:text-[17px] rounded text-[rgb(93,93,93)] hover:!bg-primary/[0.13] hover:!text-primary mb-1">
					All feedbacks
				</DropdownItem>
				<DropdownItem className="w-[150px] h-[34px] *:text-[17px] rounded text-[rgb(93,93,93)] hover:!bg-primary/[0.13] hover:!text-primary mb-1">
					Highest rated
				</DropdownItem>
				<DropdownItem className="w-[150px] h-[34px] *:text-[17px] rounded text-[rgb(93,93,93)] hover:!bg-primary/[0.13] hover:!text-primary">
					oldest rated
				</DropdownItem>

				<DropdownItem className="text-[rgb(93,93,93)] absolute top-2 right-2.5 !size-[33px] !p-[4px] !flex !items-center !justify-center bg-[rgb(240,240,240)] rounded-full hover:!bg-primary/[0.13] hover:!text-primary">
					<Close />
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
