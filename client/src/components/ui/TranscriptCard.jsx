import { formatTranscript } from "../../utils/formatTranscript";

export default function TranscriptCard({ transcript, onReset }) {
  const display = formatTranscript(transcript);

  return (
    <div className="w-full mt-4">
      <div
        className={`
          min-h-[160px] w-full rounded-2xl border px-6 py-5
          transition-all duration-300
          ${
            transcript
              ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm"
              : "bg-neutral-100 dark:bg-neutral-900 border-transparent"
          }
        `}
      >
        {transcript ? (
          <p className="text-neutral-800 dark:text-neutral-200 text-base leading-relaxed tracking-normal">
            {display}
          </p>
        ) : (
          <p className="text-neutral-400 dark:text-neutral-600 text-sm text-center mt-12">
            Your transcript will appear here...
          </p>
        )}
      </div>

      {transcript && (
        <div className="flex justify-end mt-3 gap-3">
          <button
            onClick={() => navigator.clipboard.writeText(transcript)}
            className="text-xs text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            Copy
          </button>
          <button
            onClick={onReset}
            className="text-xs text-neutral-400 dark:text-neutral-600 hover:text-red-400 transition-colors"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
