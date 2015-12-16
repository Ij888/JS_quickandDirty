/**
 * Created by ijemofili on 16/12/15.
 */

    var aArray, rnd1, rnd2, rnd3, rnd4, fourWord;
        //aArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        aArray = ['®', 'B', 'C', 'D'];
        rnd1 = Math.floor(Math.random()*4);
        rnd2 = Math.floor(Math.random()*3);
        rnd3 = Math.ceil(Math.random()*4);
        rnd4 = Math.floor(Math.random()*3);

//fourWord = aArray[rnd2] + aArray[rnd3] + aArray[rnd4] + aArray[rnd4];
   var treat = aArray[rnd2]
    //document.getElementById('box').innerHTML = word;
console.log(treat);