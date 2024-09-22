import { title } from "process";

import { Button } from "./Button";
import { FilterValuesType } from "./App";

type PropsType = {
  title: string;
  tasks: TaskType[];
};

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodolistPropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: number) => void;
  changeFilter: (filter: FilterValuesType) => void;
};

export const Todolist = (props: TodolistPropsType) => {
  const tasksList: JSX.Element =
    props.tasks.length === 0 ? (
      <div>Ваш пуст</div>
    ) : (
      <ul>
        {props.tasks.map((task: TaskType) => {
          return (
            <li>
              <input aria-label="#" type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>

              <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>
          );
        })}
      </ul>
    );
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input aria-label="#" />
        <Button title="+" onClickHandler={() => {}} />
      </div>
      {tasksList}
      <div>
        <Button title="All" onClickHandler={() => props.changeFilter("all")} />
        <Button
          title="Active"
          onClickHandler={() => props.changeFilter("active")}
        />
        <Button
          title="Completed"
          onClickHandler={() => props.changeFilter("completed")}
        />
      </div>
    </div>
  );
};
