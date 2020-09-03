// Add your functions here

function map(arr, func){
    let newArr = []
    arr.forEach(element => {
        newArr.push(func(element))
    });
    return newArr
}

function reduce(src, fnct, start){
    let arr = (!!start) ? start : src[0];
    let i = (!!start) ? 0 : 1 

    for (; i < src.length; i++){
        arr = fnct(src[i], arr)
    }
    return arr;
}
