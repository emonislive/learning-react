import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [isOpen, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(isOpen === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          key={index}
          title={element.title}
          text={element.text}
          num={index + 1}
          isOpen={isOpen === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
