document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var denunciarButton = document.querySelector(".denunciar-button");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      alert("Denúncia enviada com sucesso!");
    });
  });