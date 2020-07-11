import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("collapse or not");

export const Collapsed = () => (
  <Accordion title={"Menu"} hidden={true} onCollapsed={callback} />
);
export const UnCollapsed = () => (
  <Accordion title={"Users"} hidden={false} onCollapsed={callback} />
);
export const ChangingAccordion = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Accordion
      title={"Menu"}
      hidden={collapsed}
      onCollapsed={() => setCollapsed(!collapsed)}
    />
  );
};
