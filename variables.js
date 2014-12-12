/**
 * Created by Ijem on 12/12/2014.
 */
function test(){
    var message = "hi"; //local variable
}

test();
alert(message); //error

/*****************/

function test(){
    message = "hi"; //global variable
}

test();
alert(message); //

/*
by removing the var operator from the first example, the message variable becomes global.
See pg 30, Pro JS for WD.
 */
