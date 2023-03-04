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
    /*para mostrar datos en pantalla*/
    console.log(checkComplete());
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

    console.log(content); 
}

console.log(btn);

/* Arrows funtions o funciones anonimas*/
btn.addEventListener('click' ,createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far');
    i.classList.add('fa-check-square');
    i.classList.add('icon');
    return i;
}