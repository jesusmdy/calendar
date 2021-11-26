const today = new Date()
const initialState = {
  day: today.getDate()
}

const reducer = (state = initialState, action) => {
  const {type} = action
  const maxDays = action.payload?.maxDays || 31
  const {day} = state
  switch (type) {
    case '@day:previous':
      return {
        ...state,
        day: day === 1 ? maxDays : day-1
      }
    case '@day:next':
      return {
        ...state,
        day: day === maxDays ? 1 : day+1
      }
    case '@day:setDay':
      return {
        ...state,
        day: action.payload?.day || day
      }
    default:
      return state;
  }
}

export const selectCurrentDay = state => {
  return state.dayReducer.day
}

export default reducer
