// var myfunc = function(a, x){
//    return(a*x);
// };

// var x = myfunc(2, 3);
// var y = myfunc;
// alert(x);
// alert(y(2,3));

function booyah1(){
   alert("BOOYAH1");
}

function booyah2(){
   alert("BOOYAH2");
}

var btn = document.getElementById("click").onclick 
= setTimeout(booyah1, 2000);

var btn2 = document.getElementById("click").onclick 
= setTimeout(booyah1, 2000);