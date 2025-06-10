import { useEffect, useState } from "react";
import "./CodeEditor.css";

export default function CodeEditor() {
  /**Use State is being used to capture js,css and html from input box */
  const [jscript, setJscript] = useState('console.log("Hello World")');
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1{color:blue;}");
  /*Use State will be used to store output of all of them combined */
  const [output, setOutput] = useState("");

  useEffect(() => {
    const combinedCode = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      <head/>
      <title>SyntaxForge Editor</title>
        <body>
          ${html}
          <script>${jscript}</script>
        </body>
    </html>
    `;
    setOutput(combinedCode);
  }, [html, css, jscript]);
  return (
    <>
      <div className="flex flex-col h-screen">
        {/*Output Section*/}
        <div className="flex-grow bg-white min-h-[40vh] ">
          <h1 className="text-white bg-gray-800 pl-1 border border-gray-950">
            OUTPUT
          </h1>
          <iframe
            srcDoc={output}
            className="w-full h-[calc(100%-4rem)]"
          ></iframe>
        </div>
        /**Input boxes for html,css and jscript */
        <div className="flex flex-col md:flex-row w-full flex-grow gap-2 bg-gray-800">
          {/*HTML Section*/}
          <div>
            <h1 className="text-white  pl-1">HTML</h1>
            <textarea
              rows={12}
              cols={50}
              className="input-box w-full h-[calc(100%-2rem)] bg-gray-700"
              value={html}
              onChange={(e) => setCss(e.target.value)}
            />
          </div>

          {/**CSS SECTION */}

          <div>
            <h1 className="text-white  pl-1">CSS</h1>
            <textarea
              rows={12}
              cols={50}
              className="input-box w-full h-[calc(100%-2rem)] bg-gray-700"
              value={css}
              onChange={(e) => setCss(e.target.value)}
            />
          </div>

          {/**Javascript SECTION */}

          <div>
            <h1 className="text-white pl-1">Javascript</h1>

            <textarea
              rows={12}
              cols={50}
              className="input-box w-full h-[calc(100%-2rem)] bg-gray-700"
              value={jscript}
              onChange={(e) => setJscript(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
