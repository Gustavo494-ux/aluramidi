function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();       
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(element => {
    element.onclick = function(){
        tocaSom(`#som_${element.classList[1]}`)
    }        
});