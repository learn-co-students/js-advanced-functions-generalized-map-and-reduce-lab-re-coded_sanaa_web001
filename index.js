// Add your functions here
function map(arr,fun){
    const newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(fun(arr[i]))
    }
    return newArr
}

function reduce(arr, func, start){
    let a= (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1 

    for (; i < arr.length; i++){
        a = func(arr[i], a)
    }
    return a;
} 