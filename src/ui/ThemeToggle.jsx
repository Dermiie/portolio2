import { IoSunny } from 'react-icons/io5';
const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');

    // Save user preference
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded ">
      <IoSunny className="text-xl" />
    </button>
  );
};

export default ThemeToggle;
