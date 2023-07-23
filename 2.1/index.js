function sumTwoLowest(arr){
    let lowest=arr[0], secondLowest=arr[1];
    for (let i=1; i<arr.length; i++){
        if (arr[i]<lowest){
            secondLowest=lowest;
            lowest=arr[i];
        }
        else if (arr[i]<secondLowest){
            secondLowest=arr[i];
        }
    }
    const sum=lowest+secondLowest;
    return sum;
}
const arr=[ 9, 5,2, 42, 77];
console.log(sumTwoLowest(arr));