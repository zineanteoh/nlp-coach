import React from "react";
import "./Home.css";
import { Microphone } from "./Microphone";
import { Microphone2 } from "./Microphone2";

export const Home = () => {
	return (
		<div className="container">
			{/* <Microphone /> */}
			<Microphone2 />
		</div>
	);
};
