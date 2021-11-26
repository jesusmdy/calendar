const previousYear = (currentYear) => {
  return {
    type: "@year:previous",
    payload: currentYear-1
  }
}

const nextYear = (currentYear) => {
  return {
    type: "@year:next",
    payload: currentYear+1
  }
}

export {previousYear, nextYear}
