import { Link } from "react-router-dom";

export default function Error() {
	return (
		<>
			<div className="flex flex-col items-center justify-center h-[85dvh] text-secondary font-Montserrat">
				<span className="text-sm sm:text-base md:text-xl uppercase text-center font-semibold">
					oops! page not found, {""}
					<Link
						className="text-primary underline underline-offset-[3px]"
						to="/"
					>
						Return to Home
					</Link>
				</span>
				<h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-extrabold font-lexend">
					404
				</h1>
				<p className="text-sm sm:text-base md:text-xl uppercase text-center font-semibold px-5">
					we are sorry, but the page you requested was not found
				</p>
			</div>
		</>
	);
}
