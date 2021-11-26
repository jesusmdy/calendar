import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentMonth} from 'src/store/month/reducer'
import {selectCurrentDay} from 'src/store/day/reducer'
import {months} from 'src/utils/getMonth'
import Month from 'src/components/month'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    year: selectCurrentYear(state),
    month: selectCurrentMonth(state),
    day: selectCurrentDay(state)
  }
}

function Year ({year, month, day}) {
  return (
    <div className="grid md:grid-cols-2 overflow-auto">
      {
        months.map((monthName, index) => (
          <Month
            key={index}
            year={year}
            currentMonth={month}
            month={index}
            day={day}
          />
        ))
      }
    </div>
  )
}

export default connect(mapStateToProps, {})(Year)

