const date = new Date()

const initialState = { hour: date.getHours()}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case '@hour:previous':
      return {
        ...state,
        hour: payload?.hour
      }
    case '@hour:next':
      return {
        ...state,
        hour: payload?.hour
      }
    case '@hour:set':
      return {
        ...state,
        hour: payload?.hour
      }
    default:
      return state;
  }
}

export const selectCurrentHour = state => {
  return state.hourReducer.hour
}

export default reducer
