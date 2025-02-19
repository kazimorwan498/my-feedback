import React, { useEffect, useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
	Button,
	cn,
} from "@heroui/react";
import { Close, Globe, Logo, Search } from "../Global/Icons";
import { Link, useNavigate } from "react-router-dom";
import MyButtons from "../Global/MyButtons";
import MobileNavMenuItems from "../../lib/db/MobileNavMenuItems.json";

export default function MyNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchFocus, setIsSearchFocus] = useState(false);

	useEffect(() => {
		isSearchFocus
			? document.body.classList.add("overflow-hidden")
			: document.body.classList.remove("overflow-hidden");
	}, [isSearchFocus]);

	const Navigate = useNavigate();

	const NavigateLogo = () => {
		Navigate("/");
	};

	return (
		<Navbar
			shouldHideOnScroll
			isBordered
			isBlurred={false}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			maxWidth="2xl"
			className="w-full h-[100px] sm:!h-[120px]"
		>
			<NavbarContent className="sm:hidden" justify="center">
				<NavbarBrand className="cursor-pointer" onClick={NavigateLogo}>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarBrand className="cursor-pointer" onClick={NavigateLogo}>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="center" className="grow max-w-[625px]">
				{isSearchFocus && (
					<div
						className="absolute -top-10 left-0 h-[110vh] w-full bg-[rgba(16,16,16,0.2)]"
						onClick={() => setIsSearchFocus(false)}
					/>
				)}

				<div
					className={cn(
						"h-[51px] w-auto lg:w-[496px] 1160px:w-[625px] hidden lg:flex items-center justify-center gap-2 p-1 py-4 rounded-full border border-accent focus-within:border-primary text-base font-light relative z-10",
						isSearchFocus && "bg-white"
					)}
				>
					<input
						type="search"
						placeholder="restaurant, hotel, service...."
						className="size-full bg-transparent px-[19px] text-searchText placeholder:text-searchText outline-0 rounded-tl-full rounded-bl-full border-r border-searchText"
						onFocus={() => setIsSearchFocus(true)}
					/>
					<input
						type="search"
						placeholder="Singapore..."
						className="size-full bg-transparent px-[19px] text-searchText placeholder:text-searchText outline-0 rounded-tr-full rounded-br-full"
						onFocus={() => setIsSearchFocus(true)}
					/>
					<Button
						className="!size-[43px] !p-0 min-w-[43px] rounded-full bg-primary text-white"
						onPress={() => setIsSearchFocus(false)}
					>
						{isSearchFocus ? (
							<Close />
						) : (
							<Search className="size-5 stroke-2" />
						)}
					</Button>
				</div>
			</NavbarContent>

			<NavbarContent justify="end" className="!grow-0 hidden sm:flex">
				<Button className="lg:hidden !size-[43px] !p-0 min-w-[43px] rounded-full bg-primary text-white">
					<Search className="size-4 stroke-2" />
				</Button>
				<MyButtons
					className="!size-8 !p-0 min-w-8 bg-transparent text-[rgb(89,89,89)]"
					onClick={() => Navigate("/explore")}
				>
					<Globe />
				</MyButtons>
				<NavbarItem>
					<MyButtons
						onClick={() => Navigate("/my-feedback-for-business")}
					>
						MyFeedback for business
					</MyButtons>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden" justify="end">
				<NavbarMenuToggle
					className="!size-12 hover:bg-searchText/10 active:bg-searchText/20 transition-colors"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			<NavbarMenu
				style={{ "--navbar-height": "100px", overflow: "hidden" }}
			>
				<NavbarMenuItem className="mb-4">
					<div className="h-auto min-[500px]:h-[51px] w-auto flex flex-col min-[500px]:flex-row items-center justify-center gap-2 p-0 min-[500px]:p-1 min-[500px]:py-4 rounded-md min-[500px]:rounded-full border-0 min-[500px]:border border-accent focus-within:border-primary text-base font-light">
						<input
							type="search"
							placeholder="restaurant, hotel, service...."
							className="size-full h-[51px] min-[500px]:h-auto bg-transparent px-[19px] text-searchText placeholder:text-searchText outline-0 rounded-full min-[500px]:rounded-none min-[500px]:rounded-tl-full min-[500px]:rounded-bl-full border min-[500px]:border-0 min-[500px]:border-r border-searchText focus:border-primary"
						/>
						<input
							type="search"
							placeholder="Singapore..."
							className="size-full h-[51px] min-[500px]:h-auto bg-transparent px-[19px] text-searchText placeholder:text-searchText outline-0 rounded-full min-[500px]:rounded-none min-[500px]:rounded-tr-full min-[500px]:rounded-br-full border min-[500px]:border-0 border-searchText focus:border-primary"
						/>
						<Button className="size-full min-[500px]:!size-[43px] !p-0 min-w-[43px] rounded-full bg-primary text-white">
							<Search className="size-4 stroke-2" />
							<span className="min-[500px]:hidden">Search</span>
						</Button>
					</div>
				</NavbarMenuItem>

				<hr />

				{MobileNavMenuItems.map(({ item, urls }, index) => (
					<NavbarMenuItem
						key={index}
						className="h-[44px] hover:bg-primary/10 active:bg-primary/20 px-3 rounded-md"
					>
						<Link
							to={urls}
							onClick={() => setIsMenuOpen(false)}
							className="size-full text-secondary flex items-center"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
