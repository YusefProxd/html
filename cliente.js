// Inicializar EmailJS con tu Public Key
(function(){
emailjs.init("1RtCIvFvN3_8NDtQt");
})();
function enviarCorreo(e) {
e.preventDefault(); // evitar recarga del form
emailjs.send("service_i7g8yuj", "template_bbpj9w3", {
/*emailjs.send("service_xxx", "template_xxx", {*/
from_name: document.getElementById("nombre").value,
from_lastname: document.getElementById("apellido").value,
from_telefono: document.getElementById("telefono").value,
from_email: document.getElementById("email").value,
message: document.getElementById("mensaje").value
})
.then((res) => {
alert("Correo enviado correctamente!");
console.log("Respuesta:", res);
})
.catch((err) => {
alert("Error al enviar el correo.");

console.error("Error:", err);
});
}