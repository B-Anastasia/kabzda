import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type IaccordionPropsType = {
  title: string;
  hidden: boolean;
  onCollapsed: () => void;
};

function Accordion({ title, hidden, onCollapsed }: IaccordionPropsType) {
  console.log("UncontrolledAccordion");

  return (
    <div>
      <AccordionTitle title={title} onCollapsed={onCollapsed} />
      {!hidden && <AccordionBody />}
    </div>
  );
}

export default Accordion;
