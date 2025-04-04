import { Link, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
  const error = useRouteError() as Error | undefined;
  const { t } = useTranslation();

  let title = t("notFound");
  let message = t("notFoundMessage");

  if (error) {
    const [errorType, param] = error.message.split(":");
    switch (errorType) {
      case "areaNotFound":
        title = t("areaNotFound");
        break;
      case "articleNotFound":
        title = t("articleNotFound");
        break;
      case "noSearchResults":
        title = t("noSearchResults", { query: param });
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{message}</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-600"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
};

export default NotFound;
