function sumar( a, b ){
    return a+b;
}

const suma = sumar(4, 6);
console.log(suma);
console.log(sumar(4, 6));

///////////////////
function sumar2( a, b = 10 ){
    return a+b;
}

console.log(sumar2(4));

//CON FUNCION FLECHA
const sumar3 =  (a, b) => {
    return a+b
}

console.log( sumar3( 5, 10 ) );

//es lo mismo que hacer esto ya que tiene una sola línea lo que está entre llaves:
const sumar4 = (a,b) => a+b;

console.log( sumar4( 9, 10 ) );

//si no necesito argumentos:
const saludar = () => 'Hola Mundo';
console.log( saludar() );