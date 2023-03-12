

 /*

 GET INFORMATION FOR TIME

 */
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
 /*

 UPDATE TIME TEXT

 */
const digit1 = document.getElementsByClassName("digit1")[0];
const digit2 = document.getElementsByClassName("digit2")[0];


digit1.innerHTML =  '<span class="date-time">' + newdate + '</span>';
digit2.innerHTML =  '<span class="date-time">' + hr + ":" + min + '</span>';
console.log(digit1.style);
digit1.style.color = "red";
digit2.style.color = "blue";

 /*

 CREATE MODAL FOR ALARM===

 */

 // Get the modal
var modal_alarm = document.getElementById("alarm-modal");

// Get the button that opens the modal
var btn_alarm = document.getElementById("alarmbtn");

// Get the <span> element that closes the modal
var span_alarm = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn_alarm.onclick = function() {
  modal_alarm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_alarm.onclick = function() {
  modal_alarm.style.display = "none";
}


 /*

 ADD ALARM IN ALARM MODAL 

 */

const alarmForm = document.querySelector('#alarm-form');
alarmForm.addEventListener('submit', setAlarm);

function setAlarm(e) {
  e.preventDefault();
  const alarmTime = document.querySelector('#alarm-time').value;
  const reminderMessage = document.querySelector('#reminder-message').value;
  const now = new Date();
  const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmTime.split(':')[0], alarmTime.split(':')[1]);
  const timeToAlarm = alarmDate - now;
  if (timeToAlarm < 0) {
    alarmDate.setDate(alarmDate.getDate() + 1);
    timeToAlarm = alarmDate - now;
  }
  setTimeout(() => {
    alert(reminderMessage);
  }, timeToAlarm);
}



 /*

 CREATE MODAL FOR SETTINGS=========

 */


 var modal_settings = document.getElementById("settings-modal");
 var btn_settings = document.getElementById("settingsbtn");
 var span_settings = document.getElementsByClassName("close")[0];
 btn_settings.onclick = function() {
   modal_settings.style.display = "block";
 }
 span_settings.onclick = function() {
   modal_settings.style.display = "none";
 }

 /*

 add color picker

 */

const timeColorInput = document.getElementById("time-color");
const saveSettingsBtn = document.getElementById("save-settings-btn");

// add event listener to the save settings button
saveSettingsBtn.addEventListener("click", () => {
  // get the selected time color
  const selectedColor = timeColorInput.value;
  
  // set the time text color to the selected color
  const timeText = document.querySelector(".digit2 span");
  timeText.style.color = selectedColor;
  
  // close the settings modal
  const settingsModal = document.getElementById("settings-modal");
  settingsModal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal_alarm) {
    modal_alarm.style.display = "none";
  } else if (event.target == modal_settings) {
    modal_settings.style.display = "none";
  }
};

//=================================================================================================================
//=================================================================================================================
//Draw
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Set the canvas dimensions when the page loads
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
context.lineWidth=10;

// Initialize variables to track the mouse state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function startDrawing(event) {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

function stopDrawing() {
    isDrawing = false;
}

function draw(event) {
    if (!isDrawing) return;
    const [currentX, currentY] = [event.offsetX, event.offsetY];

    // Calculate control points for Bezier curve
    const x1 = lastX + (currentX - lastX) / 3;
    const y1 = lastY + (currentY - lastY) / 3;
    const x2 = currentX - (currentX - lastX) / 3;
    const y2 = currentY - (currentY - lastY) / 3;

    // Draw the Bezier curve
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.bezierCurveTo(x1, y1, x2, y2, currentX, currentY);
    context.stroke();

    // Update lastX and lastY
    [lastX, lastY] = [currentX, currentY];
}

function clearCanvas() {
    // Clear the canvas using clearRect
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Add event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', stopDrawing);
document.querySelector('button').addEventListener('click', clearCanvas);