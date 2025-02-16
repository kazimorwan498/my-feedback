import { cn } from "@heroui/react";

export default function FiveStar({ className, star, i }) {
	return (
		<div className={cn("flex gap-[6.05px]", className)}>
			{Array.from(Array(i).keys()).map((i) => (
				<img className={star} key={i} src="/star.svg" alt="Star" />
			))}
		</div>
	);
}
