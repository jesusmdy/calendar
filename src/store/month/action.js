const previousMonth = (currentMonth) => {
  return {
    type: '@month:previous',
    payload: currentMonth === 0 ? 11 : currentMonth-1
  }
}

const nextMonth = (currentMonth) => {
  return {
    type: '@month:next',
    payload: currentMonth === 11 ? 0 : currentMonth+1
  }
}

const setMonth = (month) => {
  return {
    type: '@month:set',
    payload: month
  }
}

export {previousMonth, nextMonth, setMonth}
