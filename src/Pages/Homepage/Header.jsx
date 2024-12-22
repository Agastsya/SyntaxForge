import MainIcon from "./Icons/MainIcon";
import ArrowIcon from "./Icons/ArrowIcon";
export default function Header() {
  return (
    <header className="bg-black text-white w-full h-16 border-white border-y border-t-0 border-l-0 border-r-0 flex justify-between pr-10 pl-5 pt-5 font-poppins">
      <div>
        <ul className="flex flex-row space-x-8">
          <li>
            <a href="/" className="flex items-center hover:text-gray-400">
              <MainIcon className="w-10 h-10 text-white hover:text-gray-500" />
            </a>
          </li>
          <li>
            <a href="/how_it_works" className="hover:text-gray-400">
              Code Editor
            </a>
          </li>
          <li>
            <a href="/case_studies" className="hover:text-gray-400">
              Cases Studies
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400">
              Resources
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400">
              Docs
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400">
              Support
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-gray-400">
              About
            </a>
          </li>
        </ul>
      </div>
      <a href="/new_feature">
        <div className="flex flex-row space-x-4 border-2 rounded-md border-white mb-1 pt-1 pr-2 pl-2 pb-1 center hover:bg-white hover:text-black">
          <p>Try now it's free</p>
          <ArrowIcon />
        </div>
      </a>
    </header>
  );
}
