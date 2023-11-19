import styled, { css } from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3rem;
`
export const Label = styled.label`
  color: var(--color-gray-400);
  font-size: 1.2rem;
  text-align: start;
  display: block;
  margin-bottom: 1rem;

  &.required {
    &::after {
      content: "*";
      padding-left: 0.4rem;
      color: var(--color-red-500);
    }
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-gray-200);
  color: var(--color-gray-500);
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    font-size: 1.6rem;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-indigo-500);
  }

  ${(props) =>
    props.as === "textarea" &&
    css`
      height: 15rem;
    `}
`

export const ErrorMsg = styled.p`
  font-size: 1.2rem;
  color: var(--color-red-500);
  text-align: start;
  padding-top: 1rem;
`

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
`
