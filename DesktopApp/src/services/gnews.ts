import axios from "axios";
import { INewsArticle } from "../interface";

const baseUrl = `${process.env.GNEWS_URL}`;

const getTopHeadlines = async ({query, category="general", country="us", max="10"}:{query?:string, category?:string, country?:string, max?:string}) => {
  const url = `${baseUrl}/top-headlines`;
  const response = await axios.get(url, {
    params: {
      apikey: `${process.env.GNEWS_APIKEY}`,
      category: category,
      country: country,
      max:max,
      q: query
    },
    withCredentials: false
  });
  const articles: INewsArticle[] = response.data.articles.map(
    ({ source, ...article }: { source: { name: string }; [key: string]: any }) => ({
      ...article,
      author: source?.name,
      source: "GNews"
    })
  );

  return articles;
};

const getArticles = async ({
  query, category, country = "Any", max = "10", 
}: {
  query?: string, category?: string, country?: string, max?: string
}) => {
  const url = `${baseUrl}/search`;
  const response = await axios.get(url, {
    params: {
      apikey: `${process.env.GNEWS_APIKEY}`,
      country: country,
      category: category,
      max: max,
      q: query
    },
    withCredentials: false
  });
  const articles: INewsArticle[] = response.data.articles.map(
    ({ source, ...article }: { source: { name: string }; [key: string]: any }) => ({
      ...article,
      author: source?.name,
      source: "GNews"
    })
  );

  return articles;
};

export default {
  getArticles,
  getTopHeadlines,
};
