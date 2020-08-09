import React from "react";
// import { action } from "@storybook/addon-actions";
import { UncontrolledAccordionReducer } from "./UncontrolledAccordionReducer";
import { action } from "@storybook/addon-actions";

export default {
  title: "UncontrolledAccordionReducer",
  component: UncontrolledAccordionReducer,
};

const callback = action("Menu was changed");

export const Collapsed = () => <UncontrolledAccordionReducer title={"Menu"} />;
export const CollapsedByDefault = () => (
  <UncontrolledAccordionReducer
    title={"Menu"}
    onChange={callback}
    defaultValue={true}
  />
);
