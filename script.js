/*Entonces, para poder solucionar esto y que quede un poco más seguro nuestro 
código, vamos a utilizar algo que se llama immediately invoked function expression o 
bien por sus siglas: IIFE, que es tal cual, son funciones que en cuanto se declaran, 
se ejecutan.
Esto es con la finalidad que el codigo no este visible para el usuario*/


    import checkComplete from "./components/checkComplete.js";
    import deleteIcon from "./components/deletIcon.js";

    const btn = document.querySelector('[data-form-btn]');
    /*se crea una funcion para agregar un evento al boton y que logre capturar datos*/
    const createTask =  (evento) =>{
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');/*la clase card esta en css*/
        input.value = '';
        const taskContent = document.createElement('div');
        
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);

    };


    /* Arrows funtions o funciones anonimas*/
    btn.addEventListener('click' ,createTask);

