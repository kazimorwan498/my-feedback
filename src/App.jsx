import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./Components/Shared/Navbar";
import Error from "./Components/Global/Error";
import Hero from "./Components/Landing/HomePage/Hero";
import Restaurants from "./Components/Landing/Restaurants/Restaurants";
import BellaItalia from "./Components/Landing/BellaItalia/BellaItalia";
import Footer from "./Components/Shared/Footer";

function App() {
	return (
		<BrowserRouter>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/restaurants" element={<Restaurants />} />
				<Route path="/bellaItalia" element={<BellaItalia />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
