import {getDaysInMonth} from 'date-fns'
import {selectCurrentMonth} from 'src/store/month/reducer'
import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentDay} from 'src/store/day/reducer'
import store from 'src/store'

const previousDay = () => {
  const state = store.getState()
  const day = selectCurrentDay(state)
  const date = new Date(selectCurrentYear(state), selectCurrentMonth(state))
  const maxDays = getDaysInMonth(date)
  return {
    type: "@day:previous",
    payload: {
      day: day === 1 ? maxDays : day-1,
      maxDays: maxDays
    }
  }
}

const nextDay = () => {
  const state = store.getState()
  const day = selectCurrentDay(state)
  const date = new Date(selectCurrentYear(state), selectCurrentMonth(state))
  const maxDays = getDaysInMonth(date)
  return {
    type: "@day:next",
    payload: {
      day: day === maxDays ? 1 : day+1,
      maxDays: maxDays
    }
  }
}

const setDay = (day) => {
  return {
    type: '@day:setDay',
    payload: {day}
  }
}

export {previousDay, nextDay, setDay}
