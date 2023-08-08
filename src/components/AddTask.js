import React from "react";

export const AddTask = ({ taskList, setTaskList }) => {
    const handleSubmit =(e) =>{
        e.preventDefault()  ;
        const date = new Date() ;
        const newTask = {
          id: date.getTime(),
          name:  e.target.task.value ,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`, 
        };
        setTaskList([...taskList , newTask]) 
        e.target.task.value = "" ;
    }
  return (
    <section onSubmit={handleSubmit } className="addTask">
      <form>
        <input
          type="text"
          name="task"
          autoComplete="off"
          maxLength="25"
          placeholder="add task"
        />
        <button type="submit">add</button>
      </form>
    </section>
  );
};
