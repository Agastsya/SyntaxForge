import MainIcon from "./Icons/MainIcon";
import ArrowIcon from "./Icons/ArrowIcon";
import "./Header.css";

export default function Header() {
  return (
    <header className="bg-black text-white w-full h-16  flex justify-between pr-10 pl-5 pt-5 font-poppins">
      <div>
        <ul className="flex flex-row space-x-8">
          <li>
            <a href="/" className="flex items-center hover:text-gray-400">
              <MainIcon className="w-10 h-10 text-white hover:text-gray-500" />
            </a>
          </li>
          <li>
            <a
              href="/code-editor"
              className="hover:text-gray-400 text-gradient"
            >
              Code Editor
            </a>
          </li>
          <li>
            <a
              href="/case_studies"
              className="hover:text-gray-400 text-gradient"
            >
              Cases Studies
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400 text-gradient">
              Resources
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400 text-gradient">
              Docs
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400 text-gradient">
              Support
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className="hover:text-gray-400 text-gradient btn-gradient-gold"
            >
              Get Premium
            </a>
          </li>
        </ul>
      </div>
      <a href="/new_feature">
        <div className="flex flex-row space-x-4 border-2 rounded-md border-white mb-1 pt-1 pr-2 pl-2 pb-1 hover:bg-white hover:text-black">
          <p>Try now it's free</p>
          <ArrowIcon />
        </div>
      </a>
    </header>
  );
}
