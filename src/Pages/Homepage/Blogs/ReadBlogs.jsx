import axios from "axios";
import { useEffect, useState } from "react";

export default function ReadBlogs() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d07c3606dc3415fa7a87b6c50da395d&category=technology"
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        {articles.map((article) => (
          <div key={article.url}>
            <h1 className="text-white">{article.author}</h1>;
          </div>
        ))}
        ;
      </div>
    </>
  );
}
