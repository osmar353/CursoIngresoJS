function Mostrar()
{
//tomo la edad  
/*
	var edad;
	var estadoCivil;

	edad = document.getElementById("edad"). value;
	estadoCivil = document.getElementById("estadoCivil"). value;

	if (laEdad<18 & estadoCivil !="soltero")
	{
		alert("es muy pequeño para NO ser soltero");
	}

//si (laEdad es mayor>18)
}//FIN DE LA FUNCIÓN
*/


//tomo la edad  

var edad = document.getElementById('edad').value;
var estado = document.getElementById('estadoCivil').value;
if (edad<18 & estado != "Soltero") 
{

	alert("Es muy pequeño para no ser soltero");

}
	


}//FIN DE LA FUNCIÓN