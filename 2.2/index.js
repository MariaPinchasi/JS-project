function binaryToInt(arr){
    let total=0;
    const arrRev=arr.reverse();
    for(let i=0; i<arrRev.length; i++){
        if (arrRev[i]===1){
            total=total+2**i;
        }
    }
    return total;
}
const arr=[1,1,0 ,1,1];
console.log(binaryToInt(arr));