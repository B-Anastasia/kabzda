import React, {useState} from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type IaccordionPropsType={
    title:string,
}

function UncontrolledAccordion({title}:IaccordionPropsType) {
    console.log('Accordion');

    let [hidden, setHidden]=useState<boolean>(false);

    const onChangeHidden=()=>{
        setHidden(!hidden);
    }
    return (
        <div>
            <AccordionTitle title={title} onChangeHidden={onChangeHidden}/>
            { !hidden && <AccordionBody />}
        </div>
    )
}

export default UncontrolledAccordion;