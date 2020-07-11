import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type IAccordionPropsType = {
  title: string;
  hidden: boolean;
  onCollapsed: () => void;
};

export function Accordion({ title, hidden, onCollapsed }: IAccordionPropsType) {
  console.log("UncontrolledAccordion");

  return (
    <div>
      <AccordionTitle title={title} onCollapsed={onCollapsed} />
      {!hidden && <AccordionBody />}
    </div>
  );
}
