    const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < 9){

    listaDeTeclas[0].onclick = tocaSomAplausos ;
    contador = contador + 1 ;
    console.log(contador) ;
}