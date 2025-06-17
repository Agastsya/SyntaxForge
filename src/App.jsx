import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import "./App.css";
import Header from "./Pages/Homepage/Header";
import CodeEditor from "./Pages/Homepage/CodeEditor/CodeEditor";
import Resources from "./Pages/Homepage/Resources/Resources";
import ReadBlogs from "./Pages/Homepage/Blogs/ReadBlogs";
import Blogs from "./Pages/Homepage/Blogs/Blogs";
import { Toaster } from "sonner";
import CodeGenerator from "./Pages/CodeGenerator/CodeGenerator";
import Pricing from "./Pages/Pricing/Pricing";
import Support from "./Pages/Support/Support";

export default function App() {
  return (
    <Router className="dark">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/read-blogs" element={<ReadBlogs />} />
        <Route path="/ai-forge" element={<CodeGenerator />} />
        <Route path="/blogs/:blogId" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
