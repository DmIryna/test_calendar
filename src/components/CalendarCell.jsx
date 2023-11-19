import {
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from "date-fns"
import { fullDateFormat, gridColsStart } from "../utils/helpers"
import { useEvents } from "../contexts/eventContext"
import { useCalendarContext } from "../contexts/CalendarContext"
import { Cell, Time, Span, Title } from "./styles/StyledCalendarCell"

function CalendarCell({ day, dayInd, onHandleClick, firstDayCurrentMonth }) {
  const { events } = useEvents()
  const { selectedDay } = useCalendarContext()

  return (
    <Cell
      className={`${isToday(day) && "today"} ${
        isSameMonth(day, firstDayCurrentMonth) && "same-month"
      } ${isEqual(day, selectedDay) && "selected"} ${
        dayInd === 0 && gridColsStart[getDay(day)]
      }`}
      onClick={() => onHandleClick(day)}
    >
      <Span aria-labelledby="Weekday" aria-placeholder="EEE">
        {format(day, "EEE")}
      </Span>
      <Time dateTime={fullDateFormat(day)} aria-placeholder="d">
        {format(day, "d")}
      </Time>
      {events.map((event) =>
        isSameDay(parseISO(event.date), day) ? (
          <Title
            key={event.id}
            to={`event/${event.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <p id={event.id}>{event.title}</p>
          </Title>
        ) : (
          ""
        )
      )}
    </Cell>
  )
}

export default CalendarCell
