import { Modal } from './modal.js';

function notANumber(value) {
  // isNaN = is not a number? 
  return isNaN(value) || value =="";
};

function calculateIMC(weight, height) {
  return (weight / ((height / 100 ) ** 2)).toFixed(2);
};
                                      
function displayResultMessage(result) {
  const message = `seu IMC é de  ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

export {
  notANumber,
  calculateIMC,
  displayResultMessage
};