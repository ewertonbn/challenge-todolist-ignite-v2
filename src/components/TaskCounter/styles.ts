import styled from "styled-components";

export const TaskCounterContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  .counter {
    display: flex;
    align-items: center;

    &:first-child {

      strong {
        color: var(--blue);
      }
    }

    &:last-child {

      strong {
        color: var(--purple);
      }
    }

    strong {
      margin-right: 8px;
      font-weight: 700;
      font-size: .875rem;
      line-height: 1.0625rem;
    }

    div {
      padding: .125rem .5rem;
      background: var(--gray-400);
      border-radius: 62.4375rem;

      p {
        font-weight: 700;
        font-size: .75rem;
        line-height: .9375rem;
        color: var(--gray-200);
      }
    }
  }
`