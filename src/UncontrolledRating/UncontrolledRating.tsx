import React, {useState} from "react";

type IValueType= 0|1|2|3|4|5;

function UncontrolledRating() {

    let [value,setValue]=useState<IValueType>(0);

    let onStar=(value:IValueType)=>()=>setValue(value);

    return(
        <div>
            <Star selected={value>0} onStar={onStar(1)}/>
            <Star selected={value>1} onStar={onStar(2)}/>
            <Star selected={value>2} onStar={onStar(3)}/>
            <Star selected={value>3} onStar={onStar(4)}/>
            <Star selected={value>4} onStar={onStar(5)}/>
            {/*{stars}*/}
        </div>
    )

}
type IstarPropsType={
    selected: boolean,
    onStar: ()=>void;
}

function Star({selected,onStar}: IstarPropsType) {
    console.log('Star');
    if(selected){
        return <span className={'span'} onClick={onStar}><b>star</b> </span>
    }
    return(
        <span className={'span'} onClick={onStar}>star </span>
    )
}

export default UncontrolledRating;