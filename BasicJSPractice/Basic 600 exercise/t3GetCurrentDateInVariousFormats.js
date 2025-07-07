// task 3
let todayNow = new Date();

let year = todayNow.getFullYear();
let date = todayNow.getDate();
let month = todayNow.getMonth() + 1;
date = date < 10 ? "0" + date : date;
month = month < 10 ? "0" + month : month;
console.log(`mm-dd-yyyy:${month}-${date}-${year}`);
console.log(`mm/dd/yyyy:${month}/${date}/${year}`);
console.log(`dd-mm-yyyy:${date}-${month}-${year}`);
console.log(`dd/mm/yyyy:${date}/${month}/${year}`);
