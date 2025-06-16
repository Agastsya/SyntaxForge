import { useState } from "react";

export default function Resources() {
  const [input, setInput] = useState("");
  const [final, setFinal] = useState("");

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center">
      <form className="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-white"
          onClick={(e) => {
            e.preventDefault();
            setFinal(input);
          }}
        >
          Submit
        </button>
      </form>
      <div className="text-white mt-2"> Value : {final}</div>
    </div>
  );
}
