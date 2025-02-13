function agregarTarea(){

    //capturamos la tarea a listar
    const nuevaTarea = document.getElementById("nuevaTarea");
    const textoTarea = nuevaTarea.value.trim();


    //validar si es un vacío
    if(textoTarea === ""){
        alert("Agregue una tarea");
        return;
    }

    //capturamos el listado de tareas
    const listadoTarea = document.getElementById("listadoTareas");


    const li = document.createElement("li"); //se crea un elemento <li></li>
    li.innerHTML = `<span>${textoTarea}</span> 
                        <button class="borrar-btn" onClick="borrarTarea(this)">Eliminar</button>`;

    listadoTarea.appendChild(li);

    nuevaTarea.value = "";


}

function borrarTarea(elementoTarea){
    elementoTarea.parentElement.remove();

}

const inputNuevaTarea = document.getElementById("nuevaTarea");

inputNuevaTarea.addEventListener("keypress", function(tecla){
    if(tecla.key === "Enter") { agregarTarea();

    }
});