import { useNavigate } from "react-router-dom";
import RestaurantsLeftCardsData from "../../../lib/db/RestaurantsLeftCardsData.json";
import FiveStar from "../../Global/FiveStar";

export default function RestaurantsLeftCards() {
	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate("/bellaItalia");
	};

	return (
		<section className="divide-y">
			{RestaurantsLeftCardsData.map(
				({ img, title, des, rate, reviews }, i) => (
					<div
						className="h-[418px] sm:h-[257px] py-[34px] flex items-center"
						key={i}
					>
						<div
							className="flex flex-col sm:flex-row w-full lg:max-w-[550px] cursor-pointer"
							onClick={handleClick}
						>
							<div className="min-w-[209px] relative">
								<img
									className="h-full mx-auto"
									src={img}
									alt={title}
								/>
								<div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-[5px]">
									<span className="size-[9px] rounded-full bg-white" />
									<span className="size-[9px] rounded-full bg-[rgb(217,217,217)]" />
									<span className="size-[9px] rounded-full bg-[rgb(217,217,217)]" />
								</div>
							</div>
							<div className="py-[13px] px-[14px] sm:pe-0">
								<h3 className="font-semibold text-[19px]">
									{title}
								</h3>
								<p className="text-[rgb(143,143,143)] text-sm sm:text-base max-w-[280px]">
									{des}
								</p>
								<div className="mt-6 flex items-center gap-[9px]">
									<FiveStar i={5} />
									<span className="text-sm font-semibold">
										{rate}{" "}
										<span className="text-searchText font-normal">{`(${reviews} reviews)`}</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</section>
	);
}
