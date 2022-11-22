console.log('JS integrado en html');


function calcularSalario(){
    console.log('Calculando sueldo');
    var nota = document.getElementById('nota'). innerHTML = " ";
    console.log('Calculando sueldo');
    event.preventDefault();
    var sueldo;
    var horas = document.getElementById('horas').value;
    var tarifa = document.getElementById('tarifa').value;

    sueldo = tarifa*horas;

    if(sueldo<200){
        sueldo+=50;
        var result = document.getElementById('result');
        result.value = `$${sueldo}`;

        var nota = document.getElementById('nota'). innerHTML = "Se añade $50 por concepto de transporte";
    } else {
        var result = document.getElementById('result');
        result.value = `$${sueldo}`;
    }
    console.log('Calculando sueldo');
}

//funcion resetear form
function resetearForm(){
    console.log("resteando form..");
    event.preventDefault();
    ingresoDatos.reset();
    resultados.reset();
    var nota = document.getElementById('nota'). innerHTML = " ";
    return false;
}


