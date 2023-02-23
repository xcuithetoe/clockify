 // get current time
 var dateInfo = new Date();
 let hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
   min = dateInfo.getMinutes(),
   sec = dateInfo.getSeconds(),
   milsec = dateInfo.getMilliseconds();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if (min < 10) {
  min = "0" + min;
}
console.log(min);

if (hr < 10) {
  hr = "0" + hr;
}
let day = weekday[dateInfo.getDay()];
var month = dateInfo.getMonth() + 1; //months from 1-12
var date = dateInfo.getDate();

newdate = day + ", " + month + "/" + date;

document.getElementsByClassName("clock")[0].innerHTML = newdate +"\n" + hr + ":" + min;


/*
document.getElementById("dateTxt").innerHTML = "Today is " + ", " + dateInfo.getMonth() + " " + dateInfo.getDate();
*/

 