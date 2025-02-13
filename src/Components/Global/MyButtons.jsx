import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";
import React from "react";

export default function MyButtons({ children, className, onClick }) {
	return (
		<Button
			className={cn(
				"px-7 !py-[11.5px] bg-secondary text-white rounded-full text-[0.96875rem] !size-auto",
				className
			)}
			onPress={onClick}
		>
			{children}
		</Button>
	);
}
