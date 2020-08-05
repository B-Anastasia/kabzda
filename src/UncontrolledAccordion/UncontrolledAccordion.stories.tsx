import React from "react";
// import { action } from "@storybook/addon-actions";
import { UncontrolledAccordion } from "./UncontrolledAccordion";
import { action } from "@storybook/addon-actions";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
};

const callback = action("Menu was changed");


export const Collapsed = () => <UncontrolledAccordion title={"Menu"} />;
export const CollapsedByDefault = () => (
  <UncontrolledAccordion
    title={"Menu"}
    onChange={callback}
    defaultValue={true}
  />
);
