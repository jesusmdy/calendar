import store from 'src/store'
import {selectCurrentHour} from 'src/store/hour/reducer'
const previousHour = () => {
  const currentHour = selectCurrentHour(store.getState())
  return {
    type: '@hour:previous',
    payload: {
      hour: currentHour === 0 ? 23 : currentHour -1
    }
  }
}
const nextHour = () => {
  const currentHour = selectCurrentHour(store.getState())
  return {
    type: '@hour:next',
    payload: {
      hour: currentHour >= 23 ? 0 : currentHour +1
    }
  }
}

const setHour = (hour = new Date().getHours()) => {
  return {
    type: '@hour:set',
    payload: {
      hour: hour
    }
  }
}

export {previousHour, nextHour, setHour}
