import React, { useState } from "react";
import { ReactMic } from "react-mic";

export const SpeechWave = () => {
	const [record, setRecord] = useState(false);

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

	return (
		<div>
			<ReactMic
				record={record}
				className="sound-wave"
				onStop={onStop}
				onData={onData}
				strokeColor="#046B99"
				backgroundColor="#FFF"
			/>
			<button onClick={startRecording} type="button">
				Start
			</button>
			<button onClick={stopRecording} type="button">
				Stop
			</button>
		</div>
	);
};
