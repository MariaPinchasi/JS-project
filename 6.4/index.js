const isIsogram=(str)=>{
    const repeatedChar= str.toLowerCase().split('').find ((char,i)=>{return (i!=str.indexOf(char)&&str.includes(char))});
    return repeatedChar===undefined? true :false;
}
console.log(isIsogram('aabcdrr'));