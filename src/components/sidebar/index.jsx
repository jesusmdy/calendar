import {Link} from 'react-router-dom'
import styles from './index.module.scss'
import {useLocation} from 'react-router-dom'
import Nav from './nav'

export default function Sidebar () {
  const location = useLocation()
  const {pathname} = location
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <Nav />

        <Link to="/" className={pathname === '/' ? styles.activeLink : styles.link}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Overview</span>
        </Link>

        <Link to="/day" className={pathname === '/day' ? styles.activeLink : styles.link}>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7 10h5v5H7m12 4H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
            ></path>
          </svg>
          <span>Day</span>
        </Link>

        <Link to="/week" className={pathname === '/week' ? styles.activeLink : styles.link}>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6 1h2v2h8V1h2v2h1a2 2 0 012 2v14c0 1.11-.89 2-2 2H5a2 2 0 01-2-2V5c0-1.11.89-2 2-2h1V1M5 8v11h14V8H5m2 2h10v2H7v-2z"
            ></path>
          </svg>
          <span>Week</span>
        </Link>

        <Link to="/month" className={pathname === '/month' ? styles.activeLink : styles.link}>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9 10v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m2-7a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V1h2v2h8V1h2v2h1m0 16V8H5v11h14M9 14v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2z"
            ></path>
          </svg>
          <span>Month</span>
        </Link>

        <Link to="/year" className={pathname === '/year' ? styles.activeLink : styles.link}>
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1m-1 11h-5v5h5v-5z"
            ></path>
          </svg>
          <span>Year</span>
        </Link>
      </div>
    </div>
  )
}
