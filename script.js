const loginButton = document.getElementById('login');
const buttonEnviar = document.getElementById('submit-btn');
let formCadastrado = document.getElementById('evaluation-form');
let inputName = document.getElementById('input-name');
let inputLastname = document.getElementById('input-lastname');
let inputEmail = document.getElementById('input-email');
let house = document.querySelector('#house');
let inputFamily = document.querySelectorAll('.radio');
let conteudo = document.querySelectorAll('.subject');
let avalia = document.querySelectorAll('.avaliacao');

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

console.log(conteudo);

function alteraForm () {
  let valueHouse = house.options[house.selectedIndex].value; //pega o valor da House

  function getInputRadio(name) { //pega o valor do input radio family
    for(let i = 0; i < inputFamily.length; i += 1){
      if(inputFamily[i].checked) {
        return inputFamily[i].value;
      }
    }
  }

  function getInputContent(name) { //pega o valor do input content
    let materias = '';
    for (let i2 = 0; i2 < conteudo.length; i2 += 1) {
      if (conteudo[i2].checked == true) {
        materias += conteudo[i2].value + ', ';
      }
    }
    return materias;
  }

  function getInputAvalia(name) { //pega o valor do input avaliação
    for(let i3 = 0; i3 < avalia.length; i3 += 1) {
      if(avalia[i3].checked) {
        return avalia[i3].value;
      }
    }
  }
  formCadastrado.innerHTML = '';
  let textForm = document.createElement('p');
  textForm.innerText = 'Nome: ' + inputName.value + ' ' + inputLastname.value + '\n' + 'Email: ' + inputEmail.value + '\n' + 'Família: ' + getInputRadio('family') + '\n' + 'Casa: ' + valueHouse + '\n' + 'Matérias: ' + getInputContent('content') + '\n' + 'Avaliação: ' + getInputAvalia('rate') + '\n' + 'Observações: ' + textarea.value;
  formCadastrado.appendChild(textForm);
  console.log(getInputContent('content'));
}

buttonEnviar.addEventListener('click', alteraForm);