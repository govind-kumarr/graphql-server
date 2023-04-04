/**
 * 
let timeInMs = date.getTime();
console.log(timeInMs);
*/

function getDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const [day, month, year] = date.split("-").map(Number);
  date = new Date(`${year}-${month}-${day}`);
  console.log(date.getDay());
  return days[date.getDay()];
}

function getDiff(date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let diffInMs = Math.abs(date1.getTime() - date2.getTime());
  let day = 24 * 60 * 60 * 1000;
  return Math.floor(diffInMs / day);
}

console.log(getDiff("2023-4-4", "2023-5-24"));
console.log(getDate("23-04-2023"));
