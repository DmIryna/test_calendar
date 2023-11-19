import { useEffect } from "react"
import { useEvents } from "../contexts/eventContext"
import CalendarBody from "../components/CalendarBody"
import Heading from "../components/styles/Heading"
import { StyledHomePage } from "../components/styles/StyledHomePage"

function HomePage() {
  const { getEvents } = useEvents()

  useEffect(() => {
    getEvents()
  }, [getEvents])

  return (
    <StyledHomePage>
      <Heading as="h1">Calendar</Heading>
      <CalendarBody />
    </StyledHomePage>
  )
}

export default HomePage
