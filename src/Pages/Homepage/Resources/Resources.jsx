import { useState } from "react";

export default function Resources() {
  const [input, setInput] = useState("");
  const [final, setFinal] = useState("");

  const finalSetter = (e) => {
    e.preventDefault();
    setFinal(input);
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <form action="get" className="flex flex-col gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-white" onClick={finalSetter}>
          Submit Query
        </button>
        <label className="bg-white text-black">
          {final === "" ? <h1>Nothing Exists here</h1> : final}
        </label>
      </form>
    </div>
  );
}
