import styles from './day.module.scss'
import {previousDay, nextDay} from 'src/store/day/action'
import {selectCurrentYear} from 'src/store/year/reducer'
import {selectCurrentMonth} from 'src/store/month/reducer'
import {selectCurrentDay} from 'src/store/day/reducer'
import getDayName from 'src/utils/getDayName'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    year: selectCurrentYear(state),
    month: selectCurrentMonth(state),
    day: selectCurrentDay(state)
  }
}

function Day({day, year, month, previousDay, nextDay}) {
  return (
    <div className={styles.dayContainer}>
      <div className={styles.day}>

        <div className={styles.action}>
          <button
            onClick={() => previousDay()}
            className={styles.button}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className={styles.text}>
          <h3 className={styles.title}>{getDayName({year, month, day})} {day}</h3>
        </div>

        <div className={styles.action}>
          <button
            onClick={() => nextDay()}
            className={styles.button}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default connect(mapStateToProps, {
  nextDay, previousDay
})(Day)

