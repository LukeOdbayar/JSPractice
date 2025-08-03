console.log("welcome t6 ");
let date = new Date();

function check() {
  const inp = document.getElementById("inputYear").value.trim();
  date.setFullYear(inp);
  date.setMonth(1);
  date.setDate(29);
  if (date.getDate() === 29) {
    document.getElementById("result").innerHTML = "This is a leap year";
  } else {
    document.getElementById("result").innerHTML = "This is not a leap year";
  }
}
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
