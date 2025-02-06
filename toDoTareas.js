function agregarTarea(){

    //capturamos la tarea a listar
    const nuevaTarea = document.getElementById("nuevaTarea");
    const textoTarea = nuevaTarea.value.trim();

    //capturamos el listado de tareas
    const listadoTarea = document.getElementById("listadoTareas");


    const li = document.createElement("li");
    li.innerHTML = `<span>${textoTarea}</span> <button class="borrar-btn">Eliminar</button>`;

    listadoTarea.appendChild(li);



}