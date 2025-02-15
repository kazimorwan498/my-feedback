import { BreadcrumbItem, Breadcrumbs, cn } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function MyBreadcrumbs({ children, className }) {
	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate("/");
	};

	return (
		<Breadcrumbs
			itemClasses={{
				separator: "px-2",
			}}
			separator="/"
			color="secondary"
			className={cn("font-semibold", className)}
		>
			<BreadcrumbItem onClick={handleClick}>Home</BreadcrumbItem>
			<BreadcrumbItem>{children}</BreadcrumbItem>
		</Breadcrumbs>
	);
}
