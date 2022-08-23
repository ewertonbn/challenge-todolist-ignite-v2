import styled from "styled-components";

export const NotFoundTaskContainer = styled.div `
  padding-top: 4rem;
  margin-top: 1.5rem;
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 1rem;
  }

  strong, p {
    color: var(--gray-300);
    line-height: 140%; 
  }
`;