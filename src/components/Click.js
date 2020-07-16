import React from "react";

function ClickableSpan(props) {
    return <span  style={{cursor: 'pointer'}} {...props}>{props.value}</span>;
}

function ClickableDiv(props) {
    return <div  style={{cursor: 'pointer'}} {...props}>{props.value}</div>;
}

export { ClickableSpan, ClickableDiv };
