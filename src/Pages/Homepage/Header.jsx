import MainIcon from "./Icons/MainIcon";
import ArrowIcon from "./Icons/ArrowIcon";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="bg-black text-white w-full h-16  flex justify-between pr-10 pl-5 pt-5 font-poppins">
      <div>
        <ul className="flex flex-row space-x-8">
          <li>
            <Link to="/" className="flex items-center hover:text-gray-400">
              <MainIcon className="w-10 h-10 text-white hover:text-gray-500" />
            </Link>
          </li>
          <li>
            <Link
              to="/code-editor"
              className="hover:text-gray-400 text-gradient"
            >
              Code Editor
            </Link>
          </li>
          <li>
            <Link
              to="/read-blogs"
              className="hover:text-gray-400 text-gradient"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-gray-400 text-gradient">
              DSA Planner
            </Link>
          </li>
          <li>
            <Link to="/ai-forge" className="hover:text-gray-400 text-gradient">
              AI Forge
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-gray-400 text-gradient">
              Support
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="hover:text-gray-400 text-gradient btn-gradient-gold"
            >
              Get Premium
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/ai-forge">
        <div className="flex flex-row space-x-4 border-2 rounded-md border-white mb-1 pt-1 pr-2 pl-2 pb-1 hover:bg-white hover:text-black">
          <MainIcon className="w-10 h-10 text-white hover:text-gray-500" />

          <p>Try AI Forge it's free</p>
          <ArrowIcon />
        </div>
      </Link>
    </header>
  );
}
