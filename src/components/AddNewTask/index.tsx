import { PlusCircle } from 'phosphor-react';
import { AddNewTaskForm } from "./styles";

export function AddNewTask() {
  return (
    <AddNewTaskForm>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </AddNewTaskForm>
  )
}