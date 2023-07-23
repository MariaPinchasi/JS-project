function toWeirdCase(str){
    return str.split(" ").map(word=>word.split('').map((char,i)=>( i%2==0? char.toUpperCase(): char)).join('')).join(' ');
    // const arrOfStr=[...str];
    // for (let i=0; i<arrOfStr.length; i++){
    //     if (i % 2===0){
    //         if (arrOfStr[i]===" "){
    //             arrOfStr.splice(i,0,'');
    //         }
    //         arrOfStr[i]=arrOfStr[i].toUpperCase();
    //     }
    //     else{
    //         arrOfStr[i]=arrOfStr[i].toLowerCase();
    //     }
    // }
    // return arrOfStr.join('');
}
console.log(toWeirdCase('Weird string case'));