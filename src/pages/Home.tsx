import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return <h2 className="text-2xl">{t("appTitle")}</h2>;
};

export default Home;
