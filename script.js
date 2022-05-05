const loginButton = document.getElementById('login');

function loginAlert() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && password === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginAlert);
