// Add your functions here
function map(sourceArray,myfunction){
  return sourceArray.map(a=>myfunction(a));
}
function reduce(sourceArray,myfunction,starting){
  if(starting){return sourceArray.reduce(myfunction,starting)}
  else if(!starting){return sourceArray.reduce(myfunction)}
}