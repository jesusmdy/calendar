import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentMonth} from 'src/store/month/reducer'
import {selectCurrentDay} from 'src/store/day/reducer'
import {selectCurrentHour} from 'src/store/hour/reducer'
import {connect} from 'react-redux'
import getDayHours from 'src/utils/getDayHours'
import Title from 'src/components/day/title'
import Hour from 'src/components/day/hour'
import styles from './day.module.scss'
import {useState} from 'react'

const mapStateToProps = state => {
  return {
    year: selectCurrentYear(state),
    month: selectCurrentMonth(state),
    day: selectCurrentDay(state),
    selectedHour: selectCurrentHour(state)
  }
}

function Day ({month, year, day, selectedHour}) {
  const [dayHours, setDayHours] = useState(getDayHours())
  return (
    <>
      <Title
        getDayHours={getDayHours}
        setDayHours={setDayHours}
        year={year}
        month={month}
        day={day}
      />
      <div className={styles.days}>
        {dayHours.map(hour => <Hour key={`hour-${hour.hour}`} selectedHour={selectedHour} hour={hour} />)}
      </div>
    </>
  )
}

export default connect(mapStateToProps, {})(Day)
