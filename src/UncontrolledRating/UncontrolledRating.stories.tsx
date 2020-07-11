import React from "react";
import { UncontrolledRating } from "./UncontrolledRating";
import { action } from "@storybook/addon-actions";

export default {
  title: "UncontrolledRating",
  component: UncontrolledRating,
};
const callback = action("value of rating was changed");
//empty stars
export const EmptyRating = () => (
  <UncontrolledRating onChange={callback} defaultValue={0} />
);
export const UncontrolledRating1 = () => (
  <UncontrolledRating onChange={callback} defaultValue={1} />
);
export const UncontrolledRating2 = () => (
  <UncontrolledRating onChange={callback} defaultValue={2} />
);
export const UncontrolledRating3 = () => (
  <UncontrolledRating onChange={callback} defaultValue={3} />
);
export const UncontrolledRating4 = () => (
  <UncontrolledRating onChange={callback} defaultValue={4} />
);
export const UncontrolledRating5 = () => (
  <UncontrolledRating onChange={callback} defaultValue={5} />
);
