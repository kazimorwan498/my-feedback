import AllReviews from "./AllReviews";
import BellaItaliaAboutLocation from "./BellaItaliaAboutLocation";
import OverallRating from "./OverallRating";

export default function BellaItaliaAbout() {
	return (
		<section className="max-w-[1164px]">
			<BellaItaliaAboutLocation />
			<OverallRating />
			<AllReviews />
		</section>
	);
}
