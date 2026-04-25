export default function RecordButton({ isListening, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative w-20 h-20 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400
        ${
          isListening
            ? "bg-neutral-900 dark:bg-neutral-100 shadow-lg scale-105"
            : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:scale-105"
        }
      `}
      aria-label={isListening ? "Stop recording" : "Start recording"}
    >
      {/* Pulse ring when active */}
      {isListening && (
        <span className="absolute inset-0 rounded-full animate-ping bg-neutral-700 dark:bg-neutral-300 opacity-20" />
      )}

      {/* Mic icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-7 h-7 transition-colors duration-300 ${
          isListening
            ? "text-white dark:text-neutral-900"
            : "text-neutral-500 dark:text-neutral-400"
        }`}
      >
        <path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4Z" />
        <path d="M19 10a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.93V19H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A7 7 0 0 0 19 10Z" />
      </svg>

      {/* Status label */}
      <span
        className={`absolute -bottom-7 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
          isListening
            ? "text-neutral-900 dark:text-neutral-100"
            : "text-neutral-400 dark:text-neutral-600"
        }`}
      >
        {isListening ? "Listening" : "Record"}
      </span>
    </button>
  );
}
