import { useNavigate, useParams } from "react-router-dom"
import { format } from "date-fns"
import { useEvents } from "../contexts/eventContext"
import FormComponent from "../components/FormComponent"
import { StyledUpdateEvent } from "../components/styles/StyledUpdateEvent"

function UpdateEvent() {
  const { id } = useParams()
  const { events, updateEvent, deleteEvent, isLoading } = useEvents()
  const currentEvent = events.find((ev) => ev.id === +id)
  const navigate = useNavigate()

  const onSubmit = (event) => {
    const updatedEvent = {
      ...event,
      updatedAt: format(new Date(), "dd-MM-yyyy HH:mm"),
    }

    updateEvent(id, updatedEvent)
    navigate(-1)
  }

  const handleDeleteEvent = (id) => {
    deleteEvent(id)
    navigate("/")
  }

  return (
    <StyledUpdateEvent>
      <FormComponent
        title="Update Event"
        currentEvent={currentEvent}
        id={id}
        onSubmit={onSubmit}
        handleDeleteEvent={handleDeleteEvent}
        isLoading={isLoading}
      />
    </StyledUpdateEvent>
  )
}

export default UpdateEvent
