import styled from "styled-components";

import checkedImg from '../../assets/checked.svg';

interface ButtonCheckCustomProps {
  taskIsChecked: boolean;
}

export const ButtonCheckCustom = styled.button<ButtonCheckCustomProps> `
  width: 1.0906rem;
  height: 1.0906rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.taskIsChecked ? '#5E60CE' : '#4EA8DE'};
  background: ${(props) => props.taskIsChecked ? '#5E60CE' : 'transparent'};
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
    background: ${(props) => props.taskIsChecked ? '#8284FA' : '#1E6F9F'};
    opacity: 0;
    visibility: hidden;
  }

  &:after {
    background-image: ${(props) => props.taskIsChecked && `url(${checkedImg})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  &:hover {
    border-color: ${(props) => props.taskIsChecked ? '#8284FA' : '#1E6F9F'};
    background: ${(props) => props.taskIsChecked && '#8284FA'};

    &:before {
      opacity: ${(props) => props.taskIsChecked ? '1' : '0.2'};
      visibility: visible;
    }
  }
`