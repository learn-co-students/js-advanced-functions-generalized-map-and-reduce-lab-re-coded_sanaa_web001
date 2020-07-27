function map(Array  , fun) {
   return Array.map(x => fun(x));
}

function reduce(saleem ,func  ,startingPoint ) {
  if (startingPoint > 0 ){
    return startingPoint + saleem.reduce(func) ;
  }else   {
    return saleem.reduce(func);
  }

}
