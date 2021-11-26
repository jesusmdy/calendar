const today = new Date()
const initialState = {
  year: today.getFullYear()
}

const reducer = (state = initialState, action) => {
  const {type} = action
  const {year} = state

  switch (type) {
    case '@year:previous':
      return {
        ...state,
        year: year -1
      }
    case '@year:next':
      return {
        ...state,
        year: year +1
      }
    default:
      return state;
  }
}

export const selectCurrentYear = state => {
  return state.yearReducer.year
}

export default reducer
