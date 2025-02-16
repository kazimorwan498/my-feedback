import FiveStar from "../../../Global/FiveStar";
import AllReviewsCardsData from "../../../../lib/db/AllReviewsCardsData.json";

export default function AllReviewsCards() {
	return (
		<section className="space-y-[27px] mb-[86px]">
			{AllReviewsCardsData.map(({ username, location, RDate }, i) => (
				<div
					className="bg-[rgb(248,248,248)] flex gap-[9px] px-5 py-[21px] rounded-[20px]"
					key={i}
				>
					<div className="size-10 sm:size-[59px] bg-white rounded-full flex items-center justify-center">
						<img
							className="size-5 sm:size-auto"
							src="/user.svg"
							alt="user"
						/>
					</div>

					<div>
						<h5 className="text-[rgb(35,35,35)] text-base sm:text-[21px] font-semibold">
							{username}
						</h5>
						<p className="text-[rgb(138,138,138)] text-sm sm:text-[16.5px]">
							{location}
						</p>

						<div className="flex items-center gap-3 mt-3.5 mb-7">
							<div className="flex gap-[6.21px]">
								<FiveStar
									className="gap-[6.21px]"
									star="size-3.5 sm:size-[18.63px]"
									i={5}
								/>
							</div>
							<span className="text-[rgb(52,52,52)] text-xs sm:text-[14.5px]">
								{RDate}
							</span>
						</div>

						<p className="max-w-[511px] text-[rgb(94,94,94)] text-xs sm:text-base">
							The lorem ipsum is, in printing, a series of
							meaningless words used temporarily to calibrate a
							layout.The lorem ipsum is, in printing, a series of
							meaningless words used temporarily to calibrate a
							layout.
						</p>
					</div>
				</div>
			))}
		</section>
	);
}
