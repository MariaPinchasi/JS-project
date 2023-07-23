const sortTwoStrings=(s1,s2)=>{
    return (s1+s2).split('').reduce((str,char)=>{return str.includes(char)? str: str+char}).split('').sort().join('');
}
console.log(sortTwoStrings("abcdefghijklimnopqrstuvwxyz","abcdefghijklimnopqrstuvwxyz"));

