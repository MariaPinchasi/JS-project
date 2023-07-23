function centuryFromYear(year){
    if ((year/100) % 1==0){
        return Math.floor(year/100);
    }
    else return Math.floor(year/100)+1;
}
console.log(centuryFromYear(2030));