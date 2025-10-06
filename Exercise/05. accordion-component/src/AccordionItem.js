export function AccordionItem({ title, text, num, isOpen, onToggle }) {
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <p className="number">{num > 0 && num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div className="context-box">{text}</div>
    </div>
  );
}
