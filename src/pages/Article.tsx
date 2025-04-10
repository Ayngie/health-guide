import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";
import { IHealthArea } from "../types";
import { useTranslation } from "react-i18next";
import GetImage from "../components/GetImage";

const Article: React.FC = () => {
  const { area, articleId } = useParams<{ area: string; articleId: string }>();
  const { i18n } = useTranslation();
  const healthAreas = articlesData.healthAreas as IHealthArea[];
  const healthArea = healthAreas.find((a) => a.id === area);
  const article = healthArea?.articles.find((a) => a.id === articleId);

  if (!healthArea) throw new Error("areaNotFound");
  if (!article) throw new Error("articleNotFound");

  const currentTitle = article.titles[i18n.language as "en" | "sv"];
  return (
    <article className="max-w-3xl mx-auto">
      <h2 className="text-3xl text-center mb-3">{currentTitle}</h2>
      {article.image && (
        <GetImage imageSrc={article.image} title={currentTitle} />
      )}
      {article.content.map((paragraph) => (
        <p key={paragraph.id} className="mb-4">
          {paragraph.paragraph[i18n.language as "en" | "sv"]}
        </p>
      ))}
    </article>
  );
};

export default Article;
