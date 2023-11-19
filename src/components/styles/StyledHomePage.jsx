import styled from "styled-components"

export const StyledHomePage = styled.main`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    padding: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.media.md}) {
    padding: 6rem;
  }
`
