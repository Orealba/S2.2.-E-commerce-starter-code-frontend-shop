function validate(e) {
  e.preventDefault();
  let error = 0;

  let fName = document.getElementById('fName');
  let fEmail = document.getElementById('fEmail');
  let fLastN = document.getElementById('fLastN');
  let fAddress = document.getElementById('fAddress');
  let fPassword = document.getElementById('fPassword');
  let fPhone = document.getElementById('fPhone');

  let errorName = document.getElementById('errorName');
  let errorEmail = document.getElementById('errorEmail');
  let errorLastN = document.getElementById('errorLastN');
  let errorAddress = document.getElementById('errorAddress');
  let errorPassword = document.getElementById('errorPassword');
  let errorPhone = document.getElementById('errorPhone');

  let letters =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  let numbers = /^[0-9]+$/;
  let lettersandNumbers = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    fName.value == '' ||
    fName.value.length < 3 ||
    !fName.value.match(letters)
  ) {
    error++;
    fName.classList.add('is-invalid');
    errorName.style.display = 'block';
    errorName.textContent =
      'El nombre debe tener mínimo 3 caracteres y solo deben ser letras';
  } else {
    fName.classList.remove('is-invalid');
    errorName.style.display = 'none';
  }

  if (fEmail.value == '' || !fEmail.value.match(emailPattern)) {
    error++;
    fEmail.classList.add('is-invalid');
    errorEmail.style.display = 'block';
    errorEmail.textContent =
      'El email debe tener un formato válido (ej: user@example.com)';
  } else {
    fEmail.classList.remove('is-invalid');
    errorEmail.style.display = 'none';
  }

  if (
    fLastN.value == '' ||
    fLastN.value.length < 3 ||
    !fLastN.value.match(letters)
  ) {
    error++;
    fLastN.classList.add('is-invalid');
    errorLastN.style.display = 'block';
    errorLastN.textContent =
      'El apellido debe tener al menos 3 caracteres y solo letras';
  } else {
    fLastN.classList.remove('is-invalid');
    errorLastN.style.display = 'none';
  }

  if (fAddress.value == '' || fAddress.value.length < 3) {
    error++;
    fAddress.classList.add('is-invalid');
    errorAddress.style.display = 'block';
    errorAddress.textContent = 'La dirección debe tener al menos 3 caracteres';
  } else {
    fAddress.classList.remove('is-invalid');
    errorAddress.style.display = 'none';
  }

  if (fPassword.value == '' || !fPassword.value.match(lettersandNumbers)) {
    error++;
    fPassword.classList.add('is-invalid');
    errorPassword.style.display = 'block';
    errorPassword.textContent =
      'La contraseña debe tener entre 4 y 8 caracteres, e incluir letras y números';
  } else {
    fPassword.classList.remove('is-invalid');
    errorPassword.style.display = 'none';
  }

  if (
    fPhone.value == '' ||
    !fPhone.value.match(numbers) ||
    fPhone.value.length > 9
  ) {
    error++;
    fPhone.classList.add('is-invalid');
    errorPhone.style.display = 'block';
    errorPhone.textContent =
      'El teléfono sólo debe contener números y debe tener 9 cifras';
  } else {
    fPhone.classList.remove('is-invalid');
    errorPhone.style.display = 'none';
  }
  if (error > 0) {
    alert('Por favor, coloque de forma correcta los campos en rojo.');
  } else {
    alert('Formulario completado correctamente.');
    window.location.href = 'index.html';
  }
}
