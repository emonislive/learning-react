function Button({ children, onClick }) {
  return (
    <button
      className="text-xl px-10 py-4 mb-4 text-white rounded-2xl bg-cyan-950"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
