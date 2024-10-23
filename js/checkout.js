
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fLastN= document.getElementById("fLastN");
	var fAdress= document.getElementById("fAdress");
	var fPassword= document.getElementById("fPassword");
	var fPhone= document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorAdress = document.getElementById("errorAdress");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone= document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
		fName.classList.add("is-invalid");
		errorName.style.display = "block";
	} else {
		fName.classList.remove("is-invalid");
		errorName.style.display("none");
	}

	if(fEmail.value == ""){
		error++;
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "block";
	} else {
		fEmail.classList.remove("is-invalid");
		errorEmail.style.display("none");
	}
	if(fEmail.value == ""){
		error++;
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "block";
	} else {
		fEmail.classList.remove("is-invalid");
		errorEmail.style.display("none");
	}
	if(fLastN.value == ""){
		error++;
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "block";
	} else {
		fLastN.classList.remove("is-invalid");
		errorLastN.style.display("none");
	}
	if(fAdress.value == ""){
		error++;
		fAdress.classList.add("is-invalid");
		errorAdress.style.display = "block";
	} else {
		fAdress.classList.remove("is-invalid");
		errorAdress.style.display("none");
	}
	if(fPassword.value == ""){
		error++;
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "block";
	} else {
		fPassword.classList.remove("is-invalid");
		errorPassword.style.display("none");
	}
	if(fPhone.value == ""){
		error++;
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "block";
	} else {
		fPhone.classList.remove("is-invalid");
		errorPhone.style.display("none");
	}
	if (error > 0) {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Formulario completado correctamente.");
    }









	
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
