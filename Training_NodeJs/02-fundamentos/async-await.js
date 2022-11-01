const empleados = [
    {
        id: 1,
        nombre: 'Lorena'
    },
    {
        id: 2,
        nombre: 'Sofia'
    },
    {
        id: 3,
        nombre: 'Karen'
    } 
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleadoConCallback = ( id ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;

    return new Promise( (resolve, reject)=> {
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });
   
}

const getSalario = (id) => {
    const salario = salarios.find( unSalario => unSalario.id === id )?.salario;
    
    return new Promise( (resolve, reject) => {
        (salario) ? resolve(salario) : reject(`No existe salario para el empleado con id ${id}`);
    });
}


const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleadoConCallback(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${ empleado } es de ${salario}`;
    } catch (error) {
        throw error;
    }
    
}

const id = 3;

getInfoUsuario(id)
    .then( msg => {
        console.log('TODO BIEN!');
        console.log( msg)
    })
    .catch( err => {
        console.log('TODO MAL!');
        console.log( err)
    });



