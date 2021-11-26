import styles from './index.module.scss'
import {setDay} from 'src/store/day/action'
import {setMonth} from 'src/store/month/action'
import {shortDays} from 'src/utils/getDayName'
import {isSameDay, isSameMonth, getDaysInMonth} from 'date-fns'
import {connect} from 'react-redux'
import getMonthWhiteSpaces from 'src/utils/getMonthWhiteSpaces'
import getMonth from 'src/utils/getMonth'

function Month ({year, month, day, setDay, currentMonth = month, setMonth}) {
  const days = getDaysInMonth(new Date(year, month))

  const whiteSpaces = getMonthWhiteSpaces(year, month, day)

  const sameMonth = dayNumber => {
    return isSameMonth(new Date(year, month, day), new Date(year, currentMonth, day))
  }

  const sameDay = dayNumber => {
    return isSameDay(new Date(year, month, dayNumber), new Date(year, month, day))
  }

  const handleDayClick = day => {
    setDay(day)
    setMonth(month)
  }

  return (
    <div className={`${styles.month} ${sameMonth(currentMonth) ? styles.current : null}`}>
      <p className={styles.title}>{getMonth(month)} {year}</p>
      <ul className={styles.daysName}>
        {shortDays.map((day, index) => <li key={index} className={styles.dayName}>{day}</li>)}
      </ul>
      <div className={styles.days}>
        {whiteSpaces.map(whiteSpace => (<button key={whiteSpace} className={`${styles.day} ${styles.disabled}`}>{whiteSpace}</button>))}
        {
          Array(days)
          .fill(null)
          .map((_, index) => {
            const dayNumber = index +1
            return (
              <button
                key={index}
                onClick={() => handleDayClick(dayNumber)}
                className={`
                  ${styles.day}
                  ${sameMonth(dayNumber) && sameDay(dayNumber) ? styles.active : null}
                  ${isSameDay(new Date(year, month, dayNumber), new Date()) ? styles.currentDay : null}
                `}
                >
                {dayNumber > 0 ? dayNumber : ''}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default connect(null, {setDay, setMonth})(Month)
