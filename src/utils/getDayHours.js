export const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

export default function getDayHours () {
  let dayHours = []
  hours.map(hour => {
    return dayHours.push({
      hour: hour,
      text: hour > 9 ? `${hour}:00` : `0${hour}:00`
    })
  })
  return dayHours
}
