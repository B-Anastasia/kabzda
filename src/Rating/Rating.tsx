import React from "react";

export type IRatingValue = 0 | 1 | 2 | 3 | 4 | 5;

type IratingPropsType = {
  value: IRatingValue;
  onStar: (value: IRatingValue) => () => void;
};

function Rating({ value, onStar }: IratingPropsType) {
  return (
    <div>
      <Star selected={value > 0} onStar={onStar(1)} />
      <Star selected={value > 1} onStar={onStar(2)} />
      <Star selected={value > 2} onStar={onStar(3)} />
      <Star selected={value > 3} onStar={onStar(4)} />
      <Star selected={value > 4} onStar={onStar(5)} />
    </div>
  );
}
type IstarPropsType = {
  selected: boolean;
  onStar: () => void;
};

function Star({ selected, onStar }: IstarPropsType) {
  console.log("Star");
  return (
    <span className={"span"} onClick={onStar}>
      {selected ? <b>star </b> : `star `}
    </span>
  );
}

export default Rating;
