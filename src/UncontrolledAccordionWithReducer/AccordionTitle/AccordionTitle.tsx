import React from "react";

type IaccordionTitlePropsType={
    title:string
    onChangeHidden: ()=>void
}

 function AccordionTitle({title,onChangeHidden}:IaccordionTitlePropsType) {
    console.log('AccordionTitle');
    return (
        <h3 className={'title'} onClick={onChangeHidden}>{title}</h3>
    )
}

export default AccordionTitle;