// Add your functions here

function map(arr,func){
    const newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }
  return r;
}
