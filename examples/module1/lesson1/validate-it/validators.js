import * as params from  './validationParameters.js';

function hasValue(value){
  return   value ? true : false;   
}

function isEven(value){
    return value % 2 == 0 ? true : false;
}

function isInteger(value){
    return  Number.isInteger(Number(value)) ? true : false;
}

function hasMinimalValue(value){
    return params.MIN_VALUE <= value ? true : false;
}

function exceedsMaximumValue(value){
    return  params.MAX_VALUE >= value ? true : false;
}


export const validatorList = [
    hasValue,  
    isInteger,
    hasMinimalValue,
    exceedsMaximumValue,
    isEven
]