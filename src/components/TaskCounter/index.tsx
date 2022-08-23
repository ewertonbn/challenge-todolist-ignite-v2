import { TaskCounterContainer } from "./styles";

interface TaskProps {
  id: string;
  description: string;
  isChecked: boolean;
}
interface TaskCounter {
  tasksCreated: TaskProps[]
}

export function TaskCounter({tasksCreated}: TaskCounter) {
  return (
    <TaskCounterContainer>
      <div className="counter">
        <strong>Tarefas criadas</strong>
        <div>
          <p>{tasksCreated.length}</p>
        </div>
      </div>
      <div className="counter">
        <strong>Concluídas</strong>
        <div>
          <p>2 de {tasksCreated.length}</p>
        </div>
      </div>
    </TaskCounterContainer>
  )
}