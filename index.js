  
// Add your functions here
function map(src, callBack) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(callBack(theElement))
  }
  return r;
}

function reduce(src, callBack, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = callBack(src[i], r)
  }
  return r;
}