function validarFormulario() {
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirma-senha").value;
    var erroSenha = document.getElementById("erro-senha");
  
    if (senha !== confirmaSenha) {
      erroSenha.innerHTML = "As senhas não correspondem.";
      return false; 
    } else {
      erroSenha.innerHTML = ""; 
      return true;
    }
  }