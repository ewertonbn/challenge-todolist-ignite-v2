import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { AddNewTask } from "./components/AddNewTask";
import { Header } from "./components/Header";
import { NotFoundTask } from './components/NotFoundTask';
import { TaskCounter } from "./components/TaskCounter";
import { TasksList } from "./components/TasksList";
import { GlobalStyle, TasksContainer } from "./styles/global";

interface NewTaskProps {
  id: string;
  description: string;
  isChecked: boolean;
}

interface deleteOneTaskProps extends NewTaskProps {}

export function App() {
  const [listTasks, setListTasks] = useState<NewTaskProps[]>([])

  function onCreateNewTask(newTask: NewTaskProps) {
    setListTasks([...listTasks, newTask]);
  }

  function onDeleteOneTask(task: string) {
    const newListTasks = listTasks.filter(item => {
      return item.id !== task
    })

    setListTasks(newListTasks);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <TasksContainer>
        <AddNewTask onCreateNewTask={onCreateNewTask} />
        <TaskCounter />
        { listTasks.length > 0 
          ? ( <TasksList tasks={listTasks} onDeleteOneTask={onDeleteOneTask} /> ) 
          : ( <NotFoundTask /> )
        }
      </TasksContainer>
    </>
  ) 
}
