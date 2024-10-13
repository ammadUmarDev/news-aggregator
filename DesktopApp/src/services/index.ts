import axios from "axios";

import ArticleService from "./articleService";
import GNewsService from "./gnews";
import NewsAPIService from "./newsapi";
import GuardianService from "./guardian";


// default axios config for cookies and session
axios.defaults.withCredentials = true;

export {
  ArticleService,
  GNewsService,
  NewsAPIService,
  GuardianService,
  
};
