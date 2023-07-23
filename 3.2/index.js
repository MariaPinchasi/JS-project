function numOnBus (arr){
    let total=0;
    for (let tuples of arr){
        total=total+ tuples[0]-tuples[1];
    }
    return total;
}
const arr=[
[5,0],
[6,2],
[0,7]
];
console.log(numOnBus(arr));