import {getDay, getDaysInMonth} from 'date-fns'
export default function getMonthWhiteSpaces (year, month, day) {
  const previousMonth = month-1
  const numberOfDaysInPreviousMonth = getDaysInMonth(previousMonth)

  const dayOfTheWeekOfFirstDayOfMonth = getDay(new Date(year, month, 1))
  let whiteSpaces = []
  for (let empty = 0; empty < dayOfTheWeekOfFirstDayOfMonth; empty++) {
    whiteSpaces.push(null)
  }

  let daysInPreviousMonth = []
  Array(numberOfDaysInPreviousMonth)
  .fill(null)
  .map((_, index) => daysInPreviousMonth.push(index))

  const numberWhiteSpaces = daysInPreviousMonth.reverse().slice(0, whiteSpaces.length)
  numberWhiteSpaces.map((number, index) => whiteSpaces[index] = (number +1))

  return whiteSpaces.reverse()
}