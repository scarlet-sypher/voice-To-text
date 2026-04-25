export default function RecordButton({ isListening, onToggle, isDark }) {
  const bgColor = isListening
    ? isDark
      ? "rgb(23, 23, 23)"
      : "rgb(23, 23, 23)"
    : isDark
      ? "rgb(23, 23, 23)"
      : "rgb(255, 255, 255)";

  const borderColor = isListening
    ? "transparent"
    : isDark
      ? "rgb(39, 39, 39)"
      : "rgb(229, 229, 229)";

  const textColor = isListening
    ? isDark
      ? "rgb(245, 245, 245)"
      : "rgb(255, 255, 255)"
    : isDark
      ? "rgb(160, 160, 160)"
      : "rgb(100, 100, 100)";

  const labelColor = isListening
    ? isDark
      ? "rgb(245, 245, 245)"
      : "rgb(23, 23, 23)"
    : isDark
      ? "rgb(120, 120, 120)"
      : "rgb(160, 160, 160)";

  const pulseColor = isDark ? "rgb(120, 120, 120)" : "rgb(180, 180, 180)";

  return (
    <button
      onClick={onToggle}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className={`
        relative w-20 h-20 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2
        ${isListening ? "shadow-lg scale-105" : "border shadow-sm hover:shadow-md hover:scale-105"}
      `}
      aria-label={isListening ? "Stop recording" : "Start recording"}
    >
      {/* Pulse ring when active */}
      {isListening && (
        <span
          style={{ backgroundColor: pulseColor }}
          className="absolute inset-0 rounded-full animate-ping opacity-20"
        />
      )}

      {/* Mic icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 transition-colors duration-300"
      >
        <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4Z" />
        <path d="M19 10a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V19H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A7 7 0 0 0 19 10Z" />
      </svg>

      {/* Status label */}
      <span
        style={{ color: labelColor }}
        className="absolute -bottom-7 text-xs font-medium tracking-widest uppercase transition-colors duration-300"
      >
        {isListening ? "Listening" : "Record"}
      </span>
    </button>
  );
}
