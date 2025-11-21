const InputField = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

export default InputField;
