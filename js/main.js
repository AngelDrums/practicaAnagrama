let palabra1 = prompt("Ingrese la primera palabra");
let palabra2 = prompt("Ingrese la palabra a evaluar");

function anagramas(cad1, cad2) {
    let pl1;
    let pl2;
    let cnt = 0;

    pl1 = cad1.split('');
    pl2 = cad2.split('');

    pl1.sort();
    pl2.sort();

    if (pl1.length != pl2.length) {
        console.log(`Las palabras ${cad1} y ${cad2} no son Anagramas`)
    } else {
        for (let i = 0; i < pl1.length; i++) {
            if (pl1[i] != pl2[cnt]) {
                console.log(`Las palabras ${cad1} y ${cad2} no son Anagramas`)
                break;
            }
            cnt++;
        }
        if(cnt == pl1.length){
            console.log(`Felicidades, las palabras ${cad1} y ${cad2} si son anagramas`);
        }
    }
}

anagramas(palabra1, palabra2);