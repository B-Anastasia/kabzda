import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion, ItemsType } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

const family: ItemsType[] = [
  { value: "01", title: "Anastasia" },
  { value: "02", title: "Alisa" },
  { value: "03", title: "Vladimir" },
];

const callback = action("collapse or not");
const onItemClickedCallback = action("Clicked on Item");

export const Collapsed = () => (
  <Accordion
    title={"Menu"}
    hidden={true}
    onCollapsed={callback}
    items={family}
    onClick={onItemClickedCallback}
  />
);
export const UnCollapsed = () => (
  <Accordion
    title={"Users"}
    hidden={false}
    onCollapsed={callback}
    items={family}
    onClick={onItemClickedCallback}
  />
);
export const ChangingAccordion = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Accordion
      title={"Menu"}
      hidden={collapsed}
      onCollapsed={() => setCollapsed(!collapsed)}
      items={family}
      onClick={(value) => alert(`This is user value: ${value}`)}
    />
  );
};
