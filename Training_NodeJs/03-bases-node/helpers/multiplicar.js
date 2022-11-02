var colors = require('colors/safe');

const fs = require('fs');

const crearArchivo = async( base = 5, listar = false ) => {

        try{
            let salida = '';

            for(let i=1; i<11; i++){
                salida += `${base} ${colors.brightCyan('x')} ${i} ${colors.brightCyan('=')} ${base*i}\n`;
            }

            if(listar){
                console.log(colors.rainbow('============='));
                console.log(colors.bold('TABLA DEL:', colors.brightMagenta(base)));
                console.log(colors.rainbow('============='));

                console.log(colors.brightBlue(salida));
            }         

            fs.writeFileSync(`tabla-${base}.txt`, salida);

            return colors.green(`tabla-${base}.txt`);

        }catch(err){
            throw err;
        }    
}

module.exports = {
    crearArchivo
}