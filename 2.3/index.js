function nextPerfectSqrt(num){
    return Math.sqrt(num)%1===0 ? Math.pow(Math.sqrt(num)+1,2) : -1;
}
console.log(nextPerfectSqrt(625));