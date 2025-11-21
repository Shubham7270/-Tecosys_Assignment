const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium px-5 py-2 rounded-lg shadow-md active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
