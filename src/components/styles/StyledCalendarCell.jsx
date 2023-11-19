import styled from "styled-components"
import { Link } from "react-router-dom"

export const Cell = styled.div`
  border: 1px solid var(--color-gray-400);
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0.4rem;
  padding: 1rem;
  height: 8rem;
  color: var(--color-gray-400);
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: 1fr 1fr;
    font-size: 1.4rem;
    height: 12rem;
  }

  @media (min-width: ${({ theme }) => theme.media.md}) {
    font-size: 1.6rem;
  }

  &.same-month {
    color: var(--color-gray-950);
  }

  &.selected {
    font-weight: 700;
    background-color: var(--color-indigo-100);
  }

  &.today {
    background-color: var(--color-indigo-300);
  }
`
export const Time = styled.time`
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    justify-self: end;
  }
`

export const Span = styled.span`
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    justify-self: start;
  }
`

export const Title = styled(Link)`
  padding: 0.6rem;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: var(--color-indigo-800);
  color: var(--color-indigo-100);
  grid-column: 1/-1;
  align-self: start;
  cursor: pointer;
  text-decoration: none;

  p {
    display: none;

    @media (min-width: ${({ theme }) => theme.media.sm}) {
      display: block;
    }
  }
`
