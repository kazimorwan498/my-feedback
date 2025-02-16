import Heading from "../../Global/Heading";
import {
	CallIcon,
	ClockIcon,
	LocationIcon,
	RestaurantMenuIcon,
	WebPageIcon,
} from "../../Global/Icons";
import { Link } from "react-router-dom";

export default function BellaItaliaAboutLocation() {
	const BellaItaliaAboutData = [
		{
			icon: <RestaurantMenuIcon />,
			label: <Link>See the menu</Link>,
		},
		{
			icon: <CallIcon />,
			label: "+847 87 37 29 01",
		},
		{
			icon: <LocationIcon />,
			label: "Singapore, Bishan",
		},
		{
			icon: <ClockIcon />,
			label: "7j/7, 08:00 - 22:00",
		},
		{
			icon: <WebPageIcon />,
			label: <Link>www.bellaitalia.com</Link>,
		},
	];

	const BellaItaliaAboutData2 = [
		"/fb.svg",
		"/insta.svg",
		"/tiktok.svg",
		"whatsapp.svg",
	];

	return (
		<section className="grid grid-cols-1 1070px:grid-cols-5 gap-y-10 pb-[52px] max-w-[1164px] border-b border-[rgb(220,220,220)]">
			<div className="col-span-2">
				<Heading className="font-semibold !text-2xl sm:!text-3xl md:text-[34px]">
					More Information's
				</Heading>

				<div className="space-y-[35px] mt-[42px]">
					{BellaItaliaAboutData.map(({ icon, label }, i) => (
						<div
							className="flex items-center gap-4 text-xl first:underline last:underline first:cursor-pointer last:cursor-pointer underline-offset-2 decoration-1"
							key={i}
						>
							<span className="size-6 md:size-[27px] object-contain">
								{icon}
							</span>
							<span>{label}</span>
						</div>
					))}
				</div>

				<div className="flex items-center gap-[27.55px] mt-[27px]">
					{BellaItaliaAboutData2.map((item, i) => (
						<img
							src={item}
							className="size-6 md:size-[29px] object-contain"
							key={i}
						/>
					))}
				</div>
			</div>

			<div className="col-span-3 1070px:ms-auto">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.51718166852!2d103.8456535196387!3d1.3628727448140763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1720c0e3288f%3A0x7de130104fef81c5!2sBishan-Ang%20Mo%20Kio%20Park!5e0!3m2!1sen!2sbd!4v1739701482356!5m2!1sen!2sbd"
					className="w-full 1070px:w-[579px] h-[432px] rounded-[9px]"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</section>
	);
}
