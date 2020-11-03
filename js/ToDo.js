class ToDo{


    constructor(todo){
        this.todo=todo;
    }

    render=()=>{

        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        let btnEliminar= document.createElement("button");
        btnEliminar.innerHTML="Borrar"

        let component =document.createElement("div");
        component.className="contenedortodos"
        let fecha = document.createElement("div");
        fecha.innerHTML=date
        let textotodo=document.createElement("div");
     
        textotodo.innerHTML=this.todo.textoTarea;
        component.appendChild(fecha)
        component.appendChild(btnEliminar)
        component.appendChild(textotodo)
        btnEliminar.addEventListener("click",()=>{
            let database = firebase.database();
            database.ref("Tareas/ToDo/"+this.todo.id).set(null)

        })
        return component;

    }
}