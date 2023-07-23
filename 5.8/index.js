function shortestWords(str){
    const arr=str.split(" ");
    // let maxLength=arr[0].length;
    // const arrOfMax=[];
    // for (let word of arr){
    //     if (word.length>=maxLength){
    //         maxLength=word.length;
    //     }
    // }
    const maxLength=arr.reduce ((max,word)=> (Math.max(max,word.length)), arr[0].length);
    // for (let word of arr){
    //     if (word.length===maxLength){
    //         arrOfMax.push(word);
    //     }
    // }
    const arrOfMax=arr.filter (word=> word.length===maxLength);

    return arrOfMax;
}
console.log(shortestWords('my is maria pinch'));