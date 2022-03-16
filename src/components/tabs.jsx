import react, { useState } from 'react';

const Tab = (props) => {
    return (
        <div style={{border: "solid black 1px", width: "400px", height: "300px"}}>
            {JSON.stringify(props.tabInfo[props.tabIdx].content)}
        </div>
    )
}

export default Tab