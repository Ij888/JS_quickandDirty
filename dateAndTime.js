//dateAndTime.js
//var dDate = new Date();

/*Date till some time in the future
var futureDate = new Date();
var today = new Date();
futureDate.setFullYear(2015, 0, 1);
var diff = futureDate.getTime() - today.getTime();
diff = Math.floor(diff / (1000 * 60 * 60 * 24));
*/

//evaluate browser render time
var start = new Date();
var now = start.getTime();

var end = new date();
var diff = (end.getTime() - now)/1000;
var renderTime = diff.toPrecision(5);

document.getElementById("box2").innerHTML = renderTime;
 //why the ***k...?!