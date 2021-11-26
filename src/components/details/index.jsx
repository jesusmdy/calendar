import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentMonth} from 'src/store/month/reducer'
import {selectCurrentDay} from 'src/store/day/reducer'
import {connect} from 'react-redux'
import Title from './title'
import Clock from './clock'
import Month from 'src/components/month'
const mapStateToProps = state => {
  return {
    year: selectCurrentYear(state),
    month: selectCurrentMonth(state),
    day: selectCurrentDay(state)
  }
}
function Details ({year, month, day}) {
  return (
    <>
      <Title />
      <Clock />
      <Month
        year={year}
        month={month}
        day={day}
      />
    </>
  )
}

export default connect(mapStateToProps, {})(Details)
