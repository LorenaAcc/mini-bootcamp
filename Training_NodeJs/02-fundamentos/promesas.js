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
        (salario) ? resolve(salario) : reject(`No existe salario para id ${id}`);
    });
}

const id = 1;
getEmpleadoConCallback(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));