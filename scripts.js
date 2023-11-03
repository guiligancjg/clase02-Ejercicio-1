
function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

const boton = document.getElementById("sumar");

boton.addEventListener("click", () => {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  const resultado = document.getElementById("resultado");

  suma(numero1, numero2, (resultadoSuma) => {
    if (!isNaN(resultadoSuma)) {
      resultado.value = resultadoSuma;
    } else {
      resultado.value = "Ingrese números válidos en ambos campos";
    }
  });
});



  