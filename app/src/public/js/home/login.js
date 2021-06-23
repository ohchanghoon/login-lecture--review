'use strict';

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch('/login', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    // req를 json.stringify메서드를 사용해서 req를 문자열로 변환
    body: JSON.stringify(req),
  });
}
