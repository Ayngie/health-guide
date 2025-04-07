import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "sv" ? "en" : "sv");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 flex flex-col sm:flex-row justify-between items-center border-b dark:border-gray-700 gap-4">
        <h1 className="text-xl font-bold">{t("appTitle")}</h1>

        {/* Search item on site */}
        <SearchForm />

        {/* Toggle dark / lightmode */}
        <div className="flex gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
            aria-pressed={darkMode}
          >
            {darkMode ? t("lightMode") : t("darkMode")}
          </button>

          {/* Toggle language */}
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
            aria-label={`Switch to ${i18n.language === "sv" ? "English" : "Svenska"}`}
          >
            {i18n.language === "sv" ? "English" : "Svenska"}
          </button>
        </div>
      </header>

      <Nav />
      <main className="p-10 bg-teal-50 dark:bg-gray-800">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
