import React, { useState } from "react";
import "./App.css";

const ToDoListContainer = (props) => {
  return (
    <div>
      <h1>
        Todo List:{" "}
        {props.toDoList.map((toDo, index) => {
          return <ToDoItem toDo={toDo} key={index} />;
        })}{" "}
      </h1>
    </div>
  );
};

const ToDoItem = (props) => {
  console.log(props.toDo);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.priority}</p>
      <p>{props.creationDate}</p>
      <p>{props.completedDate}</p>
    </div>
  );
};

const App = () => {
  const [toDoList, settoDoList] = useState([
    {
      title: "Implement ToDo List",
      priority: "High",
      isComplete: false,
      description: "Implement the todo list application",
      creationDate: new Date().toString(),
      completedDate: null,
    },
  ]);
  return (
    <div className='App-header'>
      <ToDoListContainer toDoList={toDoList} />
    </div>
  );
};

export default App;
