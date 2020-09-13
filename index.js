const sourceArray = [1, 2, 3, -9];

function map(sourceArray,fun) {
  let arr=[];
  for (var i = 0; i < sourceArray.length; i++) {
    let element = sourceArray[i];
    arr.push(fun(element));
  }
  return arr;
}

console.log(sourceArray,function(element) {
      return -1 * element;
  });

  function reduce(sourceArray, cb, initial){
    let arr,i;
    if (initial) {
      arr= initial;
      i=0;
    } else {
      arr =  sourceArray[0];
      i=1;
    }

    for (; i < sourceArray.length; i++) {
      arr = cb(sourceArray[i], arr)
    }

    return arr;
  }
