import { Home } from "./pages/Home";
import "./App.css";
import logo from "./assets/bot.png";

function App() {
	return (
		<div className="app">
			<img alt="bot" src={logo} className="botImg"></img>
			<h1>speech app demo</h1>
			<Home />
		</div>
	);
}

export default App;
