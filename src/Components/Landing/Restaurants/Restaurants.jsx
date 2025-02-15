import RestaurantsLeft from "./RestaurantsLeft";

export default function Restaurants() {
	return (
		<main className="max-w-[1440px] mx-auto px-2 md:px-[47px] flex flex-col 1070px:flex-row pb-5">
			<RestaurantsLeft />
			<section className="mt-2 ps-2 1070px:w-1/2">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d175367.09520288758!2d103.7794441064184!3d1.3859689126085273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sbd!4v1739622319031!5m2!1sen!2sbd"
					className="w-full h-[600px] sm:h-[665px] 1070px:h-[1264px]"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</section>
		</main>
	);
}
