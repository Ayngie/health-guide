import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      appTitle: "Health Guide",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      search: "Search",
      searchResults: "Search results for",
      searchPlaceholder: "Search articles...",
      searchQueryEmpty:
        "You are welcome to enter a search term in the search field to search articles.",
      searchError: "Input contains inappropriate language",
      notFound: "Page Not Found",
      notFoundMessage: "Sorry, the page you're looking for doesn't exist.",
      areaNotFound: "Health area not found",
      articleNotFound: "Article not found",
      noSearchResults: 'No results found for "{query}"',
      backToHome: "Back to Home",
      menuToggle: "Toggle menu for {area}",

      home: {
        welcome: "Welcome",
        welcomeText: "We are so happy you found your way to our page!",
      },
    },
  },
  sv: {
    translation: {
      appTitle: "Hälsoguide",
      lightMode: "Ljust läge",
      darkMode: "Mörkt läge",
      search: "Sök",
      searchResults: "Sökresultat för",
      searchPlaceholder: "Sök artiklar...",
      searchQueryEmpty:
        "Välkommen att skriva in en sökterm i sökfältet för att söka artiklar.",
      searchError: "Inmatningen innehåller olämpligt språk",
      notFound: "Sidan Hittades Inte",
      notFoundMessage: "Förlåt, sidan du letar efter finns inte.",
      areaNotFound: "Hälsoområde hittades inte",
      articleNotFound: "Artikel hittades inte",
      noSearchResults: 'Inga resultat för "{query}"',
      backToHome: "Tillbaka till Hem",
      menuToggle: "Växla meny för {area}",

      home: {
        welcome: "Välkommen",
        welcomeText: "Vi är så glada att du har hittat hit till vår sida!",
      },
    },
  },
};

const savedLanguage = localStorage.getItem("chosenLanguage");

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage ?? "sv",
  fallbackLng: "sv",
  supportedLngs: ["en", "sv"],
  interpolation: { escapeValue: false },
});

export default i18n;
