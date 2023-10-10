/*1*/
        let cantidadDeGatos = 10;
        let contador = 1;
        let emoji = "";

        for (let i = 1; i <= cantidadDeGatos; i++) {
            switch (contador) {
                case 1:
                    emoji = "😺";
                    contador++;
                    break;
                case 2:
                    emoji = "😸";
                    contador++;
                    break;
                default:
                    emoji = "😹";
                    contador = 1;
            }

            document.write("<p>Gato #" + i + ": " + emoji + "</p>");
        }

        document.write("</br>");

/*1B*/
let cantidadDeGatos1 = 4;
let contador1 = 1;
let emoji1 = "";

for (let i = 1; i <= cantidadDeGatos1; i++) {
    switch (contador1) {
        case 1:
            emoji1 = "😺";
            contador1++;
            break;
        case 2:
            emoji1 = "😸";
            contador1++;
            break;
        default:
            emoji1 = "😹";
            contador1 = 1;
    }

    document.write("<p>Gato #" + i + ": " + emoji1 + "</p>");
}

document.write("</br>");

/*2B*/
let cantidadDeGatosB = 5;
let cantidadDePasosB = 3;

for (let i = 1; i <= cantidadDeGatosB; i++) {
    let pasos = "";

    for (let j = 0; j < cantidadDePasosB; j++) {
        pasos += '🐾';
    }

    document.write("<p>Gato #" + i + ": 🐈" + pasos + " </p>");
}


document.write("</br>");

/*2B1*/
let cantidadDeGatosB1 = 2;
let cantidadDePasosB1 = 8;

for (let i = 1; i <= cantidadDeGatosB1; i++) {
    let pasos = "";

    for (let j = 0; j < cantidadDePasosB1; j++) {
        pasos += '🐾';
    }
    document.write("<p>Gato #" + i + ": 🐈" + pasos + " </p>");
}
document.write("</br>");

/*2B2*/
        let cantidadDeGatosB2 = 10;
        let cantidadDePasosB2 = 3;

        for (let i = 1; i <= cantidadDeGatosB2; i++) {
            let pasos = "";

            for (let j = 0; j < cantidadDePasosB2; j++) {
                pasos += '🐾';
            }

            document.write("<p>Gato #" + i + ": 🐈" + pasos + " </p>");
        }
        document.write("</br>");


/*3*/
        let cantidadDeGatosC = 10;
        let cantidadDePasosC = 4;

        for (let i = 1; i <= cantidadDeGatosC; i++) {
            let pasos = "";
            let animalito = "🐈";

            for (let j = 0; j < cantidadDePasosC; j++) {
                pasos += '🐾';
            }

            if (i%2 === 0) {
                animalito = "🐈‍🐈";
            }

            document.write("<p>Gato #" + i + ": " + animalito + pasos + " </p>");
        }
