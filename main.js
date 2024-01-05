function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();       
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;
// ListaDeTeclas.forEach(element => {
//     element.onclick = tocaSomPom
// });

for (let index = 0; index < ListaDeTeclas.length; index++) {
    ListaDeTeclas[index].onclick = tocaSomPom;

}

