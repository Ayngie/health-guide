export interface IArticle {
  id: string;
  titles: { en: string; sv: string };
  content: { en: string; sv: string };
  keywords: string[];
}

export interface IHealthArea {
  id: string;
  titles: { en: string; sv: string };
  articles: IArticle[];
}
