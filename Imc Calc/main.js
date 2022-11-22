function calculo() {
    var peso = parseFloat(document.getElementById("peso").value);
    
    var altura = parseFloat(document.getElementById("altura").value);
    
    var calc = peso / (altura * altura);

    console.log(calc);

    if(calc < 18.5){
        var resultado = "Abaixo do Peso";
    }else if(calc > 18.5 && calc <= 24.9){
         var resultado = "Peso normal"; 
    }else if(calc > 25 && calc <= 29.99){
        var resultado = "Sobrepeso"; 
   }else if(calc > 30 && calc <= 34.9){
    var resultado = "Obesidade Grau 1"; 
    }else if(calc > 35 && calc <= 39.9){
        var resultado = "Obesidade Grau 2"; 
    }else if(calc >= 40){
        var resultado = "Obesidade Grau 3 ou Mórbida"; 
    }
    
    document.getElementById("resultado").innerText = "IMC = " + calc.toPrecision(3) + " " + resultado ;
  }