import styles from './index.module.scss'
import Year from './year'
import Month from './month'
import Day from './day'
import image from 'src/assets/icon.png'
import {Link} from 'react-router-dom'

export default function Navbar () {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" className={styles.iconContainer}>
          <img src={image} className={styles.icon} alt="App Icon" />
          <p className={styles.text}>Calendar</p>
        </Link>
      </div>
      <div className={styles.center}>
        <Year />
        <Month />
        <Day />
      </div>
      <div className="col-span-2">right</div>
    </div>
  )
}