import AppShell from "../components/layout/AppShell";
import RecordButton from "../components/ui/RecordButton";
import TranscriptCard from "../components/ui/TranscriptCard";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  const handleToggle = () => {
    isListening ? stopListening() : startListening();
  };

  return (
    <AppShell>
      <div className="flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1
            style={{ color: isDark ? "rgb(245, 245, 245)" : "rgb(10, 10, 10)" }}
            className="text-3xl font-semibold tracking-tight"
          >
            Voice to Text
          </h1>
          <p
            style={{
              color: isDark ? "rgb(160, 160, 160)" : "rgb(80, 80, 80)",
            }}
            className="text-sm tracking-wide"
          >
            Press the button and start speaking
          </p>
        </div>

        {/* Record Button */}
        <RecordButton
          isListening={isListening}
          onToggle={handleToggle}
          isDark={isDark}
        />

        {/* Transcript */}
        <TranscriptCard
          transcript={transcript}
          onReset={resetTranscript}
          isDark={isDark}
        />
      </div>
    </AppShell>
  );
}
