import {ChevronLeftIcon as SmallChevronLeftIcon, ChevronRightIcon as SmallChevronRightIcon} from '@heroicons/react/solid'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'
import {connect} from 'react-redux'

import {selectCurrentHour} from 'src/store/hour/reducer'
import {previousHour, nextHour, setHour} from 'src/store/hour/action'

import {selectCurrentMinutes} from 'src/store/minutes/reducer'
import {previousMinute, nextMinute, setMinutes} from 'src/store/minutes/action'

import styles from './clock.module.scss'

const mapStateToProps = state => {
  return {
    hour: selectCurrentHour(state),
    minutes: selectCurrentMinutes(state)
  }
}

function SmallCircleIcon () {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 8a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"
      ></path>
    </svg>
  );
}

function Clock ({
    hour,
    minutes,
    previousMinute,
    nextMinute,
    previousHour,
    nextHour,
    setHour,
    setMinutes
  }) {
  const hourText = hour >= 10 ? hour : `0${hour}`
  const minutesText = minutes >= 10 ? minutes : `0${minutes}`
  const handlePreviousMinute = () => {
    if (minutes === 0) previousHour()
    previousMinute()
  }
  const handleNextMinute = () => {
    if (minutes === 59) nextHour()
    nextMinute()
  }
  const setNow = () => {
    const now = new Date()
    setHour(now.getHours())
    setMinutes(now.getMinutes())
  }
  return (
    <div className={styles.clockModule}>
      <div className={styles.title}>
        <p>Clock</p>
        <div className={styles.rightControls}>
          <button onClick={() => setNow()} className={styles.nowButton}>
            <SmallCircleIcon />
          </button>
          <div className={styles.hourControls}>
            <button onClick={() => previousHour()} className={styles.hourControl}>
              <SmallChevronLeftIcon className="h-5 w-5" />
            </button>
            <button onClick={() => nextHour()} className={styles.hourControl}>
              <SmallChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.clock}>
        <div className={styles.selector}>
          <button className={styles.button} onClick={handlePreviousMinute}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </div>
        <div className={styles.hour}>
          {hourText}:{minutesText}<span className={styles.type}>{hour >= 13 ? 'PM' : 'AM'}</span>
        </div>
        <div className={styles.selector}>
          <button className={styles.button} onClick={handleNextMinute}>
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className={styles.jumps}>
        <button onClick={() => setMinutes(0)} className={`${styles.jump} ${minutes < 15 ? styles.activeJump : null}`}>{hourText}:00</button>
        <button onClick={() => setMinutes(15)} className={`${styles.jump} ${minutes >= 15 && minutes < 30 ? styles.activeJump : null}`}>{hourText}:15</button>
        <button onClick={() => setMinutes(30)} className={`${styles.jump} ${minutes >= 30 && minutes < 45 ? styles.activeJump : null}`}>{hourText}:30</button>
        <button onClick={() => setMinutes(45)} className={`${styles.jump} ${minutes >= 45 ? styles.activeJump : null}`}>{hourText}:45</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, {previousHour, nextHour, previousMinute, nextMinute, setHour, setMinutes})(Clock)
