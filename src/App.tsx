import React, { useState } from "react";
import "./App.css";
import Rating, { IRatingValue } from "./Rating/Rating";
// import Accordion from "./Accordion/Accordion";
import OnOff from "./OnOff/OnOff";
import Accordion from "./Accordion/Accordion";
import UncontrolledAccordion from "./UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./UncontrolledOnOff/UncontrolledOnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<IRatingValue>(0);
  let [hidden, setHidden] = useState<boolean>(false);
  let [active, setActive] = useState<boolean>(false);
  let [on, setOn] = useState<boolean>(false);

  const onStar = (value: IRatingValue) => () => setRatingValue(value);
  const onChange = () => setHidden(!hidden);
  const onActive = (on: boolean) => {
    setActive(on);
  };

  return (
    <div className="App">
      {/*<PageTitle title={'This is App component'}/>*/}
      {/*Title 1*/}
      {/*<UncontrolledAccordion title={"Not controlled"} />*/}
      {/*<Accordion title={"New"} hidden={hidden} onCollapsed={onChange} />*/}
      {/*<Rating value={ratingValue} onStar={onStar} />*!/*/}
      {/*Title 2

        <UncontrolledRating/>
        <OnOff />*/}
      <OnOff active={active} onActive={onActive} />
      {/*on change local state App component will know*/}
      <UncontrolledOnOff onChange={setOn} />
      {on.toString()}
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
