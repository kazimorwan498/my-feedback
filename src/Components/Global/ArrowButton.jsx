import { cn } from "@heroui/react";

export default function ArrowButton({ className, children, onClick }) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 bg-primary text-black bg-white/60 hover:bg-white size-[59px] rounded-full transition-transform-colors shadow-[0_12px_12px_rgba(0,0,0,0.12)] backdrop-blur active:scale-95",
				className
			)}
		>
			{children}
		</button>
	);
}
