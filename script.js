const loginButton = document.getElementById('login');

function loginAlert() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginAlert);

const checkbox = document.getElementById('agreement');

function enableButton() {
  if (checkbox.value === 'on') {
    document.getElementById('submit-btn').disabled = false;
  }
}

checkbox.addEventListener('click', enableButton);

const textarea = document.querySelector('#textarea');
const counter = document.getElementById('counter');
function countLenght() {
  counter.innerText = 500 - textarea.value.length;
}

textarea.addEventListener('input', countLenght);
