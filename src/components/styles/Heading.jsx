import styled, { css } from "styled-components"

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      margin-bottom: 1.6rem;
      padding-top: 2rem;

      @media (min-width: ${({ theme }) => theme.media.sm}) {
        font-size: 2.6rem;
      }
    `}
`

export default Heading
