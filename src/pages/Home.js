import React from "react";
import "./Home.css";
import { SpeechWave } from "./SpeechWave";
import { ReactSpeechRecognition } from "./ReactSpeechRecognition";

export const Home = () => {
	return (
		<div className="container">
			{/* <SpeechWave /> */}
			<ReactSpeechRecognition />
		</div>
	);
};
