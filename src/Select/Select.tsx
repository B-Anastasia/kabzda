import React, { useState, KeyboardEvent } from "react";
import scss from "./Select.module.scss";
import { ItemsType } from "../Accordion/Accordion";

export type SelectType = {
  items: ItemsType[];
  onClick: (value: string) => void;
  value?: string | null;
  toggle?: boolean;
  onClickToggle?: (value: boolean) => void;
};

function Select(props: SelectType) {
  const [toggle, setToggle] = useState(false);
  const [hoveredElValue, setHoveredElValue] = useState(props.value);

  const onClickToggleTrue = () => {
    props.onClickToggle ? props.onClickToggle(true) : setToggle(true);
  };
  const onBlurToggleOff = () => {
    setHoveredElValue(props.value);
    props.onClickToggle ? props.onClickToggle(false) : setToggle(false);
  };

  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElValue);

  const onClickItem = (value: string) => {
    props.onClick(value);
    props.onClickToggle ? props.onClickToggle(false) : setToggle(false);
  };

  let index = hoveredItem ? props.items.indexOf(hoveredItem) : undefined;

  const onKeyPressHanler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      if (hoveredItem) {
        onClickItem(hoveredItem.value);
      }
    }
    if (e.keyCode === 40 || e.keyCode === 38) {
      for (
        let i = index !== undefined ? index : 0;
        i < props.items.length;
        i++
      ) {
        if (e.keyCode === 40) {
          console.log("down");
          if (index === undefined) {
            setHoveredElValue(props.items[0].value);
            break;
          }
          if (i === props.items.length - 1) {
            setHoveredElValue(props.items[0].value);
            break;
          }
          console.log(props.items[i].value);
          setHoveredElValue(props.items[i + 1].value);
          break;
        }
        if (e.keyCode === 38) {
          if (i === 0) {
            setHoveredElValue(props.items[props.items.length - 1].value);
            break;
          }
          setHoveredElValue(props.items[i - 1].value);
          break;
        }
      }
    }
  };

  return (
    <div
      className={scss.select}
      tabIndex={0}
      onBlur={onBlurToggleOff}
      onKeyUp={onKeyPressHanler}
    >
      <div className={scss.title} onClick={onClickToggleTrue}>
        {selectedItem && selectedItem.title}
      </div>
      {(props.toggle ? props.toggle : toggle) && (
        <div className={scss.block}>
          {props.items.map((i) => {
            return (
              <div
                key={i.value}
                onMouseEnter={() => setHoveredElValue(i.value)}
                className={
                  i === hoveredItem
                    ? `${scss.block__item} ${scss.active}`
                    : `${scss.block__item}`
                }
                onClick={() => onClickItem(i.value)}
              >
                {i.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Select;
