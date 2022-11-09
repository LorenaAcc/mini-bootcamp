
const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa','Madrid','San José'];

    constructor() {

    }

    get paramsMapbox() {
        return {
            proximity:`ip`,
            language:`es`,
            access_token: process.env.MAPBOX_KEY,
            limit:5   
        }
    }

    async ciudad(lugar = '') {
        try{
            
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?proximity=ip&language=es&access_token=pk.eyJ1IjoibG9yZTMyIiwiYSI6ImNsYThkbzVwOTAyN2ozb3J5aW1tOXVwY3gifQ.eHzHgVhLPHQtZwoIXvA0tg&limit=5');

            //console.log(resp.data);
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        } catch (error) {         
            return [];
        }
    }
}

module.exports = Busquedas;