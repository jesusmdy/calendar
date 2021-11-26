const date = new Date()

export default function getCurrentHour () {
  return {
    hour: date.getHours(),
    minutes: date.getMinutes()
  }
}
