//JS 
 var items = ["k177", "deeke", "PaulWall", "000", "1.5Le"];
        var rnd1 = items[Math.floor(Math.random()*3)];
        var rnd2 = items[Math.floor(Math.random()*5)];
            //console.log(rnd1)
        document.getElementById("pane1").innerHTML = rnd1;
        document.getElementById("pane2").innerHTML = rnd2;

function rand1(){
 document.getElementById("pane1").innerHTML = rnd1;
}