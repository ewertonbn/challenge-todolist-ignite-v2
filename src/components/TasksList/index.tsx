import { v4 as uuid } from 'uuid';

import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { ButtonCheck } from '../ButtonCheck';

import { TasksListContainer } from "./styles";

export function TasksList() {
  const [taskIsChecked, setTaskIsChecked] = useState(false);

  const tasks = [
    {
      id: uuid(),
      description: 'Primeiro desafio prático.',
      isChecked: true
    },
    {
      id: uuid(),
      description: 'Vamos ver no que vai dar.',
      isChecked: false
    },
  ]

  return (
    <TasksListContainer>
      { tasks.map(task => (
        <div className="item" key={task.id}>
          <ButtonCheck taskIsChecked={taskIsChecked} />
          <p>{task.description}</p>
          <button type="button" className="delete">
            <Trash size={16} />
          </button>
        </div>
      )) }
    </TasksListContainer>
  )
}