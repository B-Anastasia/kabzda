import React, { useState, KeyboardEvent, useEffect } from "react";
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

  /*let index = hoveredItem ? props.items.indexOf(hoveredItem) : undefined;

  const onKeyPressHanlerHover = (e: KeyboardEvent<HTMLDivElement>) => {
    //if we want to choose an item by pressing 'Enter' key
    if (e.keyCode === 13) {
      if (hoveredItem) {
        onClickItem(hoveredItem.value);
      }
    }

    /!*    if we want to hover an item by pressing 'Up' and 'Down' arrow keys
    if list will be ended the list will be started again
    if list will be started from thq first element ,
    by pressing 'Up' key will be hovered latest item of the list*!/

    if (e.keyCode === 40 || e.keyCode === 38) {
      for (
        let i = index !== undefined ? index : 0;
        i < props.items.length;
        i++
      ) {
        //Arrow key 'Down'
        if (e.keyCode === 40) {
          if (index === undefined) {
            setHoveredElValue(props.items[0].value);
            // props.onClick(props.items[0].value);
            break;
          }
          if (i === props.items.length - 1) {
            setHoveredElValue(props.items[0].value);
            break;
          }
          setHoveredElValue(props.items[i + 1].value);
          break;
        }
        //Arrow key 'Up'
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
  };*/

  useEffect(() => {
    setHoveredElValue(props.value);
  }, [props.value]);

  const onKeyPressHanler = (e: KeyboardEvent<HTMLDivElement>) => {
    //if we want to choose an item by pressing 'Enter' key
    if (e.keyCode === 13 || e.keyCode === 27) {
      onBlurToggleOff();
    }

    /*    if we want to hover an item by pressing 'Up' and 'Down' arrow keys
        and choose it*/

    if (e.keyCode === 40 || e.keyCode === 38) {
      for (let i = 0; i < props.items.length; i++) {
        if (hoveredElValue === null) {
          props.onClick(props.items[0].value);
        }
        if (props.items[i].value === hoveredElValue) {
          let nextItem =
            e.keyCode === 40 ? props.items[i + 1] : props.items[i - 1];
          if (nextItem) {
            console.log(nextItem);
            props.onClick(nextItem.value);
            break;
          }
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
