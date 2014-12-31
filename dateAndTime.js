//dateAndTime.js
//var dDate = new Date();
var futureDate = new Date();
var today = new Date();
futureDate.setFullYear(2015, 0, 1);
var diff = futureDate.getTime() - today.getTime();
diff = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("box2").innerHTML = diff;
 //why the ***k...?!