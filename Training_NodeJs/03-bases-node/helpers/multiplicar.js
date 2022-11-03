const colors = require('colors/safe');

const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

        try{
            let salida = '';
            let consola = '';

            for(let i = 1; i <= hasta; i++){
                salida += `${base} x ${i} = ${base*i}\n`;
                consola += `${base} ${colors.brightCyan('x')} ${i} ${colors.brightCyan('=')} ${base*i}\n`;
            }

            if(listar){
                console.log(colors.rainbow('============='));
                console.log(colors.bold('TABLA DEL:', colors.brightMagenta(base)));
                console.log(colors.rainbow('============='));

                console.log(colors.brightBlue(consola));
            }         

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            return colors.green(`tabla-${base}.txt`);

        }catch(err){
            throw err;
        }    
}

module.exports = {
    crearArchivo
}