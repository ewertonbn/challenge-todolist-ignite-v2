import styled from "styled-components";

export const TasksListContainer = styled.div `
  margin-top: 1.5rem;

  .item {
    width: 100%;
    height: 4.5rem;
    background: var(--gray-500);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: flex-start;

    & + div {
      margin-top: .75rem;
    }

    p {
      font-size: .875rem;
      line-height: 140%;
      margin-right: .75rem;
    }

    .delete {
      background: transparent;
      border: none;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      transition: all 0.3s;

      &:hover {
        background: var(--gray-400);
        border-radius: 4px;

        svg {
          color: var(--danger);
        }
      }

      svg {
        color: var(--gray-300);
      }
    }
  }
`