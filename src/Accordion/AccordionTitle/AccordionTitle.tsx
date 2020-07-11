import React from "react";

type IaccordionTitlePropsType = {
  title: string;
  onCollapsed: () => void;
};

function AccordionTitle({ title, onCollapsed }: IaccordionTitlePropsType) {
  console.log("AccordionTitle");
  return (
    <h3 className={"title"} onClick={() => onCollapsed()}>
      {title}
    </h3>
  );
}

export default AccordionTitle;
