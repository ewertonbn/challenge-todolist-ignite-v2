import styled from "styled-components";

import checkedImg from '../../assets/checked.svg';

interface ButtonCheckCustomProps {
  taskIsFinished: boolean;
}

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

      del {
        color: var(--gray-300);
      }
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

export const ButtonCheckCustom = styled.button<ButtonCheckCustomProps> `
  width: 1.0906rem;
  height: 1.0906rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.taskIsFinished ? '#5E60CE' : '#4EA8DE'};
  background: ${(props) => props.taskIsFinished ? '#5E60CE' : 'transparent'};
  margin-right: .9375rem;
  transition: all 0.3s;
  position: relative;

  &::before, &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  &:before {
    background: ${(props) => props.taskIsFinished ? '#8284FA' : '#1E6F9F'};
    opacity: 0;
    visibility: hidden;
  }

  &:after {
    background-image: ${(props) => props.taskIsFinished && `url(${checkedImg})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  &:hover {
    border-color: ${(props) => props.taskIsFinished ? '#8284FA' : '#1E6F9F'};
    background: ${(props) => props.taskIsFinished && '#8284FA'};

    &:before {
      opacity: ${(props) => props.taskIsFinished ? '1' : '0.2'};
      visibility: visible;
    }
  }
`