import React from "react";
import scss from "./Select.module.scss";
import { ItemsType } from "../Accordion/Accordion";

export type SelectType = {
  items: ItemsType[];
  onClick: (value: string) => void;
  title: string;
  toggle: boolean;
  onClickToggle: (value: boolean) => void;
};

function Select(props: SelectType) {
  const onClickToggleTrue = () => {
    props.onClickToggle(true);
  };
  const onBlurToggleOff = () => {
    props.onClickToggle(false);
  };

  const onClickItem = (value: string) => {
    props.onClick(value);
  };

  return (
    <div className={scss.select} tabIndex={0} onBlur={onBlurToggleOff}>
      <div className={scss.title} onClick={onClickToggleTrue}>
        {props.title}
      </div>
      {props.toggle && (
        <div className={scss.block}>
          {props.items.map((i) => (
            <div
              className={
                i.title === props.title
                  ? `${scss.block__item} ${scss.active}`
                  : `${scss.block__item}`
              }
              onClick={() => onClickItem(i.value)}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
