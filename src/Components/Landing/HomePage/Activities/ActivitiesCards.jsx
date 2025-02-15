import { Link } from "react-router-dom";
import ActivitiesCardsData from "../../../../lib/db/ActivitiesCardsData.json";
import { Arrow } from "../../../Global/Icon";
import ArrowButton from "../../../Global/ArrowButton";
import { useState } from "react";

export default function ActivitiesCards() {
	const [CurrentPosition, setCurrentPosition] = useState(0);
	const ActivitiesCardsWidth = 487;
	const TotalCards = 4; // it is stop in the 4 number card
	const ActivitiesCardsSectionWidth = TotalCards * ActivitiesCardsWidth;

	const RightToLeft = () => {
		if (
			Math.abs(CurrentPosition) <
			ActivitiesCardsSectionWidth - ActivitiesCardsWidth
		) {
			setCurrentPosition((prev) => prev - ActivitiesCardsWidth);
		}
	};

	const LeftToRight = () => {
		if (CurrentPosition < 0) {
			setCurrentPosition((prev) => prev + ActivitiesCardsWidth);
		}
	};

	return (
		<div className="flex gap-[30px] items-center overflow-x-hidden relative pb-16">
			{ActivitiesCardsData.map(
				({ username, location, date, des, des2, img }, i) => (
					<div
						key={i}
						className="size-full min-w-[300px] sm:min-w-[457px] bg-[rgb(248,248,248)] pt-6 pb-[23px] ps-[13px] pe-3 rounded-[14px] transition-all ease-in-out hover:shadow-lg"
						style={{
							transform: `translateX(${CurrentPosition}px)`,
						}}
					>
						<div className="flex items-center gap-3 mb-[23px]">
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
							</div>
						</div>

						<div className="flex items-center gap-3 mb-5">
							<div className="flex gap-[6.21px]">
								{Array.from(Array(5).keys()).map((i) => (
									<img
										className="size-3.5 sm:size-[18.63px]"
										key={i}
										src="/star.svg"
										alt="Star"
									/>
								))}
							</div>
							<span className="text-[rgb(52,52,52)] text-xs sm:text-[14.5px]">
								{date}
							</span>
						</div>

						<div className="min-h-[133px] text-[rgb(94,94,94)] mb-[39px] text-xs sm:text-base">
							<p className="mb-5 line-clamp-4">{des}</p>
							<p className="line-clamp-2">{des2}</p>
						</div>

						<div className="flex flex-wrap gap-3 items-center mb-5">
							{img.map((item, i) => (
								<img
									className="size-16 sm:size-auto"
									key={i}
									src={item}
									alt={item}
								/>
							))}
						</div>

						<Link className="text-[rgb(35,35,35)] text-sm sm:text-[17px] font-medium underline">
							Discover
						</Link>
					</div>
				)
			)}

			{CurrentPosition && (
				<ArrowButton className="left-2.5" onClick={LeftToRight}>
					<Arrow className="rotate-180 size-5 sm:size-auto" />
				</ArrowButton>
			)}

			<ArrowButton className="right-2.5" onClick={RightToLeft}>
				<Arrow className="!size-5 sm:size-auto" />
			</ArrowButton>
		</div>
	);
}
