function duplicates(str){
    const charObj= str.toLowerCase().split('').reduce((count,char)=>{
        count [char]= (count[char]||0)+1;
        return count;},{});
    let numOfDuplicates=0;
    for (let char in charObj){
        if(charObj[char]>1) numOfDuplicates++;
    }
    return numOfDuplicates
}
console.log(duplicates('abcde'));