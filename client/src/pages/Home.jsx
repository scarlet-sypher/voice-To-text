import AppShell from "../components/layout/AppShell";
import RecordButton from "../components/ui/RecordButton";
import TranscriptCard from "../components/ui/TranscriptCard";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";

export default function Home() {
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
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Voice to Text
          </h1>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 tracking-wide">
            Press the button and start speaking
          </p>
        </div>

        {/* Record Button */}
        <RecordButton isListening={isListening} onToggle={handleToggle} />

        {/* Transcript */}
        <TranscriptCard transcript={transcript} onReset={resetTranscript} />
      </div>
    </AppShell>
  );
}
