function calcularPromedio(){
    let matematica = parseInt(document.getElementById("matematica").value);
    let lengua = parseInt(document.getElementById("lengua").value);
    let efsi = parseInt(document.getElementById("efsi").value);

    if (isNaN(matematica) || isNaN(lengua) || isNaN(efsi)) {
        alert("Por favor, complete todos los campos de calificaciones.");
        return;
    }

    if(!validarNotas(matematica, lengua, efsi)){
        document.getElementById("result").innerHTML = "Valores prohibidos de notas.";
    }
    else{
        var promedio = (matematica + lengua + efsi) / 3
            document.getElementById("result").innerHTML = "Promedio: " + promedio;
            if (promedio >= 6)
            {
                document.getElementById("result").style.color = "green";
            }
            else{
                document.getElementById("result").style.color = "red";
            }
    }
}
function mayorNota(){
    let matematica = parseInt(document.getElementById("matematica").value);
    let lengua = parseInt(document.getElementById("lengua").value);
    let efsi = parseInt(document.getElementById("efsi").value);

    if (isNaN(matematica) || isNaN(lengua) || isNaN(efsi)) {
        alert("Por favor, complete todos los campos de calificaciones.");
        return;
    }
    
    if(!validarNotas(matematica, lengua, efsi)){
        document.getElementById("result").innerHTML = "Valores prohibidos de notas.";
    }
    else{
        if(matematica > lengua && matematica > efsi){
            document.getElementById("result2").innerHTML = "Matematica: " + matematica;
        }
        else if(lengua > efsi){
            document.getElementById("result2").innerHTML = "Lengua: " + lengua;
        }
        else{
            document.getElementById("result2").innerHTML = "Efsi: " +efsi;
        }
    }
}

function validarNotas(matematica, lengua, efsi){
    if(matematica > 10 || matematica < 0 || lengua > 10 || lengua < 0 || efsi > 10 || efsi < 0){
        return false;
    }
    else{
        return true;
    }
}
