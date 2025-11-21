const CodeBox = ({ title, code, onCopy }) => {
  return (
    <div className="border rounded-lg p-3 bg-gray-50 relative">
      <p className="text-sm font-semibold text-gray-600 mb-2">{title}</p>
      <pre className="overflow-x-auto whitespace-pre-wrap text-xs bg-white p-2 rounded">
        {code}
      </pre>
      <button
        onClick={() => onCopy(code)}
        className="absolute top-3 right-3 text-xs bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-700"
      >
        Copy
      </button>
    </div>
  );
};

export default CodeBox;
