

function mostrarFormulario() { 
    var formulario = document.getElementById('Formulario');
    formulario.style.display = "block";  
}
          
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (isValid()) {
            var formulario = document.getElementById('Formulario');
            formulario.style.display = "none"; // Oculta el formulario después de enviar
            // Aquí también puedes mostrar un mensaje de confirmación si lo deseas
        }
    });
});

function isValid() {
    var password = document.getElementById("Password1");
    var email = document.getElementById("Email1");

    // Validación de la contraseña
    if (password.value.length !== 8) {
        alert('La contraseña debe tener exactamente 8 caracteres');
        return false;
    }

    // Validación del correo electrónico
    if (!email.value.includes('@')) {
        alert('El campo de correo electrónico debe contener el símbolo "@"');
        return false;
    }

    // Si las validaciones son correctas, se puede enviar el formulario
    return true;
}

