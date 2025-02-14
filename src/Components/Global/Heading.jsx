import { cn } from "@heroui/react";

export default function Heading({children, className}) {
	return (
		<h1 className={cn("font-lexend font-extrabold text-[32px]", className)}>
			{children}
		</h1>
	);
}
