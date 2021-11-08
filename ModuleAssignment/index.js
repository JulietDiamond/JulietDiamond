let max = (a, b, c) =>{
    var temp = 0;
    if(a > b && a > c){
        temp = a;
    }else if(b>a && b>c){
        temp = b;
    }else{
        temp = c;
    }
    return temp;
}


console.log(max(1,9,12));

