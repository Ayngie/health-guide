import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";
import { IHealthArea } from "../types";
import { useTranslation } from "react-i18next";

const Article: React.FC = () => {
  const { area, articleId } = useParams<{ area: string; articleId: string }>();
  const { i18n } = useTranslation();
  const healthAreas = articlesData.healthAreas as IHealthArea[];
  const healthArea = healthAreas.find((a) => a.id === area);
  const article = healthArea?.articles.find((a) => a.id === articleId);

  if (!healthArea) throw new Error("areaNotFound");
  if (!article) throw new Error("articleNotFound");

  return (
    <article>
      <h2 className="text-2xl">
        {article.titles[i18n.language as "en" | "sv"]}
      </h2>
      <p>{article.content[i18n.language as "en" | "sv"]}</p>
    </article>
  );
};

export default Article;
