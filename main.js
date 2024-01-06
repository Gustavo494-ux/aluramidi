function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento.localName === 'audio' && elemento) {
        elemento.play()
    } else {
        console.log('elemento não encontrado')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas.forEach(tecla => {
    tecla.onclick = function () {
        tocaSom(`#som_${tecla.classList[1]}`)
    }

    tecla.onkeydown = function (evento) {
        console.log(evento)
        if (evento.Code in ['Enter', 'Space']) {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
});