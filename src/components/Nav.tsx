import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import articlesData from "../data/articles.json";
import { IHealthArea } from "../types";

const Nav: React.FC = () => {
  const { i18n, t } = useTranslation();
  const healthAreas = articlesData.healthAreas as IHealthArea[];
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleArea = (areaId: string) => {
    setExpanded((prev) => ({ ...prev, [areaId]: !prev[areaId] }));
  };

  return (
    <nav className="p-4 border-b dark:border-gray-700">
      {/* Subject groups */}
      <ul className="space-y-2">
        {healthAreas.map((area) => {
          const isExpanded = expanded[area.id] || false;
          return (
            <li key={area.id}>
              <button
                onClick={() => toggleArea(area.id)}
                className="w-full flex items-center p-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isExpanded}
                aria-controls={`menu-${area.id}`}
                aria-label={t("menuToggle", {
                  area: area.titles[i18n.language as "en" | "sv"],
                })}
              >
                <span>{area.titles[i18n.language as "en" | "sv"]}</span>
                {isExpanded ? (
                  <FaChevronUp className="ml-2 w-4 h-4" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="ml-2 w-4 h-4" aria-hidden="true" />
                )}
              </button>

              {/* Submenu items */}
              <ul
                id={`menu-${area.id}`}
                className={`ml-4 mt-1 space-y-1 ${isExpanded ? "block" : "hidden"}`}
              >
                {area.articles.map((article) => (
                  <li key={article.id}>
                    <NavLink
                      to={`/health/${area.id}/${article.id}`}
                      className={({ isActive }) =>
                        `text-sm block p-2 ${
                          isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-600 dark:text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        }`
                      }
                    >
                      {article.titles[i18n.language as "en" | "sv"]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
