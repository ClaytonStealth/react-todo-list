import React, { useState } from "react";

const ToDoForm = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <label>Title</label>
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
      />
      <br />
      <label>Priority</label>
      <select
        onChange={(e) => {
          setPriority(e.target.value);
          console.log(priority);
        }}
      >
        <option value=''></option>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
      <br />
      <label>Description</label>
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(description);
        }}
      ></textarea>
      <br />
      <button
        onClick={(e) => {
          props.handleAddToDo(title, priority, description);
        }}
      >
        Add ToDo
      </button>
    </div>
  );
};

export default ToDoForm;
