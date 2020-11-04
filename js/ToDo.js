class ToDo {


    constructor(todo) {
        this.todo = todo;
    }

     
    render = () => {
        let database = firebase.database();
        let d = new Date()
        let date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        let btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = "Borrar"
        let btnSubir = document.createElement("button");
        btnSubir.innerHTML = "Subir"
        let btnBajar = document.createElement("button");
        btnBajar.innerHTML = "Bajar"
        let component = document.createElement("div");
        component.className = "contenedortodos"
        let fecha = document.createElement("div");
        fecha.innerHTML = date
        let textotodo = document.createElement("div");
        textotodo.innerHTML = this.todo.textoTarea;

        switch (this.todo.estado) {
            case 'ToDo':
                component.appendChild(btnEliminar)
                component.appendChild(fecha)
                component.appendChild(textotodo)
                component.appendChild(btnSubir)

                break;

            case 'Doing':
                component.appendChild(btnEliminar)
                component.appendChild(fecha)
                component.appendChild(textotodo)
                component.appendChild(btnSubir)
                component.appendChild(btnBajar)
                break;

            case 'Done':

                component.appendChild(btnEliminar)
                component.appendChild(fecha)
                component.appendChild(textotodo)
                component.appendChild(btnBajar)
                break;

        }

        btnSubir.addEventListener("click", ()=>{

            switch (this.todo.estado) {

                case "ToDo":
                    console.log("okay")
                    
                    database.ref("Tareas/ToDo/" + this.todo.id).set(null)
                    this.todo.estado = "Doing"
                    database.ref("Tareas/Doing/" + this.todo.id).set(this.todo);
    
                    break;
    
                case "Doing":

                    database.ref("Tareas/Doing/" + this.todo.id).set(null)
                    this.todo.estado = "Done"
                    database.ref("Tareas/Done/" + this.todo.id).set(this.todo);
                    break;
            }

        })
        btnEliminar.addEventListener("click", () => {

            
            database.ref("Tareas/" + this.todo.estado + "/" + this.todo.id).set(null)


        })

        btnBajar.addEventListener("click", () => {

            switch (this.todo.estado) {

                case "Doing":
                    
                    database.ref("Tareas/Doing/" + this.todo.id).set(null)
                    this.todo.estado = "ToDo"
                    database.ref("Tareas/ToDo/" + this.todo.id).set(this.todo);
    
                    break;
    
                case "Done":

                    database.ref("Tareas/Done/" + this.todo.id).set(null)
                    this.todo.estado = "Doing"
                    database.ref("Tareas/Doing/" + this.todo.id).set(this.todo);
                    break;
            }   
        })
        return component;

    }

}
