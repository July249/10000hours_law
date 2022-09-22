// js file
/* Declare DOM Variables */

/* Input Values */
const fieldInputValue = document.getElementById('field-input');
const timeInputValue = document.getElementById('time-input');

/* Output Values */
let fieldOutputValue = document.getElementById('field-output');
let timeOutputValue = document.getElementById('time-output');

/* buttons */
const calculateBtn = document.querySelector('.btn-calc');
const openModalBtn = document.querySelector('.btn-go');
const closeModalBtn = document.querySelector('.btn-close');
// const shareBtn = document.querySelector('.btn-share');

/* Result */
const result = document.querySelector('.result-sec');

/* Modal */
const modal = document.querySelector('.modal-screen');

/* Define functions */
function calculateValues(e) {
  e.preventDefault();
  if (!!fieldInputValue.value === false && !!timeInputValue.value === false) {
    alert('입력 사항을 적어 주세요.');
  } else if (!!fieldInputValue.value === false) {
    alert('원하시는 전문 분야를 입력하여 주세요');
  } else if (!!timeInputValue.value === false) {
    alert('하루에 훈련하실 시간을 입력하여 주세요');
  } else if (isNaN(Number(timeInputValue.value))) {
    alert('1이상 24미만의 숫자를 입력하여 주세요.');
  } else if (Number(timeInputValue.value) > 24) {
    alert('24시간 이내로 작성하여 주세요!');
  } else {
    fieldOutputValue.value = fieldInputValue.value;
    let trainingTimePerDay = Number(timeInputValue.value);
    timeOutputValue.value = 10000 / trainingTimePerDay;

    result.style.display = 'block';
  }

  fieldOutputValue.innerText = fieldOutputValue.value;
  timeOutputValue.innerText = timeOutputValue.value;
}

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

// function shareResult() {}

calculateBtn.addEventListener('click', (e) => calculateValues(e));
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
// shareBtn.addEventListener('click', shareResult);
