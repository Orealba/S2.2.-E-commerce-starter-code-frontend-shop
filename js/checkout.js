// Exercise 6
function validate() {
  let error = 0;
  // Get the input fields
  let fName = document.getElementById('fName');
  let fEmail = document.getElementById('fEmail');
  let fLastN = document.getElementById('fLastN');
  let fAdress = document.getElementById('fAdress');
  let fPassword = document.getElementById('fPassword');
  let fPhone = document.getElementById('fPhone');

  // Get the error elements
  let errorName = document.getElementById('errorName');
  let errorEmail = document.getElementById('errorEmail');
  let errorLastN = document.getElementById('errorLastN');
  let errorAdress = document.getElementById('errorAdress');
  let errorPassword = document.getElementById('errorPassword');
  let errorPhone = document.getElementById('errorPhone');

  let letters = /^[A-Za-z]+$/;
  let numbers = /^[0-9]+$/;
  let lettersandNumbers = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate fields entered by the user: name, phone, password, and email

  if (fName.value == '' || fName.value.length < 3 || !fName.value.match(letters)) {
    error++;
    fName.classList.add('is-invalid');
    errorName.style.display = 'block';
	errorName.textContent = "El nombre debe tener mínimo 3 caracteres y solo deben ser letras"
  } else {
    fName.classList.remove('is-invalid');
    errorName.style.display('none');
  }

  if (fEmail.value == '' || fEmail.value.length < 3 || !fEmail.value.match(letters)) {
    error++;
    fEmail.classList.add('is-invalid');
    errorEmail.style.display = 'block';
  } else {
    fEmail.classList.remove('is-invalid');
    errorEmail.style.display('none');
  }

  if (fLastN.value == '') {
    error++;
    fLastN.classList.add('is-invalid');
    errorLastN.style.display = 'block';
  } else {
    fLastN.classList.remove('is-invalid');
    errorLastN.style.display('none');
  }
  if (fAdress.value == '') {
    error++;
    fAdress.classList.add('is-invalid');
    errorAdress.style.display = 'block';
  } else {
    fAdress.classList.remove('is-invalid');
    errorAdress.style.display('none');
  }
  if (fPassword.value == '') {
    error++;
    fPassword.classList.add('is-invalid');
    errorPassword.style.display = 'block';
  } else {
    fPassword.classList.remove('is-invalid');
    errorPassword.style.display('none');
  }
  if (fPhone.value == '') {
    error++;
    fPhone.classList.add('is-invalid');
    errorPhone.style.display = 'block';
  } else {
    fPhone.classList.remove('is-invalid');
    errorPhone.style.display('none');
  }
  if (error > 0) {
    alert('Por favor, completa todos los campos.');
  } else {
    alert('Formulario completado correctamente.');
  }
}
