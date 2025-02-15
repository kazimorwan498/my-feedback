import { cn } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function HeroCards({
	img,
	title,
	des,
	rate,
	reviews,
	className,
}) {
	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate("/restaurants");
	};

	return (
		<div
			className={cn(
				"w-[285px] min-w-[285px] bg-[rgb(248,248,248)] rounded-xl hover:shadow-lg transition-all cursor-pointer",
				className
			)}
			onClick={handleClick}
		>
			<div className="relative">
				<img src={img} alt={title} />
				<div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-[5px]">
					<span className="size-[9px] rounded-full bg-white" />
					<span className="size-[9px] rounded-full bg-[rgb(217,217,217)]" />
					<span className="size-[9px] rounded-full bg-[rgb(217,217,217)]" />
					<span className="size-[9px] rounded-full bg-[rgb(217,217,217)]" />
				</div>
			</div>
			<div className="py-[13px] px-[14px]">
				<h3 className="font-semibold text-[19px]">{title}</h3>
				<p className="text-[rgb(143,143,143)] text-sm sm:text-base">
					{des}
				</p>
				<div className="mt-6 flex items-center gap-[9px]">
					<div className="flex gap-[6.05px]">
						{Array.from(Array(5).keys()).map((i) => (
							<img key={i} src="/star.svg" alt="Star" />
						))}
					</div>
					<span className="text-sm font-semibold">
						{rate}{" "}
						<span className="text-searchText font-normal">{`(${reviews} reviews)`}</span>
					</span>
				</div>
			</div>
		</div>
	);
}
