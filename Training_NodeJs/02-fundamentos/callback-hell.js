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

const getEmpleado = ( id ) => {
    const empleado = empleados.find( e => e.id === id )

    if(empleado) {
        return empleado;    
    } else {
        return `Empleado con id ${id} no existe`
    }
       
}

console.log(getEmpleado ( 3 ));

/////////////////////////
const getEmpleadoConCallback = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )

    if(empleado) {
        callback(null, empleado.nombre);    
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
       
}

getEmpleadoConCallback( 1, ( err, empleado ) =>{
    if(err) {
        console.log('ERROR!!')
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado.nombre);
        
});



const getSalario = ( id, callback ) => {
    const salario = salarios.find( unSalario => unSalario.id === id )?.salario;

    if(salario) {
        callback(null, salario);    
    } else {
        callback(`Salario con id ${id} no existe`);
    }
       
}

getSalario(20, (err, salario) =>{
    if(err) {
        console.log('ERROR')
        return console.log(err);
    }
    console.log(salario);
});


////////////////////////////
getEmpleadoConCallback( 1, ( err, empleado ) =>{
    if(err) {
        console.log('ERROR!!')
        return console.log(err);
    }
    getSalario(3, (err, salario) =>{
        if(err) {
            console.log('ERROR')
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:',salario);
    });
        
});