function map(src,fun) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    r.push( fun(src[i]))
  }
  return r;
}
function reduce(src,fun,op){
  let r = (op) ? op : src[0]
  let i = (op) ? 0 : 1

for (;i < src.length; i++) {
    r = fun(src[i], r)
  }
  return r;
}
