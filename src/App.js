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
  const { title, priority, description, creationDate, completedDate } =
    props.toDo;
  return (
    <div>
      <h2>{title}</h2>
      <p>{priority}</p>
      <p>{creationDate}</p>
      {completedDate && <p>Completed Date: {completedDate}</p>}
      <p>Description: {description}</p>
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

  const handleAddToDo = (title, priority, description) => {
    const newToDo = {
      title,
      priority,
      isComplete: false,
      description,
      creationDate: new Date().toString().substring(4, 24),
      completedDate: null,
    };
    const toDoListCopy = [...toDoList, newToDo];
    setToDoList(toDoListCopy);
  };
  return (
    <div className='App-header'>
      <ToDoForm handleAddToDo={handleAddToDo} />
      <ToDoListContainer toDoList={toDoList} />
    </div>
  );
};

export default App;
