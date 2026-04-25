import { formatTranscript } from "../../utils/formatTranscript";

export default function TranscriptCard({ transcript, onReset, isDark }) {
  const display = formatTranscript(transcript);

  const cardBgColor = transcript
    ? isDark
      ? "rgb(23, 23, 23)"
      : "rgb(255, 255, 255)"
    : isDark
      ? "rgb(23, 23, 23)"
      : "rgb(245, 245, 245)";

  const cardBorderColor = transcript
    ? isDark
      ? "rgb(39, 39, 39)"
      : "rgb(229, 229, 229)"
    : "transparent";

  const textColor = transcript
    ? isDark
      ? "rgb(220, 220, 220)"
      : "rgb(32, 32, 32)"
    : isDark
      ? "rgb(120, 120, 120)"
      : "rgb(160, 160, 160)";

  const buttonTextColor = isDark ? "rgb(120, 120, 120)" : "rgb(160, 160, 160)";
  const buttonHoverColor = isDark ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)";

  return (
    <div className="w-full mt-4">
      <div
        style={{
          backgroundColor: cardBgColor,
          borderColor: cardBorderColor,
        }}
        className="min-h-[160px] w-full rounded-2xl border px-6 py-5 transition-all duration-300 shadow-sm"
      >
        {transcript ? (
          <p
            style={{ color: textColor }}
            className="text-base leading-relaxed tracking-normal"
          >
            {display}
          </p>
        ) : (
          <p style={{ color: textColor }} className="text-sm text-center mt-12">
            Your transcript will appear here...
          </p>
        )}
      </div>

      {transcript && (
        <div className="flex justify-end mt-3 gap-3">
          <button
            onClick={() => navigator.clipboard.writeText(transcript)}
            style={{ color: buttonTextColor }}
            className="text-xs transition-colors hover:opacity-75"
            onMouseEnter={(e) => (e.target.style.color = buttonHoverColor)}
            onMouseLeave={(e) => (e.target.style.color = buttonTextColor)}
          >
            Copy
          </button>
          <button
            onClick={onReset}
            style={{ color: buttonTextColor }}
            className="text-xs transition-colors hover:opacity-75"
            onMouseEnter={(e) =>
              (e.target.style.color = isDark
                ? "rgb(255, 100, 100)"
                : "rgb(200, 50, 50)")
            }
            onMouseLeave={(e) => (e.target.style.color = buttonTextColor)}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
