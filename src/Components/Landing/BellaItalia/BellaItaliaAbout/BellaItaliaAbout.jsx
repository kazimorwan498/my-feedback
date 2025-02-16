import OverallRating from "../OverallRating";
import BellaItaliaAboutLocation from "./BellaItaliaAboutLocation";

export default function BellaItaliaAbout() {
	return (
		<section className="max-w-[1164px]">
			<BellaItaliaAboutLocation />
			<OverallRating />
		</section>
	);
}
