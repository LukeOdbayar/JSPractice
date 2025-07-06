const todayNow = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Today is : ", days[todayNow.getDay()]);

let hours = todayNow.getHours();
const minutes = todayNow.getMinutes().toString().padStart(2, "0");
const seconds = todayNow.getSeconds().toString().padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;

console.log("Current time is : ", hours, ampm, " : ", minutes, " : ", seconds);
