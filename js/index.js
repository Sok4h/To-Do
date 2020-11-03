const database = firebase.database();
const inputTareas = document.getElementById("inputTareas");
const btnTarea = document.getElementById("btnTarea");
const containerTodo = document.getElementById("TodoContainer")

//To-Do
database.ref("Tareas/ToDo").on('value',function(data){

    containerTodo.innerHTML=""
    data.forEach(c=>{
        let valor = c.val();
        let tempTarea= new ToDo(valor)
        containerTodo.appendChild(tempTarea.render())

    })

})

btnTarea.addEventListener("click",()=>{

    let reference=database.ref("Tareas/ToDo").push();

    let todo={
        id:reference.key,
        textoTarea:inputTareas.value
    }
    reference.set(todo);
})
