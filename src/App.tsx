import React from 'react';
import './App.css';
import OnOff from "./OnOff/OnOff";
import Accordion from "./Accordion/Accordion";
import Rating from './Rating/Rating';
import UncontrolledAccordion from "./UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./UncontrolledRating/UncontrolledRating";


function App() {

  return (
    <div className="App">
      <PageTitle title={'This is App component'}/>
      Title 1
       <Accordion title={'New'} hidden={true}/>
        <Rating value={3}/>
        Title 2
        <UncontrolledAccordion title={'Not controlled'}/>
        <UncontrolledRating/>
        <OnOff />
    </div>
  );
}

type IpageTitlePropsType={
    title:string
}

function PageTitle({title}:IpageTitlePropsType) {
    console.log('PageTitle');
    return (
        <h1>{title}</h1>
    )
}



export default App;
