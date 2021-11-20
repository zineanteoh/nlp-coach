import React from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";

const appId = "90de1abe-ef06-4414-8d4a-53c3505eb489";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export const Microphone2 = () => {
	const { transcript, listening, browserSupportsSpeechRecognition } =
		useSpeechRecognition();
	const startListening = () =>
		SpeechRecognition.startListening({ continuous: true });

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	return (
		<div>
			<p>Microphone: {listening ? "on" : "off"}</p>
			<button
				onTouchStart={startListening}
				onMouseDown={startListening}
				onTouchEnd={SpeechRecognition.stopListening}
				onMouseUp={SpeechRecognition.stopListening}
			>
				Hold to talk
			</button>
			<p>{transcript}</p>
		</div>
	);
};
