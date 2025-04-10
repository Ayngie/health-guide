export interface IHealthArea {
  id: string;
  titles: { en: string; sv: string };
  articles: IArticle[];
}

export interface IArticle {
  id: string;
  titles: { en: string; sv: string };
  content: IParagraph[];
  keywords: string[];
  image?: string;
}

export interface IParagraph {
  id: string;
  paragraph: { en: string; sv: string };
}
