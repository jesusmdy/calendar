import {getDay} from 'date-fns'
import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentMonth} from 'src/store/month/reducer'
import store from 'src/store'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sathurday']

export default function dayName (day) {
  const {getState} = store
  const state = getState()
  const year = selectCurrentYear(state)
  const month = selectCurrentMonth(state)
  const date = new Date(year, month, day)
  return days[getDay(date)]
}
