import axios from "axios";
import { INewsArticle } from "../interface";

const baseUrl = `${process.env.GUARDIAN_URL}`;

const getArticles = async ({query, category, max}:{query?:string, category?:string, max?:string}) => {
  const url = `${baseUrl}/search`;
  const response = await axios.get(url, {
    params: {
      'api-key': `${process.env.GUARDIAN_APIKEY}`,
      q: query,
      sectionName: category,
      pageSize:max
    },
    withCredentials: false
  });
  const articles : INewsArticle[] = response.data.response.results.map(
    ({ webPublicationDate, webTitle, webUrl, ...article }: { webPublicationDate: string; webTitle: string;  webUrl: string;[key: string]: any }) => ({
      ...article,
      author: "n/a",
      content: webTitle,
      description: webTitle,
      publishedAt: webPublicationDate,
      title: webTitle,
      url: webUrl,
      source: "Guardian"
    })
  );
  return articles;
};

export default {
  getArticles,
};