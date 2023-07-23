function findUniq(arr){
    let uniq;
    let [num1, num2,num3]= arr;
    if (num1===num2 || num1===num3){
        for(let i of arr){
            if (i!==num1){
                uniq=i;
            }
        }
        return uniq;
    }
    else {
        return num1;
    }
}

console.log(findUniq([1,1,2, 1, 1, 1, 1]));
console.log(findUniq([0, 0, 0, 0, 0.3]));
