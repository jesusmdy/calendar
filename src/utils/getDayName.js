import {getDay} from 'date-fns'
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sathurday']
export const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function getDayName ({year, month, day}, short = false) {
  const date = new Date(year, month, day)
  const dayNumber = getDay(date)
  return short ? shortDays[dayNumber] : days[dayNumber]
}