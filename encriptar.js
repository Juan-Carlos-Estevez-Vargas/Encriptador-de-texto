function encriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent =
      "Texto encriptado con éxito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("muñeco").src = "./img/encriptado.jpg";
  } else {
    document.getElementById("muñeco").src = "./img/muñeco.png";
    swal("Ooops!", "Debes ingresar un texto!", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent =
      "Texto desencriptado con éxito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("muñeco").src = "./img/desencriptado.jpg";
  } else {
    document.getElementById("muñeco").src = "./img/muñeco.png";
    swal("Ooops!", "Debes ingresar un texto!", "warning");
  }
}
