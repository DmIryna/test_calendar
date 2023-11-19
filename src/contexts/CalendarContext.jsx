import { startOfToday } from "date-fns"
import { createContext, useContext, useReducer } from "react"
import { monthDateFormat } from "../utils/helpers"

const CalendarContext = createContext()

const initialState = {
  selectedDay: startOfToday(),
  currentMonth: monthDateFormat(startOfToday()),
}

const reducer = (state, action) => {
  switch (action.type) {
    case "day/selected":
      return { ...state, selectedDay: action.payload }

    case "currentMonth/selected":
      return { ...state, currentMonth: action.payload }
  }
}

const CalendarProvider = ({ children }) => {
  const [{ selectedDay, currentMonth }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const setSelectedDay = (day) => {
    dispatch({ type: "day/selected", payload: day })
  }

  const setCurrentMonth = (day) => {
    dispatch({ type: "currentMonth/selected", payload: day })
  }

  return (
    <CalendarContext.Provider
      value={{ selectedDay, currentMonth, setCurrentMonth, setSelectedDay }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

const useCalendarContext = () => {
  const context = useContext(CalendarContext)

  if (context === undefined)
    throw new Error(`CalendarContext was used outside CalendarProvider`)

  return context
}

export { CalendarProvider, useCalendarContext }
