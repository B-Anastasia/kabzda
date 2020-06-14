import React, { useState } from "react";
import "./App.css";
import Rating, { IRatingValue } from "./Rating/Rating";
// import Accordion from "./Accordion/Accordion";
import OnOff from "./OnOff/OnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<IRatingValue>(0);
  let [hidden, setHidden] = useState<boolean>(false);
  let [active, setActive] = useState<boolean>(false);

  const onStar = (value: IRatingValue) => () => setRatingValue(value);
  const onCollapsed = () => setHidden(!hidden);
  const onActive = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      {/*<PageTitle title={'This is App component'}/>*/}
      {/*Title 1*/}
      {/*   <Accordion title={"New"} hidden={hidden} onCollapsed={onCollapsed} />
      <Rating value={ratingValue} onStar={onStar} />*/}
      {/*Title 2
        <UncontrolledAccordion title={'Not controlled'}/>
        <UncontrolledRating/>
        <OnOff />*/}
      <OnOff active={active} onActive={onActive} />
    </div>
  );
}

type IpageTitlePropsType = {
  title: string;
};

function PageTitle({ title }: IpageTitlePropsType) {
  console.log("PageTitle");
  return <h1>{title}</h1>;
}

export default App;
