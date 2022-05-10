const loginButton = document.getElementById('login');
const buttonEnviar = document.getElementById('submit-btn');
const formCadastrado = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.querySelector('#house');
const inputFamily = document.querySelectorAll('.radio');
const conteudo = document.querySelectorAll('.subject');
const avalia = document.querySelectorAll('.avaliacao');

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

function getInputRadio() { // pega o valor do input radio family
  for (let i = 0; i < inputFamily.length; i += 1) {
    if (inputFamily[i].checked) {
      return inputFamily[i].value;
    }
  }
}
function getInputContent() { // pega o valor do input content
  let materias = '';
  for (let i2 = 0; i2 < conteudo.length; i2 += 1) {
    if (conteudo[i2].checked === true) {
      materias += `${conteudo[i2].value}, `;
    }
<<<<<<< HEAD
    return materias.slice(0, -2);
=======
>>>>>>> f4153d5c6043f074cb9b75e36f57401b82e85771
  }
  return materias;
}
function getInputAvalia() { // pega o valor do input avaliação
  for (let i3 = 0; i3 < avalia.length; i3 += 1) {
    if (avalia[i3].checked) {
      return avalia[i3].value;
    }
  }
<<<<<<< HEAD
  formCadastrado.innerHTML = ''; //limpa o formulário de cadastro
  let textForm = document.createElement('p');
  textForm.innerText = 'Nome: ' + inputName.value + ' ' + inputLastname.value + '\n' + 'Email: ' + inputEmail.value + '\n' + 'Família: ' + getInputRadio('family') + '\n' + 'Casa: ' + valueHouse + '\n' + 'Matérias: ' + getInputContent('content') + '\n' + 'Avaliação: ' + getInputAvalia('rate') + '\n' + 'Observações: ' + textarea.value;
=======
}
function montaForm() {
  const valueHouse = house.options[house.selectedIndex].value; // pega o valor da House
  formCadastrado.innerHTML = '';
  const textForm = document.createElement('p');
  textForm.innerText = `Nome: ${inputName.value} ${inputLastname.value}
  Email: ${inputEmail.value}
  Família: ${getInputRadio()}
  Casa: ${valueHouse}
  Matérias: ${getInputContent()}
  Avaliação: ${getInputAvalia()}
  Observações: ${textarea.value}`;
>>>>>>> f4153d5c6043f074cb9b75e36f57401b82e85771
  formCadastrado.appendChild(textForm);
}

function alteraForm() {
  getInputRadio();
  getInputContent();
  getInputAvalia();
  montaForm();
}
// reduzi o tamanho da função pelo limite do lint

buttonEnviar.addEventListener('click', alteraForm);
