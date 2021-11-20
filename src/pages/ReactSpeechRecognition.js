import React, { useState } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import { ReactMic } from "react-mic";

const appId = "90de1abe-ef06-4414-8d4a-53c3505eb489";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export const ReactSpeechRecognition = () => {
	// Hooks for Speech wave
	const [record, setRecord] = useState(false);

	// Speech wave methods
	const startRecording = () => {
		setRecord(true);
	};
	const stopRecording = () => {
		setRecord(false);
	};
	const onData = (recordedBlob) => {
		console.log("chunk of real-time data is: ", recordedBlob);
	};
	const onStop = (recordedBlob) => {
		console.log("recordedBlob is: ", recordedBlob);
	};

	// Configuration for react-speech-recognition
	const { transcript, listening, browserSupportsSpeechRecognition } =
		useSpeechRecognition();
	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true });

	// Check if react-speech-recognition is supported
	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	return (
		<div>
			<ReactMic
				record={record}
				className="sound-wave"
				strokeColor="#046B99"
				backgroundColor="#FFF"
			/>
			<p>Toggle Microphone:</p>
			<button
				onClick={() => {
					if (listening) {
						SpeechRecognition.stopListening();
						stopRecording();
					} else {
						startListening();
						startRecording();
					}
				}}
			>
				{listening ? "Stop" : "Start"}
			</button>
			<p>{transcript}</p>
		</div>
	);
};
