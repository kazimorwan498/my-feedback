import Heading from "../../Global/Heading";
import { ClockIcon, LocationIcon } from "../../Global/Icons";

export default function BellaItaliaHero() {
	const BellaData = [
		{
			icon: <LocationIcon />,
			des: "Singapore, Bishan-Ang Mo Kio Park",
		},
		{
			icon: <ClockIcon />,
			des: "7j/7, 08:00 - 22:00",
		},
	];

	return (
		<section className="px-2 sm:px-8 md:px-[97px] pt-8 sm:pt-[67px] pb-12 sm:pb-28 bg-[url('/bellaItalia-bg.png')]">
			<Heading className="text-white">Bella italia</Heading>
			<div className="mt-3.5 flex items-center gap-[9px]">
				<div className="flex gap-[6.05px]">
					{Array.from(Array(5).keys()).map((i) => (
						<img
							className="size-5 sm:size-[26px]"
							key={i}
							src="/star.svg"
							alt="Star"
						/>
					))}
				</div>
				<span class="text-sm font-semibold text-white text-[19px]">
					5.0 <span class="font-light">(876 reviews)</span>
				</span>
			</div>

			<p className="max-w-[528px] text-white font-light mt-[28px] text-sm sm:text-[19px] leading-tight">
				The lorem ipsum is, in printing, a series of meaningless words
				used temporarily to calibrate a layout.
				<br />
				The lorem ipsum is, in printing, a series of meaningless words
				used temporarily to calibrate a layout.
			</p>

			<div className="mt-12 sm:mt-[66px] space-y-6 sm:space-y-[37px]">
				{BellaData.map(({ icon, des }, i) => (
					<div
						key={i}
						className="flex items-center gap-2.5 text-white sm:text-[19px]"
					>
						<span>{icon}</span>
						<span>{des}</span>
					</div>
				))}
			</div>
		</section>
	);
}
