function nameInitials(str){
    return str.split(' ').map(word=> word[0].toUpperCase()).join('.');
    // let first=str[0],second;
    // for (i=0; i<str.length; i++){
    //     if (str[i]===" "){
    //         second=str[i+1];
    //         break;
    //     }
    // }
    // return `${first.toUpperCase()}.${second.toUpperCase()}`;
}
console.log(nameInitials('maria pinchasi'));