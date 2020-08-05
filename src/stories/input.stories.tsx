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
