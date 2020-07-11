import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { OnOff } from "./OnOff";

export default {
  title: "OnOff stories",
  component: OnOff,
};
const callback = action("on or off");

export const On = () => <OnOff active={true} onActive={callback} />;
export const Off = () => <OnOff active={false} onActive={callback} />;
export const OnOffChange = () => {
  const [on, setOn] = useState<boolean>(false);
  return <OnOff active={on} onActive={setOn} />;
};

// export const ChangingRating = () => {
//   const [val, setVal] = useState<IRatingValue>(3);
//   return <Rating value={val} onClick={setVal} />;
// };
