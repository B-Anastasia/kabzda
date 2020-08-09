import React, { useReducer } from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";
import { HIDDEN_ACCORDION, reducer } from "./reducer";

export type IaccordionPropsType = {
  title: string;
  onChange?: (hidden: boolean) => void;
  defaultValue?: boolean;
};

export function UncontrolledAccordionReducer({
  title,
  onChange,
  defaultValue,
}: IaccordionPropsType) {
  console.log("Accordion");

  const initialState = {
    hidden: defaultValue ? defaultValue : false,
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  const onChangeHidden = () => {
    dispatch({ type: HIDDEN_ACCORDION });
    console.log("hidden");
    onChange && onChange(state.hidden);
  };
  return (
    <div>
      <AccordionTitle title={title} onChangeHidden={onChangeHidden} />
      {!state.hidden && <AccordionBody />}
    </div>
  );
}
