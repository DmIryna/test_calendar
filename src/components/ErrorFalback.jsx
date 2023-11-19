import Button from "./styles/Button"
import Heading from "./styles/Heading"
import { Box, StyledErrorFallback } from "./styles/StyledErrorFallback"
import GlobalStyles from "./styles/globals"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong 🧐</Heading>
          <p>{error.message}</p>
          <Button $variant="primary" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  )
}

export default ErrorFallback
