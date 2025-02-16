import FiveStar from "../../../Global/FiveStar";
import Heading from "../../../Global/Heading";

export default function OverallRating() {
	const OverallRatingData = [
		{
			star: "5 stars",
			width: "100",
			bg: "rgb(22,119,189)",
		},
		{
			star: "0 star",
			width: "80",
			bg: "rgb(38,138,209)",
		},
		{
			star: "0 star",
			width: "60",
			bg: "rgb(46,149,223)",
		},
		{
			star: "0 star",
			width: "40",
			bg: "rgb(55,160,235)",
		},
		{
			star: "0 star",
			width: "20",
			bg: "rgb(61,166,242)",
		},
	];

	return (
		<section className="pt-[57px] pb-[66px] flex gap-[52px] flex-col 1070px:flex-row border-b border-[rgb(220,220,220)]">
			<div className="flex items-start gap-4">
				<img className="mt-1" src="/frame-star.svg" alt="frame-star" />
				<div>
					<Heading className="font-roboto">Overall rating</Heading>
					<p className="text-[rgb(131,131,131)] mt-[5px]">
						834 Reviews
					</p>
					<FiveStar className="mt-7" i={5} />
				</div>
			</div>
			<div>
				{OverallRatingData.map(({ star, width, bg }, i) => (
					<div key={i} className="flex items-center gap-2.5">
						<span className="text-[rgb(131,131,131)] text-sm sm:text-[17px] w-[43px] sm:w-[52px]">
							{star}
						</span>
						<div className="w-[240px] min-[400px]:w-[300px] min-[550px]:w-[350px] sm:w-[487px] h-[9px] bg-[rgb(217,217,217)] rounded-full">
							<div
								style={{
									width: `${width}%`,
									backgroundColor: bg,
								}}
								className="h-full rounded-full"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
