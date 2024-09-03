function mediaNotas() {

let media = new Array;
let matrizNotas = [ [10,8,9,6,8.7,10,6,7,9],
                    [10,3,1,7,9,8.5,0,1,10],
                    [3,7,3,10,10,9,1,2,8],
                    [10,9,8,7,6,2,1,10,8],
                    [10,8,9,7,6,3,1,10,9.5],
                    [10,9,10,8,7,10,6,10,6] ];

    for(let col=0; col <= 8; col++) {
        let soma = 0;
        for(let lin=0 ; lin <= 5; lin++) {
            soma += matrizNotas[lin][col];
        }
        media[col] = soma / 6;
    }
    document.getElementById("demo").innerHTML = media;
}
