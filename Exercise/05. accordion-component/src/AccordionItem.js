import { useState } from "react";

export function AccordionItem({ title, text, num }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setOpen(!isOpen)}
    >
      <p className="number">{num > 0 && num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      <div className="context-box">{text}</div>
    </div>
  );
}
