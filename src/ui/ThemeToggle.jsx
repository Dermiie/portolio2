import { IoSunny } from "react-icons/io5"
const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    // Save user preference
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 rounded dark:bg-gray-700 "
    >
      <IoSunny className="text-xl" />
    </button>
  );
};

export default ThemeToggle;