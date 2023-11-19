import { format } from "date-fns"

export const monthDateFormat = (day) => {
  return format(day, "MMM yyyy")
}

export const fullDateFormat = (day) => {
  return format(day, "dd-MM-yyyy")
}

export const setSearchParamsDate = (day, searchParams, setSearchParams) => {
  searchParams.set("date", fullDateFormat(day))
  setSearchParams(searchParams)

  return searchParams
}

export const gridColsStart = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
]
