import {useEffect, useState} from 'react'
import {getDay} from 'date-fns'
import {days} from 'src/utils/getDayName'

export default function useDayName ({year, month, day}) {
  const [dayName, setDayName] = useState(null)
  useEffect(() => {
    setDayName(days[getDay(new Date(year, month, day))])
  }, [])
  return dayName
}