import "./Home.css";
import ArrowIcon from "./Icons/ArrowIcon";

export default function Home() {
  return (
    <>
      <div className="homepage_title flex flex-row h-screen text-white justify-between pr-10 pl-10 pt-10 bg-black font-poppins">
        <div className="text-[10rem] leading-[1.1] text-gradient-blue mb-20">
          Best.
          <br />
          Code.
          <br />
          Editor.
          <br />
        </div>
        <div className="pt-40 w-[50%] space-y-10 ">
          <span className="text-7xl text-gradient-blue">Code As you like</span>{" "}
          <br />
          <p className="text-gradient-gold">
            Syntax Forge is an intuitive website designed for writing and
            testing HTML, CSS, and JavaScript code in real time. It provides a
            split-pane editor with instant previews, enabling seamless
            experimentation and debugging.
          </p>
          <div className="flex flex-row space-x-4">
            <button className="border-2 border-white rounded-md p-2 hover:bg-white hover:text-black font-poppins flex flex-row space-x-4">
              <p> For New Users</p>
              <ArrowIcon />
            </button>
            <button className="border-2 border-white rounded-md p-2 hover:bg-white hover:text-black font-poppins flex flex-row space-x-4">
              <p>Already a Member</p>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
