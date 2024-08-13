import React from "react";

export default function List({text, onDelete}) {
    return(
        <li className="list">
           <span>{text}</span>
           <button onClick={onDelete} className="delete-btn">x</button> 
        </li>
    )
}