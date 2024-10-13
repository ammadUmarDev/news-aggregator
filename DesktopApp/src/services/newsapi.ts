import axios from "axios";
import { INewsArticle } from "../interface";

const baseUrl = `${process.env.NEWSAPI_URL}`;

const getArticles = async ({
  query, pageSize, sources, sortBy, from, to
}: {
  query?: string,
  pageSize?: string,
  sources?: string,
  sortBy?: string,
  from?: string,
  to?: string
}) => {
  const url = `${baseUrl}/everything`;
  const response = await axios.get(url, {
    params: {
      q: query,
      pageSize: pageSize,
      sources: sources,
      sortBy: sortBy,
      from: from,  
      to: to,     
      apiKey: `${process.env.NEWSAPI_APIKEY}`
    },
    withCredentials: false
  });
  const articles: INewsArticle[] = response.data.articles.map(
    (article: INewsArticle) => ({
      ...article,
      source: "News API",
    })
  );
  return articles;
};


const getTopHeadlines = async ({category, country="us", pageSize="10", sources, sortBy, }:{category?:string, country?: string, pageSize?: string,sources?:string, sortBy?: string}) => {
  const url = `${baseUrl}/top-headlines`;
  const response = await axios.get(url, {
    params: {
      apikey: `${process.env.NEWSAPI_APIKEY}`,
      country: country,
      category: category,
      pageSize:pageSize,
      sortBy: sortBy,
      sources: sources,
    },
    withCredentials: false
  });
  const articles: INewsArticle[] = response.data.articles.map(
    (article: INewsArticle) => ({
      ...article,
      source: "News API",
    })
  );

  return articles;
};

export default {
  getArticles,
  getTopHeadlines
};
