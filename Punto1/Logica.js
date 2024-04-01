


function sumarCuadros(arrayNumeros){
    let sum = 0;
    for(let i=0; i<arrayNumeros.length; i++){
        const num = arrayNumeros[i];
        const numStr = num.toString(); // Convertir el número a cadena
        sum += num;
        const long = numStr.length;

        console.log("+ " + '-'.repeat(long) + " +"); // Usar la longitud de la cadena
        console.log("| " + num + " |");
        console.log("+ " + "-".repeat(long) + " +"); // Usar la longitud de la cadena
    }
    console.log("+ " + "=".repeat(sum.toString().length) + " +"); // Usar la longitud de la cadena convertida a número
    console.log("| " + sum + " |");
    console.log("+ " + "=".repeat(sum.toString().length) + " +"); // Usar la longitud de la cadena convertida a número
}

sumarCuadros([521, 52222, 532, 4]); // Llamada a la función
