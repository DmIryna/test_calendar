import axios from "axios"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react"

const BASE_URL = "http://localhost:9000/events"

const EventContext = createContext()

const initialState = {
  events: [],
  apiError: {},
  isLoading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "events/getAll": {
      return { ...state, events: action.payload, isLoading: false }
    }

    case "event/created":
      return {
        ...state,
        events: [...state.events, action.payload],
        isLoading: false,
      }

    case "event/updated":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id
            ? { ...event, event: action.payload }
            : event
        ),
        isLoading: false,
      }

    case "event/deleted":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        isLoading: false,
      }

    case "rejected":
      return { ...state, apiError: action.payload, isLoading: false }

    case "loading":
      return { ...state, isLoading: action.payload }

    default:
      return { ...state }
  }
}

const EventsProvider = ({ children }) => {
  const [{ events, apiError, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  const createEvent = async (newEvent) => {
    dispatch({ type: "loading", payload: true })
    try {
      const response = await axios.post(BASE_URL, newEvent)

      dispatch({ type: "event/created", payload: response.data })
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message })
    }
  }

  const getEvents = useCallback(async () => {
    dispatch({ type: "loading", payload: true })
    try {
      const response = await axios.get(BASE_URL)
      dispatch({ type: "events/getAll", payload: response.data })
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message })
    }
  }, [])

  const deleteEvent = async (id) => {
    dispatch({ type: "loading", payload: true })
    try {
      await axios.delete(`${BASE_URL}/${id}`)
      dispatch({ type: "event/deleted", payload: id })
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message })
    }
  }

  const updateEvent = async (id, updatedEvent) => {
    dispatch({ type: "loading", payload: true })
    try {
      const response = await axios.patch(`${BASE_URL}/${id}`, updatedEvent)
      dispatch({ type: "event/updated", payload: response.data })
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message })
    }
  }

  return (
    <EventContext.Provider
      value={{
        events,
        apiError,
        isLoading,
        createEvent,
        getEvents,
        deleteEvent,
        updateEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

const useEvents = () => {
  const context = useContext(EventContext)

  if (context === undefined)
    throw new Error(`EventContext was used outside EventProvider`)

  return context
}

export { EventsProvider, useEvents }
