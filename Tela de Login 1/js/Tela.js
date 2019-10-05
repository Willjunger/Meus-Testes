var botaoEntrar = document.querySelector("#btn-entrar");
var inputEmail = document.querySelector("#input-email");
var inputSenha = document.querySelector("#input-senha");

botaoEntrar.addEventListener("click", function() {
	event.preventDefault();

	if (inputEmail.value !== "will") {
		alert("Login errado!");
    inputEmail.value = "";
  }

  if(inputSenha.value !== "123" ){
    alert("Senha invalida!");
    inputSenha.value="";
  }

});
