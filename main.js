function validarFormulario() {
    var valorA = document.getElementById("campoA").value;
    var valorB = document.getElementById("campoB").value;
    var mensagemElemento = document.getElementById("mensagem");

    if (parseFloat(valorB) > parseFloat(valorA)) {
        mensagemElemento.innerHTML = "Formulário válido! B é maior que A.";
        mensagemElemento.classList.remove("erro");
    } else {
        mensagemElemento.innerHTML = "Formulário inválido! B deve ser maior que A.";
        mensagemElemento.classList.add("erro");
    }
}