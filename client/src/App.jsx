import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎤 Speech to Text</h1>

      <p>Status: {listening ? "Listening..." : "Stopped"}</p>

      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        Start
      </button>

      <button onClick={SpeechRecognition.stopListening}>Stop</button>

      <button onClick={resetTranscript}>Clear</button>

      <div
        style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}
      >
        <strong>Transcript:</strong>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default App;
