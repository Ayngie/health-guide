export interface IArticle {
  id: string;
  titles: { en: string; sv: string };
  content: IParagraph[];
  keywords: string[];
}

export interface IParagraph {
  id: string;
  paragraph: { en: string; sv: string };
}

export interface IHealthArea {
  id: string;
  titles: { en: string; sv: string };
  articles: IArticle[];
}
