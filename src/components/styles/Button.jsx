import styled, { css } from "styled-components"

const Button = styled.button`
  color: var(--color-gray-400);
  font-size: 1.4;
  font-weight: 600;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover {
    color: var(--color-gray-950);
  }

  ${(props) =>
    props.$variant === "primary" &&
    css`
      background-color: var(--color-indigo-300);
      color: var(--color-indigo-700);

      &:hover {
        color: var(--color-indigo-300);
        background-color: var(--color-indigo-700);
      }

      &:disabled {
        cursor: not-allowed;
        background-color: var(--color-indigo-100);
      }
    `}

  ${(props) =>
    props.$variant === "danger" &&
    css`
      background-color: var(--color-red-500);
      color: var(--color-red-200);
      font-size: 2.2rem;

      &:hover {
        color: var(--color-red-500);
        background-color: var(--color-red-200);
      }
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      font-weight: 600;
    `}

     ${(props) =>
    props.$variant === "close" &&
    css`
      font-size: 2.4rem;
      font-weight: 600;
      color: var(--color-red-500);
      position: absolute;
      top: 1.6rem;
      right: 2rem;

      &:hover {
        color: var(--color-red-800);
      }
    `}
`

export default Button
