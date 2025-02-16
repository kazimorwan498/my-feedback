import FooterItems from "../../lib/db/FooterItems.json";
import Heading from "../Global/Heading";
import LanguageOptionData from "../../lib/db/LanguageOptionData.json";
import CountriesOptionData from "../../lib/db/CountriesOptionData.json";
import { Select, SelectItem } from "@heroui/react";
import { Link } from "react-router-dom";

export default function Footer() {
	const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

	return (
		<footer className="max-w-[1440px] mx-auto px-2 pt-[26px] pb-[27px] border-b border-[rgb(220,220,220)]">
			<ul className="flex flex-col min-[486px]:flex-row justify-between gap-x-5 gap-y-8 max-w-[810px] mx-auto mb-[66px]">
				{FooterItems.map(({ title, items }, i) => (
					<div key={i}>
						<Heading className="text-xl mb-[22px]">{title}</Heading>
						<ul className="space-y-[13px] text-[rgb(94,94,94)] text-sm">
							{items.map(({ label, url }, i) => (
								<Link className="block" to={url} key={i}>
									{label}
								</Link>
							))}
						</ul>
					</div>
				))}
				<div className="space-y-5">
					<div>
						<Heading className="text-xl mb-[11px]">
							Languages
						</Heading>
						<Select
							className="[&>*>button]:w-[150px] [&>*>button>div>span]:!text-[rgb(94,94,94)] [&>*>button]:bg-white [&>*>button]:shadow-none [&>*>button]:transition-colors"
							defaultSelectedKeys="all"
						>
							{LanguageOptionData.map(({ key, label }) => (
								<SelectItem key={key}>{label}</SelectItem>
							))}
						</Select>
					</div>
					<div>
						<Heading className="text-xl mb-[11px]">
							Countries
						</Heading>
						<Select
							className="[&>*>button>div>span]:!text-[rgb(94,94,94)] [&>*>button]:bg-white [&>*>button]:shadow-none [&>*>button]:transition-colors [&>*>button]:w-[150px]"
							defaultSelectedKeys="all"
						>
							{CountriesOptionData.map(({ key, label }) => (
								<SelectItem key={key}>{label}</SelectItem>
							))}
						</Select>
					</div>
				</div>
			</ul>
			<p className="text-center text-xs sm:text-sm font-semibold">
				Copyright &copy; {currentMonth} {new Date().getFullYear()}{" "}
				myfeedback, designed by Kazi Morwan
			</p>
		</footer>
	);
}
