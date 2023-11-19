import styled from "styled-components"

export const StyledCalendarBody = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid var(--color-gray-400);

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    margin: 2rem 0;
  }
`

export const Span = styled.span`
  font-weight: 600;
`

export const Image = styled.img`
  width: 16;
  height: 16;

  &:hover {
    cursor: pointer;
  }
`
