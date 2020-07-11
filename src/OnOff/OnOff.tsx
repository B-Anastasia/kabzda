import React from "react";

type IOnOffPropsType = {
  active: boolean;
  onActive: (on: boolean) => void;
};

export function OnOff({ active, onActive }: IOnOffPropsType) {
  //controlled , from props it is active or not
  console.log("OnOff rendering");

  //change color buttons by styles active true or not?
  const onStyle = {
    height: "30px",
    width: "30px",
    padding: "5px",
    border: "1px solid black",
    backgroundColor: active ? "green" : "transparent",
    display: "inline-block",
  };
  const offStyle = {
    height: "30px",
    width: "30px",
    padding: "5px",
    border: "1px solid black",
    backgroundColor: active ? "transparent" : "red",
    display: "inline-block",
    marginLeft: "10px",
  };
  const indicatorStyle = {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    border: "1px solid black",
    backgroundColor: active ? "green" : "red",
    display: "inline-block",
    marginLeft: "10px",
  };

  return (
    <div>
      <div style={onStyle} onClick={() => onActive(true)}>
        On
      </div>
      <div style={offStyle} onClick={() => onActive(false)}>
        Off
      </div>
      <div style={indicatorStyle} />
    </div>
  );
}
