import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import articlesData from "../data/articles.json";
import { searchArticles } from "../lib/utils";

const Search: React.FC = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  if (!query) return <p className="text-lg">Ange ett sökord för att börja.</p>;

  const results = searchArticles(query, articlesData);
  if (!results.length) throw new Error(`noSearchResults:${query}`);

  return (
    <div>
      <h2 className="text-2xl mb-4">
        {t("searchResults")} "{query}":
      </h2>
      <ul className="space-y-4" aria-label="Search results">
        {results.map(({ areaId, article }) => (
          <li key={`${areaId}-${article.id}`}>
            <Link
              to={`/health/${areaId}/${article.id}`}
              className="text-blue-500 hover:underline focus:text-blue-600"
            >
              {article.titles[i18n.language as "en" | "sv"]}
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              {article.content[i18n.language as "en" | "sv"].substring(0, 100)}
              ...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
