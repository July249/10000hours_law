// js file

const shareButton = document.querySelector('.btn-share');
const openButton = document.querySelector('.btn-go');
const closeButton = document.querySelector('.btn-close');
const startButton = document.querySelector('.btn-exc');

const result = document.querySelector('.cont-result');
const modal = document.querySelector('#modal');
const loading = document.querySelector('.result-loading');

function calculator() {
  const fieldValue = document.querySelector('#field_value');
  let timeValue = document.querySelector('#time_value');
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector('.field_result');
  const timeResult = document.querySelector('.time_result');

  if (fieldValue.value == '') {
    alert('입력되지 않았습니다.');
    fieldValue.focus();
    return false;
  } else if (timeValue.value == '') {
    alert('입력되지 않았습니다.');
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert('잘못된 값입니다. 24 이하의 값을 입력하여 주세요.');
    return false;
  }

  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(() => {
    console.log('hello!~');
    loading.style.display = 'none';
    result.style.display = 'flex';

    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10);
  }, 1000);
}

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

/* window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
}; */

function copyUrl() {
  let url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다.');
  });
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);
