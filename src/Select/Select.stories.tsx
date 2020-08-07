import React, { useState } from "react";
import Select from "./Select";
import { ItemsType } from "../Accordion/Accordion";

export default {
  title: "Common Select",
  component: Select,
};

const family: ItemsType[] = [
  { value: "01", title: "Anastasia" },
  { value: "02", title: "Alisa" },
  { value: "03", title: "Vladimir" },
];

export const SelectMode = () => {
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);

  const onChangeItem = (value: string) => {
    const person = family.find((i) => i.value === value);
    if (person) {
      setTitle(person.title);
    }
  };

  const onToggle = (value: boolean) => {
    setToggle(value);
  };

  return (
    <Select
      items={family}
      onClick={onChangeItem}
      title={title}
      toggle={toggle}
      onClickToggle={onToggle}
    />
  );
};
