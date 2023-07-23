function maskify(str){
    const arr=[...str];
    for(i=0;i<arr.length-4; i++){
        arr[i]='#';
    }
    return arr.join('');
}
console.log(maskify('Nananananananananananananananana Batman!'));