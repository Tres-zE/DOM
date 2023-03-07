
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

export default checkComplete;