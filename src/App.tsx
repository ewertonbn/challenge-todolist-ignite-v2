import { AddNewTask } from "./components/AddNewTask";
import { Header } from "./components/Header";
import { TaskCounter } from "./components/TaskCounter";
import { TasksList } from "./components/TasksList";
import { GlobalStyle, TasksContainer } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TasksContainer>
        <AddNewTask />
        <TaskCounter />
        <TasksList />
      </TasksContainer>
    </>
  ) 
}
