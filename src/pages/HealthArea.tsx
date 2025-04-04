import { useParams } from "react-router-dom";
import articlesData from "../data/articles.json";
import { IHealthArea } from "../types";
import { useTranslation } from "react-i18next";

const HealthArea: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const { i18n } = useTranslation();
  const healthAreas = articlesData.healthAreas as IHealthArea[];
  const healthArea = healthAreas.find((a) => a.id === area);

  if (!healthArea) throw new Error("areaNotFound");

  return (
    <h2 className="text-2xl">
      {healthArea.titles[i18n.language as "en" | "sv"]}
    </h2>
  );
};

export default HealthArea;
