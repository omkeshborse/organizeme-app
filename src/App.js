import { useState } from "react";

import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([
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
      id: 1003,
      name: "Task C",
      time: "2:08:01 am 9/15/123",
    },
  ]);
  const [task, setTask] = useState({});
  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
