import React, { useState } from "react";
import ToDoForm from "./component/ToDoForm";
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
      <h2>{props.toDo.title}</h2>
      <p>{props.toDo.priority}</p>
      <p>{props.toDo.creationDate}</p>
      {props.toDo.completedDate && (
        <p>Completed Date: {props.toDo.completedDate}</p>
      )}
    </div>
  );
};

const App = () => {
  const [toDoList, setToDoList] = useState([
    {
      title: "Implement ToDo List",
      priority: "High",
      isComplete: false,
      description: "Implement the todo list application",
      creationDate: new Date().toString(),
      completedDate: null,
    },
  ]);

  const handleAddToDo = (toDo) => {
    const toDoListCopy = [...toDoList];
    toDoListCopy.push(toDo);
    setToDoList(toDoListCopy);
  };
  return (
    <div className='App-header'>
      <ToDoForm />
      <ToDoListContainer toDoList={toDoList} />
    </div>
  );
};

export default App;
