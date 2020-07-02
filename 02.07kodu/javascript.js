console.log("javascripti fail ühendatud");

var year = 2020;
var month = 8;
var day = 20;
var hour = 12;
var minute = 00;
var second = 00;

var timeRemaining = document.getElementById("timeRemaining");

var date = new Date();
var yearsRemaining = year - date.getFullYear();
var secondsRemaining = second - date.getSeconds();
var minutesRemaining = minute - date.getMinutes();
if (secondsRemaining < 0) {
    secondsRemaining = secondsRemaining + 60;
    minutesRemaining - 1;
}  

timeRemaining.innerHTML = yearsRemaining + secondsRemaining;