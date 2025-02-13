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

    li.querySelector("span").addEventListener("click", function(){
        this.parentElement.classList.toggle("completado");
    })

    listadoTarea.appendChild(li);
    
    nuevaTarea.value = "";
    guardarTareasEnLocalStorage();


}

function borrarTarea(elementoTarea){
    elementoTarea.parentElement.remove();

}

const inputNuevaTarea = document.getElementById("nuevaTarea");

inputNuevaTarea.addEventListener("keypress", function(tecla){
    if(tecla.key === "Enter") { agregarTarea();

    }
});

function guardarTareasEnLocalStorage() {
   const tareas =[]; 
   document.querySelectorAll("li").forEach(tarea => {
    tareas.push({
        Nombre_Tarea: tarea.querySelector("span").innerText,
        Estado_Tarea: tarea.classList.contains("completado")
    });

   });

   localStorage.setItem("TareasGuardadas", tareas);

}

