const database = firebase.database();
const inputTareas = document.getElementById("inputTareas");
const btnTarea = document.getElementById("btnTarea");
const containerTodo = document.getElementById("TodoContainer")
const containerDoing = document.getElementById("DoingContainer")
const containerDone= document.getElementById("DoneContainer");

//To-Do
database.ref("Tareas/ToDo").on('value',function(data){

    containerTodo.innerHTML=""
    data.forEach(c=>{
        let valor = c.val();
        let tempTarea= new Task(valor)
        containerTodo.appendChild(tempTarea.render())

    })

})

database.ref("Tareas/Doing").on('value',function(data){

    containerDoing.innerHTML=""
    data.forEach(c=>{
        let valor = c.val();
        let tempTarea= new Task(valor)
        containerDoing.appendChild(tempTarea.render())

    })

})

database.ref("Tareas/Done").on('value',function(data){

    containerDone.innerHTML=""
    data.forEach(c=>{
        let valor = c.val();
        let tempTarea= new Task(valor)
        containerDone.appendChild(tempTarea.render())

    })

})


btnTarea.addEventListener("click",()=>{     

    let reference=database.ref("Tareas/ToDo").push();

    let tarea={
        id:reference.key,
        textoTarea:inputTareas.value,
        estado: "ToDo"
    }
    reference.set(tarea);
})
