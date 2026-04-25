import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

export default function AppShell({ children }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center px-4 py-16 transition-colors duration-300">
      {/* Theme toggle — top right corner */}
      <div className="fixed top-4 right-4">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>

      <div className="w-full max-w-xl">{children}</div>
    </div>
  );
}
