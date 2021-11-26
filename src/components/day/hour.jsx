import {setHour} from 'src/store/hour/action'
import getCurrentHour from 'src/utils/getCurrentHour'
import {connect} from 'react-redux'
import styles from './hour.module.scss'
import {useEffect} from 'react'

function ChevronRight () {
  return (
    <svg title="Current hour" xmlns="http://www.w3.org/2000/svg" className={styles.currentHour} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function RadioCheckedIcon () {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 20a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8m0-18A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2m0 5a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5z"></path>
    </svg>
  )
}

function RadioIcon () {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 20a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8m0-18A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"></path>
    </svg>
  )
}

function Hour (props) {
  const {selectedHour, setHour} = props
  const {hour, text} = props.hour
  const currentHour = getCurrentHour()
  useEffect(() => {
    const currentHourElement = document.querySelector(`#hour-${selectedHour}`)
    currentHourElement.scrollIntoView()
  })
  return (
    <div className={`${styles.hourContainer} ${selectedHour === hour ? styles.current : null}`} id={`hour-${hour}`}>
      <button onClick={() => setHour(hour)} className={styles.icon}>
        {currentHour.hour === hour && <ChevronRight />}
        {selectedHour === hour ? <RadioCheckedIcon /> : <RadioIcon />}
      </button>
      <div className={styles.hour}>{text}</div>
    </div>
  )
}
export default connect(null, {setHour})(Hour)
