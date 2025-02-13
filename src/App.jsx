import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./Components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MyNavbar />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
