import React from "react";
import { ItemsType } from "../Accordion";

export type AccordionBodyType = {
  items: ItemsType[];
  onClick: (value: string) => void;
};

function AccordionBody(props: AccordionBodyType) {
  return (
    <ul>
      {props.items.map((i) => {
        return (
          <li onClick={() => props.onClick(i.value)} key={i.value}>
            {i.title}
          </li>
        );
      })}
    </ul>
  );
}

export default AccordionBody;
