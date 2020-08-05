import React, { useState } from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type IaccordionPropsType = {
  title: string;
  onChange?: (hidden: boolean) => void;
  defaultValue?: boolean;
};

export function UncontrolledAccordion({
  title,
  onChange,
  defaultValue,
}: IaccordionPropsType) {
  console.log("Accordion");

  let [hidden, setHidden] = useState<boolean>(
    defaultValue ? defaultValue : false
  );

  const onChangeHidden = () => {
    setHidden(!hidden);
    onChange && onChange(hidden);
  };
  return (
    <div>
      <AccordionTitle title={title} onChangeHidden={onChangeHidden} />
      {!hidden && <AccordionBody />}
    </div>
  );
}
