import axios from "axios";
import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import BlogCard from "./BlogCard";
import "./ReadBlogs.css";
const apikey = process.env.NEWS_API_KEY;

export default function ReadBlogs() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("technology");
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);
  return (
    <>
      <div className="flex gap-10 p-10">
        <button
          className="bg-white toggle-category"
          onClick={() => setCategory("sports")}
        >
          business
        </button>
        <button
          className="bg-white toggle-category"
          onClick={() => setCategory("science")}
        >
          science
        </button>
        <button
          className="bg-white toggle-category"
          onClick={() => setCategory("entertainment")}
        >
          entertainment
        </button>
        <button
          className="bg-white toggle-category"
          onClick={() => setCategory("technology")}
        >
          technology
        </button>
      </div>
      <div>
        {articles.map((article) => (
          <div key={article.url}>
            <BlogCard
              author={article.author}
              title={article.title}
              image={article.urlToImage}
              description={article.description}
              date={article.publishedAt}
              content={article.content}
            />
          </div>
        ))}
        ;
      </div>
    </>
  );
}
