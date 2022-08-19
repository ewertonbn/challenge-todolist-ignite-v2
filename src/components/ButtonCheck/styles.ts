import styled from "styled-components";

interface ButtonCheckCustomProps {
  taskIsChecked: boolean;
}

export const ButtonCheckCustom = styled.button `
  width: 1.0906rem;
  height: 1.0906rem;
  border-radius: 50%;
  border: 2px solid var(--blue);
  background: transparent;
  margin-right: .9375rem;
  transition: all 0.3s;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--blue-dark);
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    border-color: var(--blue-dark);

    &:before {
      opacity: 0.2;
      visibility: visible;
    }
  }
`