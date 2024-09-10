// Selecciona el elemento select por su ID
const distrito = document.getElementById('distrito');

// Establece el texto del placeholder
distrito.options[0].text = 'Seleccione su localidad.';

// Selecciona el elemento select por su ID
const actividad = document.getElementById('actividad');

// Establece el texto del placeholder
acticidad.options[0].text = 'Seleccione la actividad de su preferencia.';


function mostrarModal() {
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const domicilio = document.getElementById('domicilio').value;
    const localidad = document.getElementById('distrito').value;
    const edad = document.getElementById('edad').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const condMedica = document.getElementById('cond_medica').value;
    const alergia = document.getElementById('alergia').value;
    const actividad = document.getElementById('actividad').value;


    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');

    // Creamos una lista para mostrar los datos en formato de lista
    const dataList = document.createElement('ul');
    dataList.innerHTML = `
      <li>Nombre: ${nombre}</li>
      <li>D:N:I: ${dni}</li>
      <li>Correo Electrónico: ${email}</li>
      <li>Domiciio: ${domicilio}</li>
      <li>Localidad: ${localidad}</li>
      <li>Edad: ${edad}</li>
      <li>Peso: ${peso}</li>
      <li>Altura: ${altura}</li>
      <li>Condición Médica: ${condMedica}</li>
      <li>Alergias: ${alergia}</li>
      <li>Actividad Seleccionada: ${actividad}</li>
      

    `;

    // Limpiamos el contenido anterior del modal y agregamos la lista
    modalText.textContent = '';
    modalText.appendChild(dataList);

    // Agregamos los botones Enviar y Volver
    const buttonDiv = document.createElement('div');
    buttonDiv.innerHTML = `
      <button type="button" onclick="enviarDatos()">Enviar</button>
      <button type="button" onclick="cerrarModal()">Volver</button>
    `;
    modalText.appendChild(buttonDiv);

    modal.style.display = 'block';
}

function enviarDatos() {
    // Aquí agregarías la lógica para enviar los datos a un servidor
    alert('La inscripción ha sido completada');
    cerrarModal();
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function confirmarEliminacion() {
    if (confirm("¿Estás seguro que deseas eliminar los datos?")) {
        limpiarFormulario();
    }
}

function limpiarFormulario() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}