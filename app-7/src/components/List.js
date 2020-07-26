import React, {Component} from "react";
import ToDo from "./ToDo"


function List (props){
    return (
        <div>{props.tasks.map((element, index, array) => {
            return <ToDo key={index} task={element}/>

            })}
        </div>    
    )
}

export default List;

//This is based on Lucas's react review. Below is the solution from the project readme (written as a class component, which isn't necessary, since this doesn't need state). 

