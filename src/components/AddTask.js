import React from "react";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
        const date = new Date() ;
        const updatedTaskList  = taskList.map((todo)=>(
            todo.id === task.id ? {id : task.id , name : task.name , time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`  } : todo 
        )) ;
         setTaskList(updatedTaskList) ;
         
    }else{
         const date = new Date();
         const newTask = {
           id: date.getTime(),
           name: e.target.task.value,
           time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
         };
         setTaskList([...taskList, newTask]);
         e.target.task.value = "";
    }
   
  };
  return (
    <section onSubmit={handleSubmit} className="addTask">
      <form>
        <input
          type="text"
          name="task" 
          value={task.name}
          autoComplete="off"
          maxLength="25"
          placeholder="add task"
          onChange={e=>setTask({...task , name : e.target.value})}
        />
        <button type="submit">add</button>
      </form>
    </section>
  );
};
