import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  parse,
  startOfWeek,
} from "date-fns"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useSearchParams } from "react-router-dom"
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa"
import { useCalendarContext } from "../contexts/CalendarContext"
import { monthDateFormat, setSearchParamsDate } from "../utils/helpers"
import Button from "./styles/Button"
import CalendarCell from "./CalendarCell"
import Row from "./styles/Row"
import CreateEvent from "./CreateEvent"
import { Image, Span, StyledCalendarBody } from "./styles/StyledCalendarBody"

function CalendarBody() {
  const { selectedDay, currentMonth, setCurrentMonth, setSelectedDay } =
    useCalendarContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isOpenCreate, setIsOpenCreate] = useState(false)
  const firstDayCurrentMonth = parse(currentMonth, "MMM yyyy", new Date())

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  const handleNextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(monthDateFormat(firstDayNextMonth))
    setSearchParamsDate(firstDayNextMonth, searchParams, setSearchParams)
  }

  const handlePreviousMonth = () => {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(monthDateFormat(firstDayPrevMonth))
    setSearchParamsDate(firstDayPrevMonth, searchParams, setSearchParams)
  }

  const handleChange = (day) => {
    setSelectedDay(day)
    setCurrentMonth(monthDateFormat(day))
    setSearchParamsDate(day, searchParams, setSearchParams)
  }

  const handleClick = (day) => {
    setSelectedDay(day)
    setSearchParamsDate(day, searchParams, setSearchParams)
  }

  return (
    <>
      <Row>
        <Button
          $variant="primary"
          size="medium"
          onClick={() => setIsOpenCreate(true)}
          aria-label="New Item"
        >
          <FaPlus />
        </Button>

        <Row>
          <Button onClick={handlePreviousMonth} aria-label="Chevron Left">
            <FaChevronLeft />
          </Button>
          <Span aria-labelledby="Current month" aria-placeholder="MMM-yyyy">
            {monthDateFormat(firstDayCurrentMonth)}
          </Span>
          <Button onClick={handleNextMonth} aria-label="Chevron Right">
            <FaChevronRight />
          </Button>

          <DatePicker
            selected={selectedDay}
            onChange={(day) => handleChange(day)}
            dateFormat="dd/MM/yyyy"
            customInput={<Image src="/calendar.png" alt="calendar icon" />}
          />
        </Row>
      </Row>
      <StyledCalendarBody>
        {days.map((day, dayInd) => (
          <CalendarCell
            key={day.toString()}
            day={day}
            dayInd={dayInd}
            onHandleClick={handleClick}
            firstDayCurrentMonth={firstDayCurrentMonth}
            onSetIsOpenCreate={setIsOpenCreate}
          />
        ))}
      </StyledCalendarBody>

      {isOpenCreate && <CreateEvent onSetIsOpenCreate={setIsOpenCreate} />}
    </>
  )
}

export default CalendarBody
