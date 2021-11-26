const date = new Date()

const initialState = { minutes: date.getMinutes()}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case '@minutes:previous':
      return {
        ...state,
        minutes: payload?.minutes
      }
    case '@minutes:next':
      return {
        ...state,
        minutes: payload?.minutes
      }
    case '@minutes:set':
      return {
        ...state,
        minutes: payload?.minutes
      }
    default:
      return state;
  }
}

export const selectCurrentMinutes = state => {
  return state.minutesReducer.minutes
}

export default reducer
