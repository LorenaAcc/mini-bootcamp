NodeJs


PARA EJECUTAR:

node app-non-blocking.js

ó

node app-non-blocking

--------------------------

PARA EJECUTAR CON nodemon:

nodemon app

(Para cancelar el proceso: CTRL+c)

---------------------------------

INSTALAR/DESINSTALAR PAQUETES:

Ej: colors

https://www.npmjs.com/package/colors

CREAR EL PACKAGE.JSON:

Para crear el package.json por defecto. Por consola:

npm init -Y

Manualmente. Por consola en el directorio del proyecto:

npm init

package name: sugiere nombre del directorio (ok)

version: cambiar a 0.0.1 (por el momento)

description: Es una simple tabla de multiplicar (pongo lo que quiero aquí)

entry point: sugiere el file del proyecto "app.js"  (ok)

test command: 

git repository:

keywords:

author: Lorena Martin

licence: (ISC) MIT

is this OK? (yes)



npm install colors


INSTALAR EL PAQUETE DE NODEMON EN DEV:

npm install nodemon --save-dev 
ó
npm install --save-dev nodemon


PARA DESINATALAR NODEMON:

npm uninstall nodemon

PARA DESINSTALAR EL PAQUETE DE COLORS:

npm uninstall colors

PARA INSTALAR VERSIÓN ESPECÍFICA, poner @ y la versión:

npm install colors@1.0.0

PARA ACTUALIZAR:

npm update

------------------------------------------------

INSTALAR EL PAQUETE YARGS:

npm i yargs

PARA INSTALAR VERSIÓN ESPECÍFICA, poner @ y la versión:


npm i yargs@nroVersion

-------------------------------------------
INSTALAR PAQUETE INQUIRER:

npm i inquirer

Si surje un error de require() not supported, solución rápida -> cambiar versión:

npm uninstall inquirer
npm i inquirer@8.1.2

----------------------------------------------
INSTALAR PAQUETE UUID:

npm i uuid
----------------------------------------------
AXIOS (Cliente HTTP basado en promesas para el navegador y node.js)

https://www.npmjs.com/package/axios

PARA INSTALAR AXIOS:

npm i axios

----------------------------------------------
MAPBOX ACCOUT

https://account.mapbox.com/

MAPBOX GEOCODING

https://docs.mapbox.com/api/search/geocoding/

----------------------------------------------------------
INSTALAR PAQUETE DOTENV:

npm i dotenv

(Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env en process.env. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de la aplicación The Twelve-Factor.)

---------------------------------------------------------------

INSTALAR CORS

https://www.npmjs.com/package/cors

	
	npm i cors

CORS es un paquete de node.js para proporcionar un middleware Connect/Express que se puede usar para habilitar CORS con varias opciones.

------------------------------------------------------------------
CREAR UN REALESE TAG 


git tag -a v1.0.0 -m "Fin sección 8"

git push --tags

-----------------------------------------------------------------

INSTALAR MONGOOSE

npm i mongoose

--------------------------------------------------------------
PAQUETE PARA ENCRIPTAR CONTRASEÑA: 

npm i bcryptjs


---------------------------------------------------------
PAQUETE PARA VALIDAR CAMPOS: 

npm i express-validator


-----------------------------------------------------------
PAQUETE JSONWEBTOKEN

npm i jsonwebtoken

-------------------------------------------------------------
To validate an ID token in Node.js, use the Google Auth Library for Node.js. Install the library:

npm install google-auth-library --save




uniqueid=CDC76F3C-F31B-4E9C-B767-3842330CECE'%20or%20'15'%3d'15&period=2020-09-30