function basicOp(operator,num1, num2){
    let sum;
    if (operator==='+'){
        sum=num1+num2;
    }
    else if (operator==='-'){
        sum=num1-num2;
    }
    else  if (operator==='*'){
        sum=num1*num2;
    }
    else  if (operator==='/'){
        sum=num1/num2;
    }
    else{
        return 'not legal';
    }
    return sum;
}
console.log(basicOp('/',45,7));