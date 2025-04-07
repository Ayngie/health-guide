import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <article className="text-center">
      <h2 className="text-5xl mb-6">{t("home.welcome")}!</h2>
      <h3 className="text-xl">{t("home.welcomeText")}</h3>
    </article>
  );
};

export default Home;
