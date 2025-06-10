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
      <div className="h-screen">
        <div className="w-screen h-1/2 bg-white">
          <h1 className="text-white">OUTPUT</h1>
          <iframe srcDoc={output} className="h-screen w-screen"></iframe>
        </div>
        /**Input boxes for html,css and jscript */
        <div className="flex w-screen h-1/2 gap-2">
          <div>
            <h1 className="text-white border border-white pl-1">HTML</h1>
            <textarea
              rows={12}
              cols={50}
              class="input-box"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
            />
          </div>
          <div>
            <h1 className="text-white border border-white pl-1">CSS</h1>

            <textarea
              rows={12}
              cols={50}
              className="input-box"
              value={css}
              onChange={(e) => setCss(e.target.value)}
            />
          </div>
          <div>
            <h1 className="text-white border border-white pl-1">Javascript</h1>

            <textarea
              rows={12}
              cols={50}
              className="input-box"
              value={jscript}
              onChange={(e) => setJscript(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
