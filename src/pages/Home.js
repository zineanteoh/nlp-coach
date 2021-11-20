import React from "react";
import "./Home.css";
import { ReactSpeechRecognition } from "./ReactSpeechRecognition";

export const Home = () => {
	return (
		<div className="container">
			<ReactSpeechRecognition />
		</div>
	);
};
