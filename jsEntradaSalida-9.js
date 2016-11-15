/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	//var mi sueldo =document.getElementById("sueldo")
	//var mi sueldo aumento
	//mi sueldo aumento=mi sueldo *1.10;

	var sueldo;
	var resultado;
	var aumento;
	sueldo=document.getElementById("sueldo").value;
	sueldo=parseInt(sueldo);
	aumento=sueldo*0.10;
	resultado=aumento+sueldo;

	document.getElementById("resultado").value = resultado;

}
