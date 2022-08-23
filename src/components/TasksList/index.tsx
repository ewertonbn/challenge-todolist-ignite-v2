import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { ButtonCheck } from '../ButtonCheck';

import { TasksListContainer } from "./styles";

interface TasksListType {
  id: string;
  description: string;
  isChecked: boolean;
}

interface TasksListProps {
  tasks: TasksListType[],
  onDeleteOneTask: (task: string) => void;
}

export function TasksList({tasks, onDeleteOneTask}: TasksListProps) {
  const [taskIsChecked, setTaskIsChecked] = useState(false);

  function handleDeleteTask(task: string) {
    onDeleteOneTask(task)
  }

  return (
    <TasksListContainer>
      { tasks.map(task => (
        <div className="item" key={task.id}>
          <ButtonCheck taskIsChecked={taskIsChecked} />
          <p>{task.description}</p>
          <button 
            type="button" 
            className="delete"
            onClick={() => handleDeleteTask(task.id)}
          >
            <Trash size={16} />
          </button>
        </div>
      )) }
    </TasksListContainer>
  )
}