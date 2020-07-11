import React, { useState } from "react";

type IValueType = 0 | 1 | 2 | 3 | 4 | 5;

function UncontrolledRating() {
  let [value, setValue] = useState<IValueType>(0);

  return (
    <div>
      <Star selected={value > 0} setValue={() => setValue(1)} />
      <Star selected={value > 1} setValue={() => setValue(2)} />
      <Star selected={value > 2} setValue={() => setValue(3)} />
      <Star selected={value > 3} setValue={() => setValue(4)} />
      <Star selected={value > 4} setValue={() => setValue(5)} />
      {/*{stars}*/}
    </div>
  );
}
type IstarPropsType = {
  selected: boolean;
  setValue: () => void;
};

function Star({ selected, setValue }: IstarPropsType) {
  console.log("Star");
  let star = selected ? <b>star </b> : `star `;
  return (
    <span className={"span"} onClick={setValue}>
      {star}
    </span>
  );
}

export default UncontrolledRating;
