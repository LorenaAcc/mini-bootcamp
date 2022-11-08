const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa','Madrid','San José'];

    constructor() {

    }

    async ciudad(lugar = '') {

        //console.log('ciudad',lugar);
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data);
        return [];
    } catch (error) {
        return [];
    }
}

module.exports = Busquedas;