import React from "react";

export type IRatingValue = 0 | 1 | 2 | 3 | 4 | 5;

type IratingPropsType = {
  value: IRatingValue;
  onClick: (value: IRatingValue) => void;
};

function Rating({ value, onClick }: IratingPropsType) {
  return (
    <div>
      <Star selected={value > 0} onClick={onClick} value={1} />
      <Star selected={value > 1} onClick={onClick} value={2} />
      <Star selected={value > 2} onClick={onClick} value={3} />
      <Star selected={value > 3} onClick={onClick} value={4} />
      <Star selected={value > 4} onClick={onClick} value={5} />
    </div>
  );
}
type IstarPropsType = {
  selected: boolean;
  onClick: (value: IRatingValue) => void;
  value: IRatingValue;
};

function Star({ selected, onClick, value }: IstarPropsType) {
  console.log("Star");
  return (
    <span className={"span"} onClick={() => onClick(value)}>
      {selected ? <b>star </b> : `star `}
    </span>
  );
}

export default Rating;
