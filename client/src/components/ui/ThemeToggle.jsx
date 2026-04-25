export default function ThemeToggle({ isDark, onToggle }) {
  const bgColor = isDark ? "rgb(23, 23, 23)" : "rgb(255, 255, 255)";
  const borderColor = isDark ? "rgb(39, 39, 39)" : "rgb(229, 229, 229)";
  const iconColor = isDark ? "rgb(200, 200, 200)" : "rgb(120, 120, 120)";

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: iconColor,
      }}
      className="
        w-9 h-9 rounded-full flex items-center justify-center
        border
        hover:scale-105 transition-all duration-200 shadow-sm
      "
    >
      {isDark ? (
        /* Sun icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm8-4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM4 13a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1Zm14.95-7.364a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM6.757 17.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM21 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM5.05 6.636a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.757 8.757l-.707-.707a1 1 0 0 1 0-1.414ZM18.364 17.657a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414Z" />
        </svg>
      ) : (
        /* Moon icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  );
}
