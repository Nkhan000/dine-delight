/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

const StyledOptionsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  & span {
    font-size: 1.4rem;
    color: var(--color-grey-500);
    font-weight: 600;
    text-transform: capitalize;
  }
  & label {
    font-size: 1.5rem;
  }

  & select {
    background-color: transparent;
    border: none;
    color: var(--color-grey-50);
    font-size: 1.4rem;
    padding: 0.5rem;
    padding-right: 0;
    text-transform: capitalize;

    &:focus,
    &:active {
      outline: var(--outline-orange-01);
    }

    & option {
      color: var(--color-grey-900);
      background-color: var(--color-grey-50);
      text-transform: capitalize;

      &:disabled {
        background-color: none;
        color: var(--color-grey-800);
      }
    }
  }
`;

export default StyledOptionsDiv;
