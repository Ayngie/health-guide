import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem("darkMode") === "true"
  );

  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
      aria-pressed={darkMode}
    >
      {darkMode ? t("lightMode") : t("darkMode")}
    </button>
  );
};

export default DarkModeToggle;
