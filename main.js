function tocaSomVitoria(){
document.querySelector("#som_tecla_vitoria").play()
}

document.querySelector(".tecla_vitoria").onclick = tocaSomVitoria;

function tocaSomDinheiro(){
    document.querySelector("#som_tecla_dinheiro").play()
    }
    
    document.querySelector(".tecla_dinheiro").onclick = tocaSomDinheiro;

function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play()
}

    document.querySelector(".tecla_vaia").onclick = tocaSomVaia;

function tocaSomAplausos(){
    document.querySelector('#som_tecla_aplausos').play()
}

    const listaDeTeclas = document.querySelectorAll(".tecla");

    listaDeTeclas[0].onclick = tocaSomAplausos
