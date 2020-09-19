// Add your functions here
const map = function(srArr, srFunction){
    let myArr= srArr.map(srFunction);
    return myArr;
}

const reduce= function (srArr, srFunction, stPoint=0){

    if (typeof srArr.reduce(srFunction,stPoint)==='number'&& stPoint>0){
        return srArr.reduce(srFunction,stPoint);
    }
    else{
        return srArr.reduce(srFunction);
    }
}
