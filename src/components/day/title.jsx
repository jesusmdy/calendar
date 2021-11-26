import getDayName from 'src/utils/getDayName'
import getCurrentHour from 'src/utils/getCurrentHour'
import styles from './title.module.scss'
import {useState} from 'react'

function AscendingIcon () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
    </svg>
  )
}

function DescendingIcon () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
    </svg>
  )
}

export default function Title ({year, month, day, dayHours, setDayHours, getDayHours}) {
  const [isReverse, setIsReverse] = useState(false)
  const currentHour = getCurrentHour()
  const goNow = () => {
    const el = document.querySelector(`#hour-${currentHour.hour}`)
    if (el) el.scrollIntoView()
  }
  const handleSetReverse = () => {
    if (isReverse) {
      setIsReverse(false)
      setDayHours(getDayHours())
    } else {
      setIsReverse(true)
      setDayHours(getDayHours().reverse())
    }
  }

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.dayBadge}>
          <span className={styles.dayName}>{getDayName({year, month, day}, true)}</span>
          <span className={styles.dayNumber}>{day}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={handleSetReverse} className={`${styles.action} ${isReverse ? styles.active : null}`}>
            {isReverse ? <AscendingIcon /> : <DescendingIcon />}
          </button>
          <button onClick={goNow} className={styles.action}>Now</button>
        </div>
      </div>
    </>
  )
}
