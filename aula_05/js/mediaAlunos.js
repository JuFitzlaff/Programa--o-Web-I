function notas() {
    let matrizNotas = [ [10,8,9,6,8.7,10,6,7,9],
                        [10,3,1,7,9,8.5,0,1,10],
                        [3,7,3,10,10,9,1,2,8],
                        [10,9,8,7,6,2,1,10,8],
                        [10,8,9,7,6,3,1,10,9.5],
                        [10,9,10,8,7,10,6,10,6] ];

    return matrizNotas;
}

function mediaNotas() {
    let matrizNotas = notas();
    let media = [];

    for(let col=0; col <= 8; col++) {
        let soma = 0;
        for(let lin=0 ; lin <= 5; lin++) {
            soma += matrizNotas[lin][col];
        }
        media[col] = soma / 6;
    }
    return media;
}

function apresentaMediaNotas() {
    let media = mediaNotas();
    let tabela = document.getElementById("tabela");
    let linhaMedia = tabela.insertRow(-1); 
    let celula = linhaMedia.insertCell(0);

    for(let col = 0; col <= 8; col++) {
        let celula = linhaMedia.insertCell(col + 1);
            celula.innerHTML = media[col].toFixed(2);
   }
}

function mediaAlunos() {
    let matrizNotas = notas();
    let media = [];

    for (let lin = 0; lin <= 5; lin++) {
        let soma = 0;
        for (let col = 0; col <= 8; col++) {
            soma += matrizNotas[lin][col];
        }
        media[lin] = soma / 9;
    }
    return media;
}

function apresentaMediaAlunos() {
    let media = mediaAlunos();
    let tabela = document.getElementById("tabela");

    for (let lin = 2; lin <= 7; lin++) { 
        tabela.rows[lin].insertCell(-1).innerHTML = media[lin - 2].toFixed(2); 
    }
}