import React, { useState } from "react";

type PropsType = {
  onChange: (on: boolean) => void;
};

function UncontrolledOnOff(props: PropsType) {
  console.log("OnOff rendering");

  let [on, setOn] = useState<boolean>(false);

  const onStyle = {
    height: "30px",
    width: "30px",
    padding: "5px",
    border: "1px solid black",
    backgroundColor: on ? "green" : "transparent",
    display: "inline-block",
  };
  const offStyle = {
    height: "30px",
    width: "30px",
    padding: "5px",
    border: "1px solid black",
    backgroundColor: on ? "transparent" : "red",
    display: "inline-block",
    marginLeft: "10px",
  };
  const indicatorStyle = {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    border: "1px solid black",
    backgroundColor: on ? "green" : "red",
    display: "inline-block",
    marginLeft: "10px",
  };

  const onClickOn = () => {
    setOn(true);
    props.onChange(true);
  };

  const onClickOff = () => {
    setOn(false);
    props.onChange(false);
  };

  return (
    <div>
      <div style={onStyle} onClick={onClickOn}>
        On
      </div>
      <div style={offStyle} onClick={onClickOff}>
        Off
      </div>
      <div style={indicatorStyle} />
    </div>
  );
}

export default UncontrolledOnOff;
