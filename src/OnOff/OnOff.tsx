import React, {useState} from "react";

function OnOff() {
    console.log('OnOff rendering')

    let [on, setOn]=useState<boolean>(false);

    const onStyle={
        height:'30px',
        width:'30px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: on? 'green':'transparent',
        display:'inline-block'
    }
    const offStyle={
        height:'30px',
        width:'30px',
        padding: '5px',
        border: '1px solid black',
        backgroundColor: on? 'transparent':'red',
        display:'inline-block',
        marginLeft: '10px'
    }
    const indicatorStyle={
        height:'20px',
        width:'20px',
        borderRadius:'50%',
        border: '1px solid black',
        backgroundColor: on? 'green':'red',
        display:'inline-block',
        marginLeft: '10px'
    }

return(
    <div>
        <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
        <div style={indicatorStyle}/>
    </div>
)
}

export default OnOff;