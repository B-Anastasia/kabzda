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

export const SelectWithoutValue = () => {
  const [value, setValue] = useState<string | null>(null);

  const onChangeItem = (value: string) => {
    setValue(value);
  };

  return <Select items={family} onChangeItem={onChangeItem} value={value} />;
};

export const SelectWithValue = () => {
  const [value, setValue] = useState("02");

  return <Select items={family} onChangeItem={setValue} value={value} />;
};

export const SelectWithValueAndToggle = () => {
  const [value, setValue] = useState("02");
  const [toggle, setToggle] = useState(false);

  const onChangeItem = (value: string) => {
    setValue(value);
  };

  const onToggle = (value: boolean) => {
    setToggle(value);
  };

  return (
    <Select
      items={family}
      onChangeItem={onChangeItem}
      value={value}
      toggle={toggle}
      onClickToggle={onToggle}
    />
  );
};
