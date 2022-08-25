import { TaskCounterContainer } from "./styles";

interface TaskProps {
  id: string;
  description: string;
  isFinished: boolean;
}
interface TaskCounter {
  tasksCreated: TaskProps[];
  countTaskFinished: number;
}

export function TaskCounter({tasksCreated, countTaskFinished}: TaskCounter) {
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
          <p>{countTaskFinished} de {tasksCreated.length}</p>
        </div>
      </div>
    </TaskCounterContainer>
  )
}