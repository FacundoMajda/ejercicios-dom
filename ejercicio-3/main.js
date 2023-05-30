//CALCULADORA
let operacionSelect = document.getElementById("operacion");
let numero1Input = document.getElementById("numero1");
let numero2Input = document.getElementById("numero2");
let calcularButton = document.getElementById("calcular");
let resultadoP = document.getElementById("resultado");

calcularButton.addEventListener("click", () => {
  let numero1 = parseFloat(numero1Input.value);
  let numero2 = parseFloat(numero2Input.value);
  let operacion = operacionSelect.value;

  let resultado;
  if (operacion === "suma") {
    resultado = numero1 + numero2;
  } else if (operacion === "resta") {
    resultado = numero1 - numero2;
  } else if (operacion === "multiplicacion") {
    resultado = numero1 * numero2;
  } else if (operacion === "division") {
    resultado = numero1 / numero2;
  }
  resultadoP.textContent = resultado;
});
