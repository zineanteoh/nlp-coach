import React from "react";

export const Microphone2 = () => {
	const audioContext = new AudioContext();

	// create buffer
	const TIME_IN_SECONDS = 1;
	const buffer = audioContext.createBuffer(
		1,
		audioContext.sampleRate * TIME_IN_SECONDS,
		audioContext.sampleRate
	);

	// read the buffer of index 0
	const channelData = buffer.getChannelData(0);

	for (let i = 0; i < buffer.length; ++i) {
		channelData[i] = Math.random() * 2 - 1;
	}

	// turn volume down by creating a gainNode
	const primaryGainControl = audioContext.createGain();
	primaryGainControl.gain.setValueAtTime(0.02, 0);

	// connect audio node to destination audio node (to play audio on user computer)
	primaryGainControl.connect(audioContext.destination);

	// call start on source node to play audio

	console.log(channelData.length);

	const playWhiteNoise = () => {
		// create bufferSource that plays the audio in buffer
		const whiteNoiseSource = audioContext.createBufferSource();
		whiteNoiseSource.buffer = buffer;
		whiteNoiseSource.connect(primaryGainControl);
		whiteNoiseSource.start();
	};

	return (
		<div>
			<button onClick={playWhiteNoise}>
				Click Me To Play White Noise
			</button>
		</div>
	);
};
