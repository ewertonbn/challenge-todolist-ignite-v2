import { Trash } from 'phosphor-react';
import { useState } from 'react';

import { ButtonCheckCustom, TasksListContainer } from "./styles";

interface TasksListType {
  id: string;
  description: string;
  isFinished: boolean;
}

interface TasksListProps {
  tasks: TasksListType[],
  onDeleteTask: (task: string) => void;
  onToggleCheckedTask: (task: string) => void;
}

export function TasksList({tasks, onDeleteTask, onToggleCheckedTask}: TasksListProps) {

  function handleCheckedTask(id: string) {
    onToggleCheckedTask(id)
  }

  function handleDeleteTask(id: string) {
    onDeleteTask(id)
  }

  return (
    <TasksListContainer>
      { tasks.map(task => (
        <div className="item" key={task.id}>
          <ButtonCheckCustom 
            onClick={() => handleCheckedTask(task.id)}
            taskIsFinished={task.isFinished} 
          />
          { task.isFinished 
            ? <p><del>{task.description}</del></p>
            : <p>{task.description}</p>
          }
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