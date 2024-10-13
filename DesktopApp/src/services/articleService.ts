import { format } from "date-fns";

import { GNewsService, NewsAPIService, GuardianService } from "../services";
import { INewsArticle, IPreference } from "../interface";
import { forEach } from "lodash";

interface FetchArticlesParams {
  query: string;
  category: string;
  source: string; 
  from: Date;
  to: Date;
}

type ArticleFetcher = (params: any) => Promise<any[]>;

const fetchLatestArticles = async (userPreference: IPreference | null) => {
  const defaultCategory = "general";
  const defaultSources = ["NewsAPI", "GNews"];

  const category = userPreference?.categories?.length
    ? userPreference.categories.join(',')
    : defaultCategory;

  const sources = userPreference?.sources?.length
    ? userPreference.sources
    : defaultSources;

    let newsAPIArticles: INewsArticle[] = [];
    let gNewsAPIArticles: INewsArticle[] = [];

  try {
    newsAPIArticles = await NewsAPIService.getTopHeadlines({
      category: category,
      country: "us",  
      pageSize: "5",
    });
    gNewsAPIArticles = await GNewsService.getTopHeadlines({
      category: category,
      country: "us",
      max: "5",
    });

  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; 
  }
  return [...newsAPIArticles, ...gNewsAPIArticles];
};



const sourceFetchers: Record<string, ArticleFetcher> = {
  NewsAPI: async (params) => {
    return await NewsAPIService.getArticles({
      query: encodeURIComponent(params.query),
      pageSize: "5",
      sortBy: "publishedAt",
      from: format(params.from, "yyyy-MM-dd"),
      to: format(params.to, "yyyy-MM-dd"),
    });
  },
  GNews: async (params) => {
    return await GNewsService.getArticles({
      query: encodeURIComponent(params.query),
      max: "5",
      country: "us",
      category: params.category.toLowerCase(),
    });
  },
  Guardian: async (params) => {
    return await GuardianService.getArticles({
      query: encodeURIComponent(params.query),
      max: "5",
      category: params.category.toLowerCase(),
    });
  },
};

const fetchArticles = async ({ query, category, source, from, to }: FetchArticlesParams) => {
  const articles: any[] = [];
  const modifiedQuery = query.replace(/[^a-zA-Z0-9\s]/g, ' '); 

  if (source === "All Sources") {
    const newsAPIArticles = await sourceFetchers.NewsAPI({ modifiedQuery, from, to });
    const gNewsArticles = await sourceFetchers.GNews({ modifiedQuery, category });
    const guardianArticles = await sourceFetchers.Guardian({ modifiedQuery, category });
    articles.push(...newsAPIArticles, ...gNewsArticles, ...guardianArticles);
  } else if (source in sourceFetchers) {
    const sourceArticles = await sourceFetchers[source]({ modifiedQuery, category, from, to });
    articles.push(...sourceArticles);
  }

  return articles;
};

export default {
  fetchLatestArticles,
  fetchArticles
}
