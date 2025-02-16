import FilterButton from "../../../Global/FilterButton";
import MyButtons from "../../../Global/MyButtons";
import Sort from "../../../Global/Sort";
import AllReviewsCards from "./AllReviewsCards";

export default function AllReviews() {
	return (
		<section className="pt-[34px]">
			<div className="flex items-center gap-[38px] mb-[43px]">
				<FilterButton />
				<Sort />
			</div>

			<AllReviewsCards />

			<div className="flex items-center justify-center mb-8 sm:mb-[42px]">
				<MyButtons className="sm:text-[19px] !py-[9.25px] sm:ps-[39.59px] sm:pe-10 bg-primary">
					Show more reviews
				</MyButtons>
			</div>
		</section>
	);
}
