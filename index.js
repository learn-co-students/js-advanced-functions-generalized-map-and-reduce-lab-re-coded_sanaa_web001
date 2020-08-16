// Add your functions here
function map(sourceArray, callback) {
    let result = [];
    for (const i in sourceArray) {
        result.push(callback(sourceArray[i]));
    }

    return result;
}

function reduce(sourceArray, callback, start) {
    let aggregate;
    let index = 0;
    if (start) {
        aggregate = start
    } else {
        aggregate = parseInt(sourceArray[0]);
        index = 1;
    }
    for (; index < sourceArray.length; index++) {
        aggregate = callback(aggregate, sourceArray[index]);
    }

    return aggregate;
}

console.log(
    reduce([1, 2, 3], function(a, b) {
        return a + b;
    }, 4)
);
