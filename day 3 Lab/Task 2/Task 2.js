// 1.2. Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,) of the given date.

function getDayFromDate(dateStr) {
  const date = new Date(dateStr);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //   console.log(date);
  console.log(days[date.getDay()]);
}

getDayFromDate("2025-07-08");
