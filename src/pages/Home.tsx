import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <article className="flex flex-col text-center">
      <h2 className="text-5xl mt-3 sm:mt-6 mb-6">{t("home.welcome")}!</h2>
      <h3 className="text-xl">{t("home.welcomeText")}</h3>
      <img
        src="https://picsum.photos/id/380/1200/800"
        alt="Random pic from Lorem Picsum"
        className="object-contain sm:object-none mt-10 mb-1 sm:mt-6 sm:mb-3"
      />
    </article>
  );
};

export default Home;
