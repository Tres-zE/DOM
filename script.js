const btn = document.querySelector("[data-form-btn]");
/*se crea una funcion para agregar un evento al boton y que logre capturar datos*/
const createTask =  (evento) =>{
    evento.preventDefault();
    const imput = document.querySelector("[data-form-imput]");
    const value = imput.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add('card');/*la clase card esta en css*/
    imput.value = '';
    /*para mostrar datos en pantalla*/
    const content = `<div>                       
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content); 
}

console.log(btn);

/* Arrows funtions o funciones anonimas*/
btn.addEventListener("click" ,createTask);
