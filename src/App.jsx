import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import "./App.css";
import Header from "./Pages/Homepage/Header";
import CodeEditor from "./Pages/Homepage/CodeEditor/CodeEditor";
import Resources from "./Pages/Homepage/Resources/Resources";

export default function App() {
  return (
    <Router className="dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}
