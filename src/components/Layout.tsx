import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import { sanitizeInput } from "../lib/utils";

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "sv" ? "en" : "sv");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError(null);
    try {
      const cleanQuery = sanitizeInput(searchQuery);
      if (cleanQuery) navigate(`/search?q=${encodeURIComponent(cleanQuery)}`);
    } catch (error) {
      setSearchError(t((error as Error).message));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 flex flex-col sm:flex-row justify-between items-center border-b dark:border-gray-700 gap-4">
        <h1 className="text-xl font-bold">{t("appTitle")}</h1>
        <form onSubmit={handleSearch} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="search"
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              aria-label={t("searchPlaceholder")}
            />
            <button
              type="submit"
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-600"
            >
              {t("search")}
            </button>
          </div>
          {searchError && (
            <p id="search-error" className="text-red-500 text-sm" role="alert">
              {searchError}
            </p>
          )}
        </form>

        <div className="flex gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
            aria-pressed={darkMode}
          >
            {darkMode ? t("lightMode") : t("darkMode")}
          </button>

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
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
