import { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import React from "react";

export type FilterValuesType = "all" | "active" | "completed";
function App() {
  const todoListTitle = "What to learn";

  //   const tasks1: Array<TaskType> = [
  //     { id: 1, title: "HTML&CSS", isDone: true },
  //     { id: 2, title: "JS", isDone: true },
  //     { id: 3, title: "ReactJS", isDone: false },
  //     { id: 4, title: "Redux", isDone: false },
  //     { id: 5, title: "Typescript", isDone: false },
  //     { id: 6, title: "RTK query", isDone: false },
  //   ];

  const [tasks, setTasks] = React.useState<Array<TaskType>>([
    { id: 1, title: "HTML&CSS", isDone: true },
    // { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Typescript", isDone: false },
    { id: 6, title: "RTK query", isDone: false },
  ]);

  const removeTask = (taskId: number) => {
    // 1 234 =>
    const nextState: Array<TaskType> = tasks.filter((t) => t.id !== taskId);
    // 2
    setTasks(nextState);
  };

  const [filter, setFilter] = useState<FilterValuesType>("all");
  //   const [tasks, setTasks] = React.useState<TaskType []

  let filteredTasks: Array<TaskType> = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
  }
  const changeFilter = (newFilterValue: FilterValuesType) =>
    setFilter(newFilterValue);
  //   const filteredTasks:
  // initial state # 123

  // const tasks2: Array<TaskType> = [
  // 	{ id: 1, title: 'Hello world', isDone: true },
  // 	{ id: 2, title: 'I am Happy', isDone: false },
  // 	{ id: 3, title: 'Yo', isDone: false },
  // ]

  return (
    <div className="App">
      <Todolist
        title={todoListTitle}
        removeTask={removeTask}
        tasks={filteredTasks}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
