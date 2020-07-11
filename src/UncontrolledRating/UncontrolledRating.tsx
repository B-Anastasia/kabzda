import React, { useState } from "react";

type IValueType = 0 | 1 | 2 | 3 | 4 | 5;

type IUncontrolledRatingType = {
  defaultValue?: IValueType;
  onChange: (newVal: IValueType) => void;
};

export function UncontrolledRating(props: IUncontrolledRatingType) {
  let [value, setValue] = useState<IValueType>(
    props.defaultValue ? props.defaultValue : 0
  );

  return (
    <div>
      <Star
        selected={value > 0}
        setValue={() => {
          setValue(1);
          props.onChange(1);
        }}
      />
      <Star
        selected={value > 1}
        setValue={() => {
          setValue(2);
          props.onChange(2);
        }}
      />
      <Star
        selected={value > 2}
        setValue={() => {
          setValue(3);
          props.onChange(3);
        }}
      />
      <Star
        selected={value > 3}
        setValue={() => {
          setValue(4);
          props.onChange(4);
        }}
      />
      <Star
        selected={value > 4}
        setValue={() => {
          setValue(5);
          props.onChange(5);
        }}
      />
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
