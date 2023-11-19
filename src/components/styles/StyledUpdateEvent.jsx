import styled from "styled-components"

export const StyledUpdateEvent = styled.div`
  max-width: 80rem;
  width: 35rem;
  margin: 6rem auto;
  border: 1px solid var(--color-gray-200);
  padding: 3rem;
  border-radius: 8px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: 100%;
  }
`
