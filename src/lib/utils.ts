import sanitizeHtml from "sanitize-html";

const profanityList = ["damn", "hell", "fuck", "shit"];

export const sanitizeInput = (input: string): string => {
  const clean = sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} });
  const words = clean.toLowerCase().split(/\s+/);
  const hasProfanity = words.some((word: string) =>
    profanityList.includes(word)
  );
  if (hasProfanity) throw new Error("searchError");
  return clean;
};

export const searchArticles = (query: string, articlesData: any): any[] => {
  const cleanQuery = sanitizeInput(query).toLowerCase();
  const healthAreas = articlesData.healthAreas as any[];
  const results: any[] = [];

  healthAreas.forEach((area) => {
    area.articles.forEach((article: any) => {
      const titleEn = article.titles.en.toLowerCase();
      const titleSv = article.titles.sv.toLowerCase();
      const keywords = article.keywords.map((k: string) => k.toLowerCase());
      const contentEn = article.content
        .map((p: any) => p.paragraph.en.toLowerCase())
        .join(" ");
      const contentSv = article.content
        .map((p: any) => p.paragraph.sv.toLowerCase())
        .join(" ");

      if (
        titleEn.includes(cleanQuery) ||
        titleSv.includes(cleanQuery) ||
        contentEn.includes(cleanQuery) ||
        contentSv.includes(cleanQuery) ||
        keywords.some((k: string) => k.includes(cleanQuery))
      ) {
        results.push({ areaId: area.id, article });
      }
    });
  });

  return results;
};
