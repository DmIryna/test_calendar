import styled from "styled-components"

export const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`

export const Box = styled.div`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-100);
  border-radius: 5px;

  padding: 4.8rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`
