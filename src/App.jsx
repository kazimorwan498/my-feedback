import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./Components/Shared/Navbar";
import Error from "./Components/Global/Error";
import Hero from "./Components/Landing/HomePage/Hero";
import Restaurants from "./Components/Landing/Restaurants/Restaurants";

function App() {
	return (
		<BrowserRouter>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/restaurants" element={<Restaurants />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
