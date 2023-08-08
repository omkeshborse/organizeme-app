import React from "react";

export const ShowTask = () => {
  const tasks = [
    {
      id: 1000,
      name: "Task A",
      time: "2:08:01 am 9/15/123",
    },
    {
      id: 1002,
      name: "Task b",
      time: "2:08:01 am 9/15/123",
    },
    {
      id: 1003 ,
      name: "Task C",
      time: "2:08:01 am 9/15/123",
    },
  ];
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>

        {
            tasks.map((task ,index)=>{
                return (
                  
                    <li key={task.id}>
                      <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time }</span>
                      </p>
                      <i className="bi bi-pencil-square"></i>
                      <i className="bi bi-trash"></i>
                    </li>
                  
                ); 
            })
        }
      
      </ul>
    </section>
  );
};
