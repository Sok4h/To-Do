class ToDo{


    constructor(todo){
        this.todo=todo;
    }

    render=()=>{

        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        let btnEliminar= document.createElement("button");
        btnEliminar.innerHTML="Borrar"
        let btnSubir= document.createElement("button");
        btnSubir.innerHTML="Subir"
        let btnBajar = document.createElement("button");
        btnBajar.innerHTML="Bajar"
        let component =document.createElement("div");
        component.className="contenedortodos"
        let fecha = document.createElement("div");
        fecha.innerHTML=date
        let textotodo=document.createElement("div");
     
        textotodo.innerHTML=this.todo.textoTarea;
        component.appendChild(btnEliminar)
        component.appendChild(fecha)
        component.appendChild(textotodo)
        component.appendChild(btnSubir)
        btnEliminar.addEventListener("click",()=>{
            let database = firebase.database();
            database.ref("Tareas/ToDo/"+this.todo.id).set(null)

        })
        btnSubir.addEventListener("click",()=>{
            let database = firebase.database();
            database.ref("Tareas/ToDo/"+this.todo.id).set(null)
            database.ref("Tareas/Doing/"+this.todo.id).set(this.todo);

        })
        return component;

    }

    renderDoing=()=>{

        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        let btnEliminar= document.createElement("button");
        btnEliminar.innerHTML="Borrar"
        let btnSubir= document.createElement("button");
        btnSubir.innerHTML="Subir"
        let btnBajar = document.createElement("button");
        btnBajar.innerHTML="Bajar"
        let component =document.createElement("div");
        component.className="contenedortodos"
        let fecha = document.createElement("div");
        fecha.innerHTML=date
        let textotodo=document.createElement("div");
     
        textotodo.innerHTML=this.todo.textoTarea;
        component.appendChild(btnEliminar)
        component.appendChild(fecha)
        component.appendChild(textotodo)
        component.appendChild(btnSubir)
        component.appendChild(btnBajar)

        btnEliminar.addEventListener("click",()=>{
            let database = firebase.database();
            database.ref("Tareas/Doing/"+this.todo.id).set(null)

        })
        btnSubir.addEventListener("click",()=>{
            let database = firebase.database();
            database.ref("Tareas/Doing/"+this.todo.id).set(null)
            database.ref("Tareas/Done/"+this.todo.id).set(this.todo);

        })
        btnBajar.addEventListener("click",()=>{
            database.ref("Tareas/Doing/"+this.todo.id).set(null)
            database.ref("Tareas/ToDo/"+this.todo.id).set(this.todo);
        })
        return component;

    }

    renderDone=()=>{

        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        let btnEliminar= document.createElement("button");
        btnEliminar.innerHTML="Borrar"
        
        let btnBajar = document.createElement("button");
        btnBajar.innerHTML="Bajar"
        let component =document.createElement("div");
        component.className="contenedortodos"
        let fecha = document.createElement("div");
        fecha.innerHTML=date
        let textotodo=document.createElement("div");
     
        textotodo.innerHTML=this.todo.textoTarea;
        component.appendChild(btnEliminar)
        component.appendChild(fecha)
        component.appendChild(textotodo)
        component.appendChild(btnBajar)

        btnEliminar.addEventListener("click",()=>{
            let database = firebase.database();
            database.ref("Tareas/Done/"+this.todo.id).set(null)

        })
        btnBajar.addEventListener("click",()=>{
            database.ref("Tareas/Done/"+this.todo.id).set(null)
            database.ref("Tareas/Doing/"+this.todo.id).set(this.todo);
        })
        return component;

    }
}