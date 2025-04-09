import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
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
      className="flex items-center px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600"
      aria-label={`Switch to ${i18n.language === "sv" ? "EN" : "SV"}`}
    >
      <FaGlobe className="mr-2" />
      {i18n.language === "sv" ? "EN" : "SV"}
    </button>
  );
};

export default LanguageToggle;
