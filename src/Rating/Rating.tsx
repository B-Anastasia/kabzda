import React from "react";

type IratingPropsType={
    value: 0|1|2|3|4|5
}

 function Rating({value}: IratingPropsType) {
    return(
        <div>
            <Star selected={value>0}/>
            <Star selected={value>1}/>
            <Star selected={value>2}/>
            <Star selected={value>3}/>
            <Star selected={value>4}/>
        </div>
    )

}
type IstarPropsType={
     selected: boolean
}

function Star({selected}: IstarPropsType) {
    console.log('Star');
    if(selected){
        return <span  className={'span'}><b>star</b> </span>
    }
    return(
        <span className={'span'}>star </span>
    )
}

export default Rating;