/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
	concepto variable
	concatenacion
	prompt
	*/
	
	var producto;
	producto="samsung";	
	producto=prompt("ingrese marca", "sin marca");
	var precio=prompt("ingrese precio", "999")

	//concatenacion se hce con el signo+


	alert("su producto es:" +producto+ "y su precio es: "+precio);	
}

