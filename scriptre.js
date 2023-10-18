function validarFormulario1() {
    var selectCurso = document.getElementById("curso");
    var inputEnviar = document.getElementById("enviar");
    var mensajeError = document.getElementById("mensajeError");

    if (selectCurso.value === "") {
        mensajeError.textContent = "Debes seleccionar una opción válida en el campo 'Curso'.";
        inputEnviar.disabled = true; 
        return false; 
    } else {
        mensajeError.textContent = "";  
        inputEnviar.disabled = false; 
       
        return true;
    }
}

function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
    return true;
  }

  function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
      alert("Por favor, introduzca su nombre.");
      return false;
    }
    return true;
  }
  

  function mostrarCamposAdicionales() {
    var selectCurso = document.getElementById('curso');
    var camposAdicionales = document.getElementById('camposAdicionales');

    if (selectCurso.value === 'casado') {
        camposAdicionales.style.display = 'block';
    } else {
        camposAdicionales.style.display = 'none';
    }
}

function validarFormulario() {
    var selectCurso = document.getElementById('curso');
    var nombreConyuge = document.getElementById('conyuge').value;
    var numeroHijos = document.getElementById('hijos').value;

    if (selectCurso.value === 'casado' && (nombreConyuge.trim() === '' || isNaN(numeroHijos))) {
        alert('Por favor, completa los campos adicionales si estás casado.');
        return false; // Evitar el envío del formulario
    }
}