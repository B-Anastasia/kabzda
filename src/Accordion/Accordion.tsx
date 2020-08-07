import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type ItemsType = {
  value: string;
  title: string;
};

export type IAccordionPropsType = {
  title: string;
  hidden: boolean;
  onCollapsed: () => void;
  items: ItemsType[];
  onClick: (value: string) => void;
};

export function Accordion({
  title,
  hidden,
  onCollapsed,
  items,
  onClick,
}: IAccordionPropsType) {
  console.log("Accordion");
  return (
    <div>
      <AccordionTitle title={title} onCollapsed={onCollapsed} />
      {!hidden && <AccordionBody items={items} onClick={onClick} />}
    </div>
  );
}
