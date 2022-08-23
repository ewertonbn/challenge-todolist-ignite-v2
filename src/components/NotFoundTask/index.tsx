import iconImg from '../../assets/icon-list.svg';
import { NotFoundTaskContainer } from "./styles";

export function NotFoundTask() {
  return (
    <NotFoundTaskContainer>
      <img src={iconImg} alt="Ícone de lista" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </NotFoundTaskContainer>
  )
}