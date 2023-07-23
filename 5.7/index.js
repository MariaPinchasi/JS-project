function shortestWords(str){
    // let j=0;
    // for (let i=0; i<str.length;i++){
    //     if (str[i]===" "){
    //         arr.push(str.slice(j,i));
    //         j=i+1;
    //     }
    // }
    // arr.push(str.slice(j));
// using split property instead.

    const arr=str.split(" ");
  
    // let minLength=arr[0].length;
    // for (let word of arr){
    //     if (word.length<=minLength){
    //         minLength=word.length;
    //     }
    // }

    // using reduce instead
    // const minLength= arr.reduce((min,word)=> {
    //     if (word.length<=min) return (word.length); 
    //     return min;
    // },arr[0].length) 

    // using Math.min
    const minLength= arr.reduce((min,word)=> (Math.min( word.length, min)) ,arr[0].length);

    return minLength;
}
console.log(shortestWords('my name iss a'));