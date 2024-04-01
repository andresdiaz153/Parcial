


function sumarCuadros(arrayNumeros){
    let sum = 0;
    for(let i=0; i<arrayNumeros.length; i++){
        const num = arrayNumeros[i];
        const numStr = num.toString(); 
        sum += num;
        const long = numStr.length;

        console.log("+ " + '-'.repeat(long) + " +"); 
        console.log("| " + num + " |");
        console.log("+ " + "-".repeat(long) + " +"); 
    }
    console.log("+ " + "=".repeat(sum.toString().length) + " +");
    console.log("| " + sum + " |");
    console.log("+ " + "=".repeat(sum.toString().length) + " +"); 
}

sumarCuadros([521, 52222, 532, 4]);
