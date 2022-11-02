// js file
/* Declare DOM Variables */

/* Input Values */
const inputArea = document.querySelector('.insert-form');
const fieldInputValue = inputArea.querySelector('#field-input');
const timeInputValue = inputArea.querySelector('#time-input');

/* Output Values */
const resultArea = document.querySelector('.result-sec');
const fieldOutputValue = resultArea.querySelector('#field-output');
const timeOutputValue = resultArea.querySelector('#time-output');

/* buttons */
const calculateBtn = document.querySelector('.btn-calc');
const openModalBtn = document.querySelector('.btn-go');
const closeModalBtn = document.querySelector('.btn-close');
const shareBtn = document.querySelector('.btn-share');

/* Modal */
const modal = document.querySelector('.modal-screen');

/* RegExp */
const fieldRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
const timeRegExp = /^([1-9]|[01][0-9]|2[0-3])$/;

/* Realtime Validation Check - Input Color Warning */
// 사용자가 input에 입력사항을 적을 때 정규표현식을 위반하는지 체크하여
// 위반시 border를 빨간색으로 표시하여 입력사항에 주의를 요할 것을 사용자에게 알림
fieldInputValue.addEventListener('keyup', () => {
  const result = fieldValidationHandler(fieldInputValue.value);
  errorStylingHandler(fieldInputValue, result);
});

timeInputValue.addEventListener('keyup', () => {
  const result = timeValidationHandler(timeInputValue.value);
  errorStylingHandler(timeInputValue, result);
});

/* Functions */
function fieldValidationHandler(fieldInput) {
  const fieldRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  const fieldValidTestResult = fieldRegExp.test(fieldInput);

  return fieldValidTestResult;
}

function timeValidationHandler(timeInput) {
  const timeRegExp = /^([1-9]|[01][0-9]|2[0-3])$/;
  const timeValidTestResult = timeRegExp.test(timeInput);

  return timeValidTestResult;
}

function errorStylingHandler(inputNode, validResult) {
  if (validResult) {
    inputNode.style.border = 'none';
  } else {
    inputNode.style.border = '4px solid rgb(255, 73, 73)';
  }
}

function validationAlert(fieldValidResult, timeValidResult) {
  let validCertification = false;

  if (!fieldValidResult && !timeValidResult) {
    alert('입력 사항을 적어 주세요.');
    errorStylingHandler(fieldInputValue, fieldValidResult);
    errorStylingHandler(timeInputValue, timeValidResult);
  } else if (!fieldValidResult) {
    alert('원하시는 전문 분야를 확인하여 주세요.');
    errorStylingHandler(fieldInputValue, fieldValidResult);
  } else if (!timeValidResult) {
    alert('하루에 훈련하실 시간을 확인하여 주세요.');
    errorStylingHandler(timeInputValue, timeValidResult);
  } else {
    validCertification = true;
  }

  return validCertification;
}

function calculateValues(e) {
  e.preventDefault();

  const fieldValidResult = fieldValidationHandler(fieldInputValue.value);
  const timeValidResult = timeValidationHandler(timeInputValue.value);

  const validationTestResult = validationAlert(
    fieldValidResult,
    timeValidResult
  );

  if (validationTestResult) {
    let trainingTimePerDay = parseInt(timeInputValue.value);

    timeOutputValue.textContent = Math.ceil(10000 / trainingTimePerDay);
    fieldOutputValue.textContent = fieldInputValue.value;

    resultArea.style.display = 'block';
  }
}

function openModal() {
  modal.classList.add('open-modal');
}

function closeModal() {
  modal.classList.remove('open-modal');
  window.open(
    'https://www.inflearn.com/course/1%EB%A7%8C%EC%8B%9C%EA%B0%84-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%9C%EC%9E%91',
    '_blank'
  );
}

window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('open-modal') : false;
});

function shareResult() {
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다');
  });
}

calculateBtn.addEventListener('click', (e) => calculateValues(e));
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
shareBtn.addEventListener('click', shareResult);
