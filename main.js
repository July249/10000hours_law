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
// initial value setting
let fieldValidResult;
let timeValidResult;

// 사용자가 input에 입력사항을 적을 때 정규표현식을 위반하는지 체크하여
// 위반시 border를 빨간색으로 표시하여 입력사항에 주의를 요할 것을 사용자에게 알림
fieldInputValue.addEventListener('keyup', () => {
  fieldValidResult = strRegExp.test(fieldInputValue.value);

  realTimeCheck(fieldInputValue, fieldValidResult);
});

timeInputValue.addEventListener('keyup', () => {
  timeValidResult = numRegExp.test(timeInputValue.value);

  realTimeCheck(timeInputValue, timeValidResult);
});

/* Functions */
function realTimeCheck(inputNode, validResult) {
  if (validResult) {
    inputNode.style.border = 'none';
  } else {
    inputNode.style.border = '4px solid rgb(255, 73, 73)';
  }
}

function validationAlert(field, time) {
  let validTestResult = false;

  fieldValidResult = strRegExp.test(field);
  timeValidResult = numRegExp.test(time);

  if (!fieldValidResult && !timeValidResult) {
    alert('입력 사항을 적어 주세요.');
    realTimeCheck(fieldInputValue, fieldValidResult);
    realTimeCheck(timeInputValue, timeValidResult);
  } else if (!fieldValidResult) {
    alert('원하시는 전문 분야를 입력하여 주세요');
    realTimeCheck(fieldInputValue, fieldValidResult);
  } else if (!timeValidResult) {
    alert('하루에 훈련하실 시간을 입력하여 주세요');
    realTimeCheck(timeInputValue, timeValidResult);
  } else if (time > 24 && timeValidResult) {
    alert('24시간 이내로 작성하여 주세요!');
    realTimeCheck(timeInputValue, timeValidResult);
  } else {
    validTestResult = true;
  }

  return validTestResult;
}

function calculateValues(e) {
  e.preventDefault();

  const fieldInputTarget = fieldInputValue.value;
  const timeInputTarget = timeInputValue.value;

  let validInput = validationAlert(fieldInputTarget, timeInputTarget);

  if (validInput) {
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
