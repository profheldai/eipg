/* (1)
    function Loading1() {
        alert("Sua página será carregada após clicar em OK");
    }
    (1) */

    /* (2)
    function Loading2() {
        if (confirm("Tem certeza que deseja acessar essa página ?")) {
            alert("OK... vamos entrar");
        } else 
            alert("Vamos entrar mesmo assim!");
    }
    (2) */

    /* (3)
    function SendName(){
        var Name = document.getElementById("Name").value;
        alert("Seja bem vindo "+Name);
    }
    (3) */


    /* (4)
    function calc() {
        var Num1 = parseFloat(document.getElementById("Num1").value);
        var Num2 = parseFloat(document.getElementById("Num2").value);
        var Result = document.getElementById("Result");
        var calcResult = 0;
        var Op = document.getElementById("operation").value;
        switch(Op) {
            case "sum":
                calcResult = Num1 + Num2;
                break;
            case "sub":
                calcResult = Num1 - Num2;
                break;
            case "mul":
                calcResult = Num1 * Num2;
                break;
            case "div":
                calcResult = Num1 / Num2;
                break;
        }
        
		if(isNaN(calcResult)) {
            alert("Verifique os números digitados");
        } else {
            Result.value = calcResult;
        }
    }
    (4) */
 
