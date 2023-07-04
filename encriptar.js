/**
 * Encrypts the input text using a substitution cipher.
 * Replaces the vowels 'e', 'i', 'a', 'o', and 'u' with their corresponding substitutions.
 * Displays success or error messages based on the input text.
 */
function encryptText() {
  // Get input text from the DOM
  let text = document.getElementById("texto").value;

  // Get DOM elements for displaying messages
  let messageTitle = document.getElementById("titulo-mensaje");
  let messageParagraph = document.getElementById("parrafo");
  let dollImage = document.getElementById("muñeco");

  // Encrypt the text using substitution
  let encryptedText = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Check if input text is not empty
  if (text.length !== 0) {
    // Update the input with the encrypted text
    document.getElementById("texto").value = encryptedText;

    // Update the message elements
    messageTitle.textContent = "Texto encriptado con éxito";
    messageParagraph.textContent = "";
    dollImage.src = "./img/encriptado.jpg";
  } else {
    // Update the doll image, message title, and paragraph
    dollImage.src = "./img/muñeco.png";
    messageTitle.textContent = "Ningún mensaje fue encontrado";
    messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    // Show a warning message using a popup
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

/**
 * Decrypts the given text using a specific set of rules.
 *
 * @return {undefined} This function does not return a value.
 */
function decryptText() {
  let text = document.getElementById("texto").value;
  let titleMessage = document.getElementById("titulo-mensaje");
  let paragraph = document.getElementById("parrafo");
  let doll = document.getElementById("muñeco");

  let decryptedText = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (text.length !== 0) {
    document.getElementById("texto").value = decryptedText;
    titleMessage.textContent = "Texto desencriptado con éxito";
    paragraph.textContent = "";
    doll.src = "./img/desencriptado.jpg";
  } else {
    doll.src = "./img/doll.png";
    titleMessage.textContent = "No message found";
    paragraph.textContent = "Enter the text you want to encrypt or decrypt";
    swal("Ooops!", "You must enter some text", "warning");
  }
}
