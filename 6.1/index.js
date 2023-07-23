function accum (str){
    const arr=[...str];
    const newArr=arr.map((char,i)=>{
        let newStr=char.toUpperCase();
        for (let j=0; j<i; j++){
            newStr+=char.toLowerCase();
        }
        return newStr;
     });
    return newArr.join('-');
}
console.log(accum("RqaEzty"));