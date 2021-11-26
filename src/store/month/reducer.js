const today = new Date()
const initialState = {
  month: today.getMonth()
}

const reducer = (state = initialState, action) => {
  const {type} = action
  const {payload} = action

  switch (type) {
    case '@month:previous':
      return {
        ...state,
        month: payload
      }
    case '@month:next':
      return {
        ...state,
        month: payload
      }
    case '@month:set':
      return {
        ...state,
        month: payload
      }
    default:
      return state;
  }
}

export const selectCurrentMonth = state => {
  return state.monthReducer.month
}

export default reducer
