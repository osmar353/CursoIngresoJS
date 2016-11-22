function Mostrar()
{
//tomo la edad  

var laEdad;

laEdad = document.getElementById("edad"). value;
if(laEdad>17)
{
	alert("usted es adulto");

}//FIN DE LA FUNCIÓN
 //if(laEdad<13)
 //{
 	//alert("ested es un niño");
 //}
 //if(laEdad<12 && laEdad<18)
 //{
 	//alert("usted es adolescente");
 //}	
 
 //esta opcion es mejor para no consultar tantas veces al procesador:
 else
 {
 	if(laEdad<13)
 	{
 		alert("useted es un niño");

 	}	//if(laEdad<13)
 	else
 	{
 		alert("usted es adolescente");
 	}	
  }

}