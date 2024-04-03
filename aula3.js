function onslider(idcolor, sld, txt, txthex) {
	var bgc = document.getElementById("container");
	var idc = document.getElementById(idcolor);
	var slider = document.getElementById(sld);
	var output = document.getElementById(txt);
	var outputhex = document.getElementById(txthex);
	var idr = document.getElementById("button1");
	var idg = document.getElementById("button2");
	var idb = document.getElementById("button3");
  	output.innerHTML = slider.value;
	outputhex.innerHTML="#"+parseInt(slider.value).toString(16).toUpperCase();
	switch(idcolor) {
		case "idred":
//			idr.style.backgroundColor="rgb("+slider.value+",0,0)";
			break;
		case "idgreen":
//			idg.style.backgroundColor="rgb(0,"+slider.value+",0)";
			break;
		case "idblue":
//			idb.style.backgroundColor="rgb(0,0,"+slider.value+")";
			break;

	}
    bgc.style.backgroundColor="rgb("+idr.value+","+idg.value+","+idb.value+")";
}
