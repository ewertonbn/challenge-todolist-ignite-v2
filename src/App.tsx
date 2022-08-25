import { useState } from 'react';

import { AddNewTask } from "./components/AddNewTask";
import { Header } from "./components/Header";
import { NotFoundTask } from './components/NotFoundTask';
import { TaskCounter } from "./components/TaskCounter";
import { TasksList } from "./components/TasksList";
import { GlobalStyle, TasksContainer } from "./styles/global";

interface NewTaskProps {
  id: string;
  description: string;
  isFinished: boolean;
}

export function App() {
  const [listTasks, setListTasks] = useState<NewTaskProps[]>([])

  const countTaskFinished = listTasks.filter(task => task.isFinished).length;

  function onToggleCheckedTask(id: string) {
    const taskChecked = listTasks.map(task => 
      task.id === id ? {
        ...task,
        isFinished: !task.isFinished
      } : task
    )

    setListTasks(taskChecked)
  }

  function onCreateNewTask(newTask: NewTaskProps) {
    setListTasks([...listTasks, newTask]);
  }

  function onDeleteTask(id: string) {
    const newListTasks = listTasks.filter(item => {
      return item.id !== id
    })

    setListTasks(newListTasks);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <TasksContainer>
        <AddNewTask onCreateNewTask={onCreateNewTask} />
        <TaskCounter tasksCreated={listTasks} countTaskFinished={countTaskFinished} />
        { listTasks.length > 0 
          ? ( 
              <TasksList 
                tasks={listTasks} 
                onDeleteTask={onDeleteTask} 
                onToggleCheckedTask={onToggleCheckedTask}
              /> 
            ) 
          : ( <NotFoundTask /> )
        }
      </TasksContainer>
    </>
  ) 
}
