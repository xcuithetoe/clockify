 // get current time
 var dateInfo = new Date();
 var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
   min = dateInfo.getMinutes(),
   sec = dateInfo.getSeconds(),
   milsec = dateInfo.getMilliseconds();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[dateInfo.getDay()];
var month = dateInfo.getMonth() + 1; //months from 1-12
var date = dateInfo.getDate();

newdate = day + ", " + month + "/" + date;

document.getElementsByClassName("clock")[0].innerHTML = newdate;


/*
document.getElementById("dateTxt").innerHTML = "Today is " + ", " + dateInfo.getMonth() + " " + dateInfo.getDate();
*/

 