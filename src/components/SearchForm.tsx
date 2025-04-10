import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sanitizeInput } from "../lib/utils";

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <form onSubmit={handleSearch} className="flex flex-col gap-2">
      <fieldset>
        {/* Hidden label for screen readers (sr-only) */}
        <legend className="sr-only">{t("search")}</legend>{" "}
        <div className="flex gap-2">
          <input
            type="search"
            id="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={t("searchPlaceholder")}
          />
          <button
            type="submit"
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t("search")}
          </button>
        </div>
        {searchError && (
          <p id="search-error" className="text-red-500 text-sm" role="alert">
            {searchError}
          </p>
        )}
      </fieldset>
    </form>
  );
};

export default SearchForm;
