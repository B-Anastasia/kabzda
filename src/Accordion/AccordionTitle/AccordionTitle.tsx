import React from "react";

type IaccordionTitlePropsType={
    title:string
}

 function AccordionTitle({title}:IaccordionTitlePropsType) {
    console.log('AccordionTitle');
    return (
        <h3 className={'title'}>{title}</h3>
    )
}

export default AccordionTitle;