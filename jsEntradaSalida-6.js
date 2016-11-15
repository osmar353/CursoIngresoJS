/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
//function sumar
//  /*declaracion
// de variables


	var numeroUno;
	var numeroDos;
	numeroUno= document.getElementById("numeroUno").value;
	numeroDos= document.getElementById("numeroDos").value;
	//v. 1.0
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var suma =numeroUno+numeroDos;
	alert("la uma es: " +suma);
	//v 2.0
	//numeroUno=parseInt(numerouno);
	//numeroDos=parseInt(numeroDos);
	//(var suma=numeroUno+numeroDos;

}

