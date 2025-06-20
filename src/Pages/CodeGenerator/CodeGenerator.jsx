import React, { useState } from "react";
import { toast } from "sonner";
const CodeGeneratorSplitView = () => {
  // The text the user types to describe what they want
  const [prompt, setPrompt] = useState("");

  // This holds the HTML/CSS/JS that the AI gives us
  const [generatedCode, setGeneratedCode] = useState("");

  // Show a loading spinner when we wait for the AI
  const [loading, setLoading] = useState(false);

  // Store error messages here if something goes wrong
  const [error, setError] = useState("");

  // Show feedback when code is copied
  const [copySuccess, setCopySuccess] = useState("");

  // Read the API key from our .env file (make sure it starts with VITE_)
  const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;

  // Helper: grab the HTML/CSS part out of whatever the AI returned
  const extractHtml = (text) => {
    // Try to find code inside ```html ... ``` fences
    const fenceMatch = text.match(/```html\n([\s\S]*?)```/i);
    let html = fenceMatch ? fenceMatch[1] : text;

    // Remove any footnote markers like [1], [2]
    html = html.replace(/\[\d+\]/g, "");

    return html.trim();
  };

  // Wrap a snippet in a full HTML page if it looks like a fragment
  const wrapHtml = (html) => {
    if (/^\s*<!?html/i.test(html)) {
      return html;
    }
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset=\"utf-8\" />
  <style>
    *,*::before,*::after { box-sizing: border-box; }
    body { margin: 0; padding: 1rem; }
  </style>
</head>
<body>
${html}
</body>
</html>`;
  };

  // If we have generated code, render it in the iframe. Otherwise show a blank page.
  const srcDoc = generatedCode
    ? wrapHtml(extractHtml(generatedCode))
    : "<!DOCTYPE html><html><body></body></html>";

  // Call the AI to get new code
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
                  "Generate only clean HTML/CSS/JS, no extra text or notes.",
              },
              { role: "user", content: prompt },
            ],
            max_tokens: 5000,
            temperature: 0.2,
          }),
        }
      );

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        toast.failure(err.error?.message || response.statusText);
      } else {
        toast.success("Code Generated");
      }

      const data = await response.json();
      let text = data.choices?.[0]?.message?.content || "";
      text = extractHtml(text);

      if (text) setGeneratedCode(text);
      else
        setError("Hmm, I didn't get any HTML/CSS/JS back. Try another prompt!");
    } catch (e) {
      setError(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Copy the current code to the clipboard
  const handleCopy = () => {
    if (!generatedCode) return;
    navigator.clipboard
      .writeText(extractHtml(generatedCode))
      .then(() => setCopySuccess("Code copied! 🙂"))
      .catch(() => setCopySuccess("Oops, copy failed 😕"));
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left side: inputs and code editor */}
      <div className="w-1/2 p-4 overflow-auto border-r border-gray-700">
        <h2 className="mb-2 text-xl">AI Code Generator</h2>

        {/* Where you type what you want the AI to build */}
        <textarea
          className="w-full h-24 p-2 mb-4 bg-gray-700 rounded"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the HTML/CSS/JS you need..."
        />

        {/* Buttons to ask AI and copy code */}
        <div className="flex items-center mb-4 space-x-2">
          <button
            className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? "Thinking..." : "Generate Code"}
          </button>

          <button
            className="px-3 py-1 bg-green-600 rounded disabled:opacity-50"
            onClick={handleCopy}
            disabled={!generatedCode}
          >
            Copy Code
          </button>

          {/* Show a quick message after copying */}
          {copySuccess && <span>{copySuccess}</span>}
        </div>

        {/* If there's an error, show it in red */}
        {error && <div className="mb-4 text-red-400">{error}</div>}

        <h3 className="mb-2">Editable Code:</h3>

        {/* Make the generated code editable */}
        <textarea
          className="w-full h-64 p-2 bg-gray-800 rounded font-mono text-sm whitespace-pre"
          value={generatedCode}
          onChange={(e) => setGeneratedCode(e.target.value)}
        />
      </div>

      {/* Right side: live preview of what you just wrote */}
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
