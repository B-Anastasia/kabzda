import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

export type IaccordionPropsType={
    title:string,
    hidden:boolean
}

function Accordion({title,hidden}:IaccordionPropsType) {
    console.log('UncontrolledAccordion');

    return (
        <div>
            <AccordionTitle title={title}/>
            { !hidden && <AccordionBody />}
        </div>
    )
}

export default Accordion;