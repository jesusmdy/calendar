import {
  Routes,
  Route
} from 'react-router-dom'
import Sidebar from 'src/components/sidebar'
import Details from 'src/components/details'
import Index from 'src/routes/index'
import Year from 'src/routes/year'
import Day from 'src/routes/day'
import styles from './index.module.scss'
import DaySelector from 'src/components/navbar/day'
import MonthSelector from 'src/components/navbar/month'
import YearSelector from 'src/components/navbar/year'

export default function Main () {
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.center}>
        <div className="grid grid-cols-9">
          <YearSelector />
          <MonthSelector />
          <DaySelector />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/day" element={<Day />} />
          <Route path="/year" element={<Year />} />
        </Routes>
      </div>
      <div className={styles.details}>
        <Details />
      </div>
    </div>
  )
}
