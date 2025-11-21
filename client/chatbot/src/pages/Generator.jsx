import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CodeBox from "../components/CodeBox";
import { copyText } from "../utils/copy";

const Generator = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [data, setData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const generate = async () => {
    if (!email || !website) {
      setError(" Email and Website are required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const result = await res.json();
      setData(result.data);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (text) => {
    await copyText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setEmail("");
    setWebsite("");
    setData(null);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-3">
        Chatbot Script Generator
      </h1>

      <div className="grid gap-4 bg-white p-4 rounded-lg shadow-md">
        <InputField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
        <InputField
          label="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://example.com"
        />

        {error && (
          <p className="text-red-500 text-sm font-medium animate-pulse">
            {error}
          </p>
        )}

        <div className="flex gap-3 justify-start flex-wrap">
          <Button
            className="px-5 py-2 rounded bg-black text-white hover:scale-105 duration-200"
            onClick={generate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Script"}
          </Button>

          <Button
            className="px-5 py-2 rounded border hover:bg-gray-100 hover:scale-105 duration-200"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </div>

      {data && (
        <div className="space-y-4 mt-6 animate-fade-in">
          <div className="text-sm bg-white p-3 border rounded-lg shadow">
            <strong>SDN Token:</strong> {data.token}
          </div>

          <CodeBox
            title="Embed Script (Paste Into Website)"
            code={data.embedScript}
            onCopy={handleCopy}
          />
          <CodeBox
            title="Embed JS Content"
            code={data.embedJs}
            onCopy={handleCopy}
          />

          {/* <div>
            <p className="text-sm font-semibold mb-2">Preview:</p>
            <iframe
              src={data.previewUrl}
              className="border rounded-xl shadow-lg w-full"
              height="520"
            />
          </div> */}
        </div>
      )}

      {copied && (
        <div className="fixed top-16 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Generator;
