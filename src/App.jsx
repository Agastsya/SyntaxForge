import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import "./App.css";
import Header from "./Pages/Homepage/Header";

export default function App() {
  return (
    <Router className="dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
