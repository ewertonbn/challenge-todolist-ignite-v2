import { ButtonCheckCustom } from "./styles";

interface ButtonCheckProps {
  taskIsChecked: boolean;
}

export function ButtonCheck({taskIsChecked}: ButtonCheckProps) {
  return (
    <ButtonCheckCustom taskIsChecked={taskIsChecked} />
  )
}