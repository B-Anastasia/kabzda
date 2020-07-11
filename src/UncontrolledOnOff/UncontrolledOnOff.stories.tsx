import React from "react";
import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { action } from "@storybook/addon-actions";

export default {
  title: "UncontrolledOnOff",
  component: UncontrolledOnOff,
};

const callback = action("changed mode collapsed or not");

export const falseMode = () => (
  <UncontrolledOnOff onChange={callback} defaultValue={false} />
);
export const trueMode = () => (
  <UncontrolledOnOff onChange={callback} defaultValue={true} />
);
