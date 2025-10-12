function Card({ children }) {
  return (
    <div className="border-2 border-white shadow-2xl shadow-cyan-950 mx-96 text-center">
      {children}
    </div>
  );
}

export default Card;
