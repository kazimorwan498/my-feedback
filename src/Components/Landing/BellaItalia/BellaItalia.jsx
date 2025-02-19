import MyBreadcrumbs from "../../Global/MyBreadcrumbs";
import BellaItaliaAbout from "./BellaItaliaAbout/BellaItaliaAbout";
import BellaItaliaDiscover from "./BellaItaliaDiscover";
import BellaItaliaHero from "./BellaItaliaHero";
import Gallery from "./Gallery";

export default function BellaItalia() {
	return (
		<>
			<section className="max-w-[1440px] mx-auto">
				<div className="pt-5 pb-[19px] px-2 sm:px-8 md:px-[97px]">
					<MyBreadcrumbs className="max-h-[19px]">
						BellaItalia
					</MyBreadcrumbs>
				</div>
				<BellaItaliaHero />
				<section className="px-2 sm:px-8 md:px-[97px]">
					<Gallery />
					<BellaItaliaAbout />
					<BellaItaliaDiscover />
				</section>
			</section>
		</>
	);
}
