setTimeout( function(){
    console.log('Hola Mundo');
}, 3000 );



setTimeout(() => {
    console.log('Hola Mundo!!');
}, 5000 );


const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Lorena'
    }

    setTimeout( ()=>{
       callback(usuario)
    }, 1000)
}

//getUsuarioByID( 10 );

getUsuarioByID( 10, () => {
    console.log('Hello world');
} );

getUsuarioByID( 11, ( elUsuario ) => {
    console.log(elUsuario);
} );