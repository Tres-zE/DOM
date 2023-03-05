/*Entonces, para poder solucionar esto y que quede un poco más seguro nuestro 
código, vamos a utilizar algo que se llama immediately invoked function expression o 
bien por sus siglas: IIFE, que es tal cual, son funciones que en cuanto se declaran, 
se ejecutan.*/

( () => { 

const btn = document.querySelector("[data-form-btn]");
/*se crea una funcion para agregar un evento al boton y que logre capturar datos*/
const createTask =  (evento) =>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-imput]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add('card');/*la clase card esta en css*/
    input.value = '';
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `                      
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);

}


/* Arrows funtions o funciones anonimas*/
btn.addEventListener('click' ,createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon' );
    i.addEventListener('click' ,completeTask);
    return i;
}

const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle('fas');/*esta clase es de la etiqueta i*/
    element.classList.toggle('completeIcon');/*esta clase se encuentra en css*/
    element.classList.toggle('far');
    /*toggle es para verificar si esta la clase:
    si existe la quito y sino la pongo
    (para poder marcar o desmarcar)*/
}

} ) ();