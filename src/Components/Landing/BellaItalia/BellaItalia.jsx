import MyBreadcrumbs from "../../Global/MyBreadcrumbs";
import BellaItaliaHero from "./BellaItaliaHero";

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
			</section>
		</>
	);
}
