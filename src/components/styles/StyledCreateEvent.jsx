import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

export const StyledCreateEvent = styled.div`
  max-width: 50rem;
  width: 35rem;
  border: 1px solid var(--color-gray-200);
  margin: 4rem auto;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  background-color: #fff;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: 100%;
  }
`
