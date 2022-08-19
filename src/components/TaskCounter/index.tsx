import { TaskCounterContainer } from "./styles";

export function TaskCounter() {
  return (
    <TaskCounterContainer>
      <div className="counter">
        <strong>Tarefas criadas</strong>
        <div>
          <p>5</p>
        </div>
      </div>
      <div className="counter">
        <strong>Concluídas</strong>
        <div>
          <p>2 de 5</p>
        </div>
      </div>
    </TaskCounterContainer>
  )
}