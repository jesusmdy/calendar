import {createStore, combineReducers} from 'redux'
import yearReducer from 'src/store/year/reducer'
import monthReducer from 'src/store/month/reducer'
import dayReducer from 'src/store/day/reducer'
import hourReducer from 'src/store/hour/reducer'
import minutesReducer from 'src/store/minutes/reducer'

const reducers = combineReducers({
  yearReducer,
  monthReducer,
  dayReducer,
  hourReducer,
  minutesReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
