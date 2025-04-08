import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage: string = i18n.language === "sv" ? "en" : "sv";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("chosenLanguage", newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
      aria-label={`Switch to ${i18n.language === "sv" ? "English" : "Svenska"}`}
    >
      {i18n.language === "sv" ? "English" : "Svenska"}
    </button>
  );
};

export default LanguageToggle;
