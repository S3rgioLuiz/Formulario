var enviar = document.querySelector("#botao");
const cpf = document.querySelector("#cpf");
const telefone = document.querySelector("#telefone");
var senha = document.querySelector("#senha");
var csenha = document.querySelector("#csenha");
var email = document.querySelector("#email");

cpf.addEventListener("keypress", function (event) {
  if (event.keyCode < 48 || event.keyCode > 57) event.preventDefault();
  if (this.value.length == 3) this.value = this.value + ".";
  if (this.value.length == 7) this.value = this.value + ".";
  if (this.value.length == 11) this.value = this.value + "-";
  if (this.value.length >= 14) event.preventDefault();
});

telefone.addEventListener("keypress", function (event) {
  if (event.keyCode < 48 || event.keyCode > 57) event.preventDefault();
  if (this.value.length == 0) this.value = this.value + "(";
  if (this.value.length == 3) this.value = this.value + ") ";
  if (this.value.length == 10) this.value = this.value + " - ";
  if (this.value.length == 17) event.preventDefault();
});

senha.addEventListener("keypress", function (event) {
  if (this.value.length == 9) event.preventDefault();
});

csenha.addEventListener("keypress", function (event) {
  if (this.value.length == 9) event.preventDefault();
});

function validaEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

enviar.addEventListener("click", function (event) {
  event.preventDefault();
  var texto = document.getElementById("texto");
  var itens = document.querySelectorAll(".input");
  var campos = [
    " Nome",
    " CPF",
    " Email",
    " Telefone",
    " Login",
    " Senha",
    " Confirmação de Senha",
  ];
  var nomes = [];
  itens.forEach((elemento, indice) => {
    if (elemento.value == "") {
      elemento.classList.add("invalid");
      nomes.push(campos[indice]);
      elemento.addEventListener("change", function () {
        elemento.classList.remove("invalid");
      });
    } else if (
      elemento.classList.contains("invalid") == true &&
      elemento.value != ""
    )
      elemento.classList.remove("invalid");
  });
  //Validação Campos Vazios
  if (nomes.length == 1) texto.innerHTML = "Campo Obrigatório:" + nomes + ".";
  else if (nomes.length > 2)
    texto.innerHTML = "Campos Obrigatórios:" + nomes + ".";
  //Validação CPF
  else if (itens[1].value.length != 14) {
    itens[1].classList.add("invalid");
    texto.innerHTML = "CPF Inválido.";
  }
  //Validação Email
  else if (validaEmail(itens[2].value) == false) {
    itens[2].classList.add("invalid");
    texto.innerHTML = "Email Inválido";
  }
  //Validação Telefone
  else if (itens[3].value.length != 17) {
    itens[3].classList.add("invalid");
    texto.innerHTML = "Telefone Inválido.";
  }
  //Validação Senha e Confirmação de Senha
  else if (itens[5].value != itens[6].value) {
    itens[5].classList.add("invalid");
    itens[6].classList.add("invalid");
    texto.innerHTML = "Senha e Confirmação de Senha devem ser Iguais.";
  } else if (itens[5].value.length < 6 && itens[6].value.length < 6) {
    itens[5].classList.add("invalid");
    itens[6].classList.add("invalid");
    texto.innerHTML = "A Senha deve Possuir no Minino 6 Caracteres.";
  }
  //SUCESSO!
  else {
    document.getElementById("cadastro").submit();
  }
});
