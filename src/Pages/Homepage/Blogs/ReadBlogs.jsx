import axios from "axios";
import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import BlogCard from "./BlogCard";
import "./ReadBlogs.css";
import { Link } from "react-router-dom";
const apikey = import.meta.env.VITE_NEWS_API_KEY;

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
      <div className="flex gap-10 p-10 text-white">
        <button
          className="bg-white toggle-category"
          onClick={() => setCategory("business")}
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
        {articles.map((article, index) => (
          <Link key={article.url} to={`/blogs/${index}`}>
            <BlogCard
              author={article.author}
              title={article.title}
              image={article.urlToImage}
              description={article.description}
              date={article.publishedAt}
              content={article.content}
            />
          </Link>
        ))}
        ;
      </div>
    </>
  );
}
