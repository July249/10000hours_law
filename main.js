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

/* Input Color Warning */
if (!!fieldInputValue) {
  fieldInputValue.style.border = 'none';
} else {
  fieldInputValue.style.border = '4px solid rgb(255, 73, 73)';
}

if (!!timeInputValue) {
  timeInputValue.style.border = 'none';
} else {
  timeInputValue.style.border = '4px solid rgb(255, 73, 73)';
}

/* Functions */
function validationTest(field, time) {
  const strRegExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|[A-Za-z]/g; // '0' ~ '9'가 아닌 문자(숫자가 아닌 문자)가 한 번 이상 반복되는 문자열을 전역 검사한다
  const numRegExp = /[0-9]/g; // '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검사한다
  let inputValid = false;

  if (!strRegExp.test(field) && !numRegExp.test(time)) {
    alert('입력 사항을 적어 주세요.');
    fieldInputValue.style.border = '4px solid rgb(255, 73, 73)';
    timeInputValue.style.border = '4px solid rgb(255, 73, 73)';
  } else if (!strRegExp.test(field)) {
    alert('원하시는 전문 분야를 입력하여 주세요');
    fieldInputValue.style.border = '4px solid rgb(255, 73, 73)';
  } else if (!numRegExp.test(time)) {
    alert('하루에 훈련하실 시간을 입력하여 주세요');
    timeInputValue.style.border = '4px solid rgb(255, 73, 73)';
  } else if (time > 24 && numRegExp.test(time)) {
    alert('24시간 이내로 작성하여 주세요!');
    timeInputValue.style.border = '4px solid rgb(255, 73, 73)';
  } else {
    inputValid = true;
  }
  // console.log(strRegExp.test(field));
  // console.log(numRegExp.test(time));
  // console.log(`input유효성결과:${inputValid}`);
  return inputValid;
}

function calculateValues(e) {
  e.preventDefault();

  const fieldInputTarget = fieldInputValue.value;
  const timeInputTarget = timeInputValue.value;

  let validInput = validationTest(fieldInputTarget, timeInputTarget);

  if (validInput) {
    let trainingTimePerDay = Number(timeInputValue.value);
    timeOutputValue.textContent = Math.ceil(10000 / trainingTimePerDay);
    fieldOutputValue.textContent = fieldInputValue.value;

    resultArea.style.display = 'block';
  }

  /*
  // if (!!fieldInputValue.value === false && !!timeInputValue.value === false) {
  //   alert('입력 사항을 적어 주세요.');
  // } else if (!!fieldInputValue.value === false) {
  //   alert('원하시는 전문 분야를 입력하여 주세요');
  // } else if (!!timeInputValue.value === false) {
  //   alert('하루에 훈련하실 시간을 입력하여 주세요');
  // } else if (isNaN(Number(timeInputValue.value))) {
  //   alert('1이상 24미만의 숫자를 입력하여 주세요.');
  // } else if (Number(timeInputValue.value) > 24) {
  //   alert('24시간 이내로 작성하여 주세요!');
  // } else {
  //   let trainingTimePerDay = Number(timeInputValue.value);
  //   timeOutputValue.textContent = Math.ceil(10000 / trainingTimePerDay);
  //   fieldOutputValue.textContent = fieldInputValue.value;

  //   resultArea.style.display = 'block';
  // }
  */

  console.log(fieldOutputValue.textContent);
  console.log(timeOutputValue.textContent);
}

function openModal() {
  // For visibility property
  // 1. Add class
  modal.classList.add('open-modal');
  // 2. Use toggle
  // modal.classList.toggle('open-modal');
  // For display property
  // modal.style.display = 'flex';
}

function closeModal() {
  // For visibility property
  // 1. Remove class
  modal.classList.remove('open-modal');
  // 2. Use toggle
  // modal.classList.toggle('open-modal');
  // For display property
  // modal.style.display = 'none';
}
// For UI
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
