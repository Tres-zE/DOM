const btn = document.querySelector("[data-form-btn]");
/*se crea una funcion para agregar un evento al boton y que logre captar datos*/
const createTask =  (evento) =>{
    evento.preventDefault();
    const imput = document.querySelector("[data-form-imput]");
    console.log(imput.value); 
}

console.log(btn);

/* Arrows funtions o funciones anonimas*/
btn.addEventListener("click" ,createTask);
