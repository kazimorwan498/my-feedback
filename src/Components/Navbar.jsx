import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
	Button,
} from "@heroui/react";
import { Globe, Logo, Search } from "@/Components/Global/Icon";
import { Link, useNavigate } from "react-router-dom";
import MyButtons from "./Global/MyButtons";

export default function MyNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const Navigate = useNavigate();

	const menuItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth="2xl"
			className="w-full h-[120px]"
		>
			<NavbarContent className="sm:hidden pr-3" justify="center">
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarBrand
					className="cursor-pointer"
					onClick={() => Navigate("/")}
				>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="center" className="grow max-w-[625px]">
				<div className="h-[51px] w-[625px] flex items-center justify-center gap-2 p-1 py-4 rounded-full border border-accent focus-within:border-primary text-base font-light">
					<input
						type="search"
						placeholder="restaurant, hotel, service...."
						className="size-full bg-transparent px-[19px] text-searchText placeholder:text-searchText outline-0 rounded-tl-full rounded-bl-full border-r border-searchText"
					/>
					<input
						type="search"
						placeholder="Singapore..."
						className="size-full bg-transparent px-[19px] text-searchText placeholder:text-searchText outline-0 rounded-tr-full rounded-br-full"
					/>
					<Button className="!size-[43px] !p-0 min-w-[43px] rounded-full bg-primary text-white">
						<Search className="size-4 stroke-2" />
					</Button>
				</div>
			</NavbarContent>

			<NavbarContent justify="end" className="!grow-0">
				<MyButtons className="!size-8 !p-0 min-w-8 bg-transparent text-[rgb(89,89,89)]">
					<Globe />
				</MyButtons>
				<NavbarItem>
					<MyButtons>MyFeedback for business</MyButtons>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? "warning"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							href="#"
							size="lg"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
