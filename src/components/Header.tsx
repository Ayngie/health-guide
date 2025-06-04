import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <section className="p-4 flex flex-col sm:flex-row justify-between items-center border-b dark:border-gray-700 gap-4">
        {/* Page "Logo" */}
        {/* Unlike a-tag the Link element doesn't cause the SPA to reload. */}
        <Link to"/">
          <h1 className="text-4xl p-4 font-bold">{t("appTitle")}</h1>
        </Link>
      
        {/* Search item on site */}
        <SearchForm />

        {/* Toggles */}
        <div className="flex gap-4">
          <DarkModeToggle />
          <LanguageToggle />
        </div>
      </section>

      <Nav />
    </header>
  );
};

export default Header;
