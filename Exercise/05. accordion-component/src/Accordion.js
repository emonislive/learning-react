import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          key={index}
          title={element.title}
          text={element.text}
          num={++index}
        />
      ))}
    </div>
  );
}
