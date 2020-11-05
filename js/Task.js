class Task {


    constructor(task) {
        this.task = task;
    }

     
    render = () => {
        let database = firebase.database();
        let d = new Date()
        let date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        let btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = "x"
        btnEliminar.className="btnEliminar"
        let btnSubir = document.createElement("button");
        btnSubir.innerHTML = "↑"
        btnSubir.className="btnSubir"
        let btnBajar = document.createElement("button");
        btnBajar.innerHTML = "↓"
        btnBajar.className="btnBajar"
        let component = document.createElement("div");
        component.className = "tarjeta"
        let fecha = document.createElement("p");
        fecha.innerHTML = date
        let textotodo = document.createElement("div");
        textotodo.innerHTML = this.task.textoTarea;

        
        switch (this.task.estado) {
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

            switch (this.task.estado) {

                case "ToDo":
                    console.log("okay")
                    
                    database.ref("Tareas/ToDo/" + this.task.id).set(null)
                    this.task.estado = "Doing"
                    database.ref("Tareas/Doing/" + this.task.id).set(this.task);
    
                    break;
    
                case "Doing":

                    database.ref("Tareas/Doing/" + this.task.id).set(null)
                    this.task.estado = "Done"
                    database.ref("Tareas/Done/" + this.task.id).set(this.task);
                    break;
            }

        })
        btnEliminar.addEventListener("click", () => {

            
            database.ref("Tareas/" + this.task.estado + "/" + this.task.id).set(null)


        })

        btnBajar.addEventListener("click", () => {

            switch (this.task.estado) {

                case "Doing":
                    
                    database.ref("Tareas/Doing/" + this.task.id).set(null)
                    this.task.estado = "ToDo"
                    database.ref("Tareas/ToDo/" + this.task.id).set(this.task);
    
                    break;
    
                case "Done":

                    database.ref("Tareas/Done/" + this.task.id).set(null)
                    this.task.estado = "Doing"
                    database.ref("Tareas/Doing/" + this.task.id).set(this.task);
                    break;
            }   
        })
        return component;

    }

}
