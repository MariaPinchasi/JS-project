function toCamelCase(str){
    const arrOfStr=[...str];
    for (let i=0; i<arrOfStr.length; i++){
        if (arrOfStr[i]==='-'|| arrOfStr[i]==='_'){
            arrOfStr[i+1]=arrOfStr[i+1].toUpperCase();
            arrOfStr.splice(i,1);
        }
    }
    return arrOfStr.join('');
}
console.log(toCamelCase('the-stealth-warrior'));