import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./Components/Shared/Navbar";
import Error from "./Components/Global/Error";
import HomePage from "./Components/Landing/HomePage/HomePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MyNavbar />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
