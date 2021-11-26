import {previousYear, nextYear} from 'src/store/year/action'
import {selectCurrentYear} from 'src/store/year/reducer'
import {connect} from 'react-redux'
import styles from './year.module.scss'

const mapStateToProps = state => {
  return {
    year: selectCurrentYear(state)
  }
}

function Year ({year, previousYear, nextYear}) {
  return (
    <div className={styles.yearContainer}>
      <div className={styles.year}>
        <div className={styles.action}>
          <button
            onClick={() => previousYear(year)}
            className={styles.button}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{year}</h3>
        </div>
        <div className={styles.action}>
          <button
            onClick={() => nextYear(year)}
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
  nextYear, previousYear
})(Year)
