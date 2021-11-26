import {getDaysInMonth} from 'date-fns'
import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentMonth} from 'src/store/month/reducer'
import store from 'src/store'

export default function maxDays () {
  const {getState} = store
  const state = getState()
  const year = selectCurrentYear(state)
  const month = selectCurrentMonth(state)
  const date = new Date(year, month)
  return getDaysInMonth(date)
}
