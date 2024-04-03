var op_clicked=false;
var num1 = 0;
var num2 = 0;
var op = "+";

function calc(value) {
	var result = 0;
	var strval = "";
	var output = document.getElementById("display_txt");
	switch(value) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case ".":
			if(output.value=="" || output.value=="0" || op_clicked == true) {
				output.value = value;
				op_clicked = false;
			} else {
				output.value += value;
			}
			break;

		case "+":
		case "-":
		case "*":
		case "/":
			num1 = output.value;
			op = value;
			op_clicked = true;
			break;
		case "%":
			strval = num1+op+num1+"*"+output.value+"/100"
			result = eval(strval);
			output.value=result;
			num1=result;
			op_clicked = true;
			break;
		case "I":
			strval=output.value;
			result = eval(strval);
			output.value=-result;
			num1=result;
			op_clicked = true;
			break
		case "=":
			strval = num1+op+output.value;
			result = eval(strval);
			output.value=result;
			op_clicked = true;
			num1=result;
			break;
		case "C":
			output.value = 0;
			break;

	}
}
