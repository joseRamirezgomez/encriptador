let output = document.getElementById("salida");
let mensajeEncriptado = "";
let mensajeDesencriptado = "";
let cont = 0;
let textInput = "";

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}
function encriptar() {
    textInput = document.getElementById("textinput").value;
    if (textInput === "") {
        alert("Ingrese un mensaje")
    } else {
        mensajeEncriptado = "";
        cont = 0;

        while (cont < textInput.length) {
            let letras = textInput.charAt(cont);
            cont++;
            if (letras === "a") {
                letras = "ai";
            } else if (letras === "e") {
                letras = "enter";
            } else if (letras === "i") {
                letras = "imes";
            } else if (letras === "o") {
                letras = "ober";
            } else if (letras === "u") {
                letras = "ufat";
            } else {
                letras = letras;
            }
            mensajeEncriptado += letras;
        }
        limpiar();
        asignarTextoElemento('areatext', `${mensajeEncriptado}`);
        
    }

}

function desencriptar() {
    textInput = document.getElementById("textinput").value;
    if (textInput === "") {
        alert("No ha ingresado ningún mensaje para ser descifrado");
    } else {
        mensajeDesencriptado = textInput
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        asignarTextoElemento('areatext', `${mensajeDesencriptado}`);
        limpiar();
    }
}

function copy() {
    let textarea = document.getElementById("areatext");
    let texto = textarea.value;
    navigator.clipboard.writeText(texto)
    .then(function() {
        console.log("Texto copiado:", texto);
        textarea.addEventListener('paste', function(event) {
            event.preventDefault();
            alert("Pegar está deshabilitado");
        });
    })
    .catch(function(error) {
        console.error("Error al copiar el texto:", error);
    });
    mostrarCopia()
}
function  limpiar() {
    let imagen = document.querySelector('.imagentext');
    let imagent = document.querySelector('.imagentext2');
    let botonc = document.querySelector('.copiar')
    imagent.style.display = "none";
    imagen.style.display = "none";
    botonc.style.display= "block";
}
function mostrarCopia() {
    let mensaje = document.querySelector(".copiado");
    mensaje.style.display = "flex";
  
    setTimeout(function() {
      mensaje.style.display = "none"; 
    }, 3000);
  }