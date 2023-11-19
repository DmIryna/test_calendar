import { useSearchParams } from "react-router-dom"
import { format, parse } from "date-fns"
import { useEvents } from "../contexts/eventContext"
import { useCalendarContext } from "../contexts/CalendarContext"
import { useOutsideClick } from "../hooks/useOutsideClick"
import FormComponent from "./FormComponent"
import { Overlay, StyledCreateEvent } from "./styles/StyledCreateEvent"

function CreateEvent({ onSetIsOpenCreate }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const { selectedDay } = useCalendarContext()
  const initialDate =
    format(selectedDay, "yyyy-MM-dd") || format(new Date(), "yyyy-MM-dd")

  const { isLoading, createEvent } = useEvents()

  const closeWindow = () => {
    onSetIsOpenCreate(false)
    searchParams.delete("id")
    setSearchParams(searchParams)
  }
  const ref = useOutsideClick(closeWindow)

  const onSubmit = (event) => {
    const formattedEvent = {
      ...event,
      date: parse(event.date, "yyyy-MM-dd", new Date()),
      createdAt: format(new Date(), "dd-MM-yyyy HH:mm"),
    }

    createEvent(formattedEvent)
    closeWindow()
  }

  return (
    <Overlay>
      <StyledCreateEvent ref={ref}>
        <FormComponent
          initialDate={initialDate}
          isLoading={isLoading}
          title="Create New Event"
          onSubmit={onSubmit}
          closeWindow={closeWindow}
        />
      </StyledCreateEvent>
    </Overlay>
  )
}

export default CreateEvent
