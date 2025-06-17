import React, { useState } from "react";

const CodeGeneratorSplitView = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;

  // Utility: extract raw HTML from AI response
  const extractHtml = (text) => {
    // First, try to find ```html ... ``` block
    const fenceMatch = text.match(/```html\n([\s\S]*?)```/i);
    let html = fenceMatch ? fenceMatch[1] : text;

    // Remove any remaining markdown footnote markers like [1], [2]
    html = html.replace(/\[\d+\]/g, "");

    return html.trim();
  };

  // Wrap HTML snippet in full document if needed
  const wrapHtml = (html) => {
    if (/^\s*<!?html/i.test(html)) return html;
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset=\"utf-8\" />
  <style>*,*::before,*::after{box-sizing:border-box;}body{margin:0;padding:1rem;}</style>
</head>
<body>
${html}
</body>
</html>`;
  };

  const srcDoc = generatedCode
    ? wrapHtml(extractHtml(generatedCode))
    : "<!DOCTYPE html><html><body></body></html>";

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setGeneratedCode("");
    setError("");
    setCopySuccess("");

    try {
      const response = await fetch(
        "https://api.perplexity.ai/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "sonar-pro",
            messages: [
              {
                role: "system",
                content:
                  "Generate only clean HTML/CSS without any annotations, markdown, or citations.",
              },
              { role: "user", content: prompt },
            ],
            max_tokens: 2000,
            temperature: 0.2,
          }),
        }
      );
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || response.statusText);
      }
      const data = await response.json();
      let text = data.choices?.[0]?.message?.content || "";
      // Extract only HTML snippet
      text = extractHtml(text);
      if (text) setGeneratedCode(text);
      else setError("No HTML/CSS code detected. Try a different prompt.");
    } catch (e) {
      setError(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generatedCode) return;
    navigator.clipboard
      .writeText(extractHtml(generatedCode))
      .then(() => setCopySuccess("Copied!"))
      .catch(() => setCopySuccess("Failed to copy"));
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-1/2 p-4 overflow-auto border-r border-gray-700">
        <h2 className="mb-2 text-xl">AI Code Generator</h2>
        <textarea
          className="w-full h-24 p-2 mb-4 bg-gray-700 rounded"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the HTML/CSS you want..."
        />
        <div className="flex items-center mb-4 space-x-2">
          <button
            className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? "Generating..." : "Generate Code"}
          </button>
          <button
            className="px-3 py-1 bg-green-600 rounded disabled:opacity-50"
            onClick={handleCopy}
            disabled={!generatedCode}
          >
            Copy Code
          </button>
          {copySuccess && <span>{copySuccess}</span>}
        </div>
        {error && <div className="mb-4 text-red-400">{error}</div>}
        <h3 className="mb-2">Generated HTML/CSS:</h3>
        <pre className="p-2 bg-gray-800 rounded whitespace-pre-wrap">
          {generatedCode || "<!-- Your generated code will appear here -->"}
        </pre>
      </div>
      <div className="w-1/2 border-l border-gray-700 bg-white">
        <iframe
          srcDoc={srcDoc}
          title="Preview"
          className="w-full h-full"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default CodeGeneratorSplitView;
