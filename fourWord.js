/**
 * Created by ijemofili on 16/12/15.
 */

    var aArray, rnd1, rnd2, rnd3, rnd4, fourWord;
        aArray1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
        aArray2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        arrayVowels = ['A', 'E', 'I', 'O', 'U'];
        //aArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        //aArray = ['®', 'B', 'C', 'D'];
<<<<<<< Updated upstream
        rnd1 = Math.floor(Math.random()*5);
        rnd2 = Math.floor(Math.random()*3);
        rnd3 = Math.ceil(Math.random()*2);
        rnd4 = Math.floor(Math.random()*2);

=======
        rnd1 = Math.floor(Math.random()*4);
        rnd2 = Math.ceil(Math.random()*rnd1);
        rnd3 = Math.ceil(Math.random()*rnd2);
        rnd4 = Math.floor(Math.random()*3);
        if(rnd1 === rnd2){
            rnd2 = Math.ceil(Math.random()*5);
        }
>>>>>>> Stashed changes
fourWord = aArray[rnd2] + aArray[rnd3] + aArray[rnd4] + aArray[rnd4];

    //document.getElementById('box').innerHTML = word;
    // add the capability for the algo to generate smart 4letter terms
//put constraints as where the first vowels sit in the array
console.log(fourWord);