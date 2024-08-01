//para obtener la lista de tareas del almacenamiento del navegador"localStorage"
let tasks= JSON.parse(localStorage.getItem('tasks')) || [];


//función para agregar una lista de tareas.
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
  

}