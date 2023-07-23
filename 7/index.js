// filter
const filter=(arr,func)=>{
    const newArr=[];
    for(let item of arr){
        if (func(item)) newArr.push (item);
    }
    return newArr;
}

// check
const arr=[1,2,3,4,5,6];
console.log( filter(arr,(n)=>(n>3)));

// forEach

const forEach=(arr,func)=>{
    for (let i=0; i<arr.length;i++){
        func(arr[i],i,arr);
    }
}
// check
forEach(arr,(a)=> (console.log(a*2)));

// map
const map=(arr,func)=>{
    const newArr=[];
    for (let i=0; i<arr.length;i++){
        newArr[i]=func(arr[i],i,arr);
    }
    return newArr;
}
// check
console.log(map(arr,(m)=>m*3));