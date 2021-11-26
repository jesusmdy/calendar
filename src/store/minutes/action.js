import store from 'src/store'
import {selectCurrentMinutes} from 'src/store/minutes/reducer'

const previousMinute = () => {
  const currentMinutes = selectCurrentMinutes(store.getState())
  return {
    type: '@minutes:previous',
    payload: {
      minutes: currentMinutes === 0 ? 59 : currentMinutes -1
    }
  }
}
const nextMinute = () => {
  const currentMinutes = selectCurrentMinutes(store.getState())
  return {
    type: '@minutes:next',
    payload: {
      minutes: currentMinutes >= 59 ? 0 : currentMinutes +1
    }
  }
}

const setMinutes = (minutes = new Date().getMinutes()) => {
  return {
    type: '@minutes:set',
    payload: {
      minutes: minutes
    }
  }
}

export {previousMinute, nextMinute, setMinutes}
