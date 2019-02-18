import React, {Component} from 'react'
import Todo from './Todo'

const ToDoList = (props) =>  {
    const elements = props.data.map(element => <Todo key={element.id} text={element.text}/>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default ToDoList;