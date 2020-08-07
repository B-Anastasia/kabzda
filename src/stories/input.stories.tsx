import React, { ChangeEvent, useRef, useState } from "react";

export default {
  title: "uncontrolled input",
};

export const UncontrolledInput = () => {
  return <input />;
};
//we can get the value in two ways
//1)input with tracked value
export const TrackedValueOfUncontrolledInput = () => {
  let [value, setValue] = useState("");
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }
  return (
    <>
      <input onChange={(e) => onChange(e)} /> - {value}
    </>
  );
};
//2)input with tracked value by using ref
export const TrackedValueOfUncontrolledInputByRef = () => {
  let [value, setValue] = useState("");
  const inputRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement | null>(
    null
  );
  const onClick = () => {
    inputRef.current && setValue(inputRef.current.value);
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={onClick}>save</button>- {value}
    </>
  );
};

//created controlled input
export const controlledInput = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [parentValue, setParentValue] = useState("");
  const callback = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <>
      <input value={parentValue} onChange={callback} />
    </>
  );
};
//created controlled checkbox
export const controlledCheckbox = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [parentValue, setParentValue] = useState(true);
  const callback = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return <input type={"checkbox"} checked={parentValue} onChange={callback} />;
};
//created controlled select
export const controlledSelect = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const callback = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <select value={parentValue} onChange={callback}>
      <option value={"1"}>none</option>
      <option value={"2"}>Moskow</option>
      <option value={"3"}>Tel Aviv</option>
    </select>
  );
};
