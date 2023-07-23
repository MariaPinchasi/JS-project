function fibonacci (index, startingPoint){
    const arr=[startingPoint,1];
    for (let i=2; i<index; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr.slice(0,index);
}
console.log(fibonacci(8,0));