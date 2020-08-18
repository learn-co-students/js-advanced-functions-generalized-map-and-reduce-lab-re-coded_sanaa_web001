// Add your functions here
function map(sourceArray,fun){
return sourceArray.map(fun);
}
function reduce(sourceArray,fun, startingPoint=0){
  if(startingPoint > 0){
   return sourceArray.reduce(fun,startingPoint);}
  else{
   return sourceArray.reduce(fun);
  }
}
