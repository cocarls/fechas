//La fecha de hoy
var date = new Date();


//La fecha de tu nacimiento
var miFecha= new Date(2004, 11, 22)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
var masTarde = date > miFecha

//Una variable que contenga el día de tu nacimiento
var dia = miFecha.getDate();

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
var mes = miFecha.getMonth() + 1;

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
var año = miFecha.getFullYear();


