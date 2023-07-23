const Tribonacci =(signature,n)=>{
    for (i=3;i<n; i++){
        signature.push(signature[i-1]+signature[i-2]+signature[i-3]);
    }
    return signature.slice(0,n);
}

console.log(Tribonacci([0,0,1],8));
