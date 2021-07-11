'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  psword = document.querySelector('#psword'),
  confirmPsword = document.querySelector('#confirm-psword'),
  registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
  };

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // req를 json.stringify메서드를 사용해서 req를 문자열로 변환
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = '/';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error('회원가입 중 에러 발생');
    });
}
