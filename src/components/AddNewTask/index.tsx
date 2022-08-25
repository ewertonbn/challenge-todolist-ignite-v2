import { v4 as uuid } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { AddNewTaskForm } from "./styles";

interface NewTaskProps {
  id: string;
  description: string;
  isFinished: boolean;
}
interface AddNewTaskProps {
  onCreateNewTask: (newTask: NewTaskProps) => void;
}

export function AddNewTask({onCreateNewTask}: AddNewTaskProps) {
  const [task, setTask] = useState('');
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newListTask = {
      id: uuid(),
      description: task,
      isFinished: false
    }

    onCreateNewTask(newListTask);
    setTask('');
  }

  return (
    <AddNewTaskForm onSubmit={handleCreateNewTask}>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
        placeholder="Adicione uma nova tarefa" 
      />
      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </AddNewTaskForm>
  )
}