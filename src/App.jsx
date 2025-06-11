import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import "./App.css";
import Header from "./Pages/Homepage/Header";
import CodeEditor from "./Pages/Homepage/CodeEditor/CodeEditor";
import Resources from "./Pages/Homepage/Resources/Resources";
import ReadBlogs from "./Pages/Homepage/Blogs/ReadBlogs";
import Blogs from "./Pages/Homepage/Blogs/Blogs";

export default function App() {
  return (
    <Router className="dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/read-blogs" element={<ReadBlogs />} />
        <Route path="/blogs/:blogId" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
