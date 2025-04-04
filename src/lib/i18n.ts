import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      appTitle: "Gestational Diabetes Guide",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      searchPlaceholder: "Search articles...",
      searchError: "Input contains inappropriate language",
      notFound: "Page Not Found",
      notFoundMessage: "Sorry, the page you're looking for doesn't exist.",
      areaNotFound: "Health area not found",
      articleNotFound: "Article not found",
      noSearchResults: 'No results found for "{query}"',
      backToHome: "Back to Home",
      menuToggle: "Toggle menu for {area}",
    },
  },
  sv: {
    translation: {
      appTitle: "Graviditetsdiabetesguiden",
      lightMode: "Ljust läge",
      darkMode: "Mörkt läge",
      searchPlaceholder: "Sök artiklar...",
      searchError: "Inmatningen innehåller olämpligt språk",
      notFound: "Sidan Hittades Inte",
      notFoundMessage: "Förlåt, sidan du letar efter finns inte.",
      areaNotFound: "Hälsoområde hittades inte",
      articleNotFound: "Artikel hittades inte",
      noSearchResults: 'Inga resultat för "{query}"',
      backToHome: "Tillbaka till Hem",
      menuToggle: "Växla meny för {area}",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sv",
  fallbackLng: "sv",
  interpolation: { escapeValue: false },
});

export default i18n;
