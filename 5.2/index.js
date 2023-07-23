function repeatStr(num,str){
    let newStr=str;
    for (let i=1; i<num; i++){
        newStr= newStr + str;
    }
    return newStr;
}
console.log(repeatStr(5,'hello'));