function Mostrar()
{
//tomo la edad  
var edad;


edad = document.getElementById("edad"). value;
//alert(laEdad);
console.log("esto es un test y la edad es"+ edad)

if(edad>17)
{
	alert("Usted es mayor de edad");
}
else
{
	alert("usted es menor de edad");
}
}//FIN DE LA FUNCIÓN