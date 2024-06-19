import {validatorList} from  './validators.js';
import * as params from  './validationParameters.js';

function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const resultPlaceholder = document.getElementById('resultPlaceholder');

  validateButton.addEventListener('click', () => {

    let validationError;
    validatorList.forEach(validator => {
     const validationResult = validator(input.value);
     if(!validationResult){
      validationError = true;
     } 
    });

    validationError ? resultPlaceholder.innerHTML = params.RESPONSE_INVALID : resultPlaceholder.innerHTML = params.RESPONSE_VALID

  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
