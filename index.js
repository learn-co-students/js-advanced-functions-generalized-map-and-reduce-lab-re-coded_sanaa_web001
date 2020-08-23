function map(x,y){
  let r=[];
  for (let i =0; i<x.length; i++){
   r.push(y(x[i]));
}
return r;
}

function reduce(x,y,c=0){
  let r=c;
  for (let i =0; i<x.length; i++){
    if (typeof(x[i])==='string' || typeof(x[i])==='boolean'){
   b=1;
   r=y(x[i],b);
    }
     else if ((x[i])===null || typeof(x[i])==='boolean'){
   b=0;
   r=y(x[i],b);
    }
    else {
    var b=0;
   r=y(x[i],b)+r;
}
}
return r;

}
