import styled from "styled-components";

export const AddNewTaskForm = styled.form`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 39.875rem;
    height: 3.375rem;
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    color: var(--gray-100);
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 0 2px var(--purple-dark);
    }

    &:focus {
      outline: transparent;
      box-shadow: 0 0 0 2px var(--purple-dark);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 5.625rem;
    height: 3.25rem;
    background: var(--blue-dark);
    border-radius: 8px;
    border: none;
    transition: all 0.3s;

    &:hover {
      background: var(--blue);
    }

    span {
      font-weight: 700;
      color: var(--gray-100);
      font-size: .875rem;
      line-height: 140%;
    }

    svg {
      color: var(--gray-100);
    }
  }
`